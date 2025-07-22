"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Shield, Clock, Star, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TimeSlot {
  time: string
  available: boolean
}

interface CalendarDay {
  date: Date
  day: number
  available: boolean
  isToday: boolean
  isSelected: boolean
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [userTimezone, setUserTimezone] = useState<string>("")
  const [formData, setFormData] = useState({
    fullName: "",
    practiceName: "",
    websiteUrl: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
  })
  const [errors, setErrors] = useState({
    fullName: "",
    practiceName: "",
    websiteUrl: "",
    email: "",
    appointmentDate: "",
    appointmentTime: "",
  })

  // Get user's timezone on component mount
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    setUserTimezone(timezone)
  }, [])

  // Generate available time slots (14:00-17:00 Argentina time)
const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = []

  // Rango horario en Argentina (UTC-3): 14:00 a 17:00
  for (let hour = 14; hour < 17; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Fecha base en hora Argentina (UTC-3)
      const argentinaDate = new Date()
      argentinaDate.setUTCHours(hour + 3, minute, 0, 0) // UTC = Argentina + 3

      // Convertir a hora local del usuario
      const localTimeString = argentinaDate.toLocaleTimeString('en-US', {
        timeZone: userTimezone,
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      })

      slots.push({
        time: localTimeString,
        available: true,
      })
    }
  }

  return slots
}


  // Generate calendar days
  const generateCalendarDays = (): CalendarDay[] => {
    const days: CalendarDay[] = []
    const today = new Date()
    const startDate = new Date(today)
    startDate.setDate(today.getDate() + 3) // Start 3 days from today

    const currentMonth = currentDate.getMonth()
    const currentYear = currentDate.getFullYear()
    const firstDay = new Date(currentYear, currentMonth, 1)
    const lastDay = new Date(currentYear, currentMonth + 1, 0)

    // Add days from previous month to fill the grid
    const startingDayOfWeek = firstDay.getDay()
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(firstDay)
      date.setDate(firstDay.getDate() - i - 1)
      days.push({
        date,
        day: date.getDate(),
        available: false,
        isToday: false,
        isSelected: false,
      })
    }

    // Add days of current month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(currentYear, currentMonth, day)
      const dayOfWeek = date.getDay()
      const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5 // Monday to Friday
      const isAfterStartDate = date >= startDate
      const isToday = date.toDateString() === today.toDateString()
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString()

      days.push({
        date,
        day,
        available: isWeekday && isAfterStartDate,
        isToday,
        isSelected: isSelected || false,
      })
    }

    return days
  }
const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])

useEffect(() => {
  if (!userTimezone) return

  const generateTimeSlots = (): TimeSlot[] => {
    const slots: TimeSlot[] = []

    for (let hour = 14; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        // Crear hora en Buenos Aires
        const argentinaDate = new Date()
        argentinaDate.setUTCHours(hour + 3, minute, 0, 0)

        // Convertir a la hora local del usuario
        const localTimeString = argentinaDate.toLocaleTimeString('en-US', {
          timeZone: userTimezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })

        slots.push({ time: localTimeString, available: true })
      }
    }

    return slots
  }

  setTimeSlots(generateTimeSlots())
}, [userTimezone])

  const calendarDays = generateCalendarDays()

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      fullName: "",
      practiceName: "",
      websiteUrl: "",
      email: "",
      appointmentDate: "",
      appointmentTime: "",
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      isValid = false
    }

    if (!formData.practiceName.trim()) {
      newErrors.practiceName = "Practice name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!selectedDate) {
      newErrors.appointmentDate = "Please select an appointment date"
      isValid = false
    }

    if (!selectedTime) {
      newErrors.appointmentTime = "Please select an appointment time"
      isValid = false
    }

    // Website URL is optional, but if provided, should be valid
    if (
      formData.websiteUrl.trim() &&
      !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(formData.websiteUrl)
    ) {
      newErrors.websiteUrl = "Please enter a valid URL"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setFormData((prev) => ({
      ...prev,
      appointmentDate: date.toISOString().split("T")[0],
    }))
    // Clear date error
    setErrors((prev) => ({ ...prev, appointmentDate: "" }))
  }

const getArgentinaTimeFromLocal = (timeLabel: string): string => {
  if (!selectedDate) return ""

  // Obtener fecha completa seleccionada en el navegador
  const [hourString, minuteString] = timeLabel.replace(/[^0-9:]/g, "").split(":")
  const hour = parseInt(hourString)
  const minute = parseInt(minuteString)
  const isPM = /PM/i.test(timeLabel)

  const localDate = new Date(selectedDate)
  localDate.setHours(isPM && hour !== 12 ? hour + 12 : hour, minute, 0, 0)

  // Convertir de hora local del usuario a Argentina (UTC-3)
  const argentinaTime = new Date(localDate.toLocaleString("en-US", { timeZone: "America/Argentina/Buenos_Aires" }))

  // Devolver en formato HH:mm (24h)
  return argentinaTime.toTimeString().slice(0, 5)
}


const handleTimeSelect = (time: string) => {
  const argentinaTimeString = getArgentinaTimeFromLocal(time)

  setSelectedTime(time)
  setFormData((prev) => ({
    ...prev,
    appointmentTime: argentinaTimeString, // Guardar en horario Argentina
  }))

  setErrors((prev) => ({ ...prev, appointmentTime: "" }))
}

  

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const submitToGoogleSheets = async (data: any) => {
    // TODO: Replace with actual Google Sheets URL
    const GOOGLE_SHEETS_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "YOUR_GOOGLE_SHEETS_URL_HERE"

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: data.fullName,
          practiceName: data.practiceName,
          websiteUrl: data.websiteUrl,
          email: data.email,
          appointmentDate: data.appointmentDate,
          appointmentTime: data.appointmentTime,
          userTimezone: userTimezone,
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit to Google Sheets")
      }

      return await response.json()
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets(formData)
      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      // You might want to show an error message to the user here
    } finally {
      setIsSubmitting(false)
    }
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F5F5F5]">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {!isSubmitted ? (
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <Link href="/" className="inline-block">
                <div className="text-xl font-normal text-[#1D3557]">
                  MUCHO<strong>DENTAL</strong>MARKETING
                </div>
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <div className="grid md:grid-cols-2">
                {/* Form Column */}
                <div className="p-6 md:p-10">
                  <div className="mb-8">
                    <h1 className="mb-3 text-3xl font-bold text-[#1D3557] md:text-4xl">
                      Schedule Your Free Consultation
                    </h1>
                    <p className="text-lg text-[#64748b]">
                      Book a personalized consultation to discuss your dental practice's digital marketing needs.
                    </p>
                  </div>

                  {/* Trust Icons */}
                  <div className="mb-8 grid grid-cols-3 gap-2">
                    {[
                      {
                        icon: <Shield className="h-6 w-6 text-[#4CAF50]" />,
                        label: "100% Risk-Free",
                      },
                      {
                        icon: <Star className="h-6 w-6 text-[#F4A261]" />,
                        label: "Custom Strategy",
                      },
                      {
                        icon: <Clock className="h-6 w-6 text-[#1D3557]" />,
                        label: "30-Min Session",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center rounded-lg bg-[#F8FAFC] p-3 text-center transition-all hover:bg-[#F1F5F9]"
                      >
                        <div className="mb-2 rounded-full bg-white p-2 shadow-sm">{item.icon}</div>
                        <span className="text-xs font-medium text-[#1D3557] md:text-sm">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="fullName" className="mb-1 block text-sm font-medium text-[#1D3557]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.fullName ? "border-red-500" : "border-gray-300"
                        } p-3 shadow-sm focus:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]/20`}
                        placeholder="Dr. John Smith"
                        aria-required="true"
                        aria-invalid={errors.fullName ? "true" : "false"}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="practiceName" className="mb-1 block text-sm font-medium text-[#1D3557]">
                        Practice Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="practiceName"
                        name="practiceName"
                        value={formData.practiceName}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.practiceName ? "border-red-500" : "border-gray-300"
                        } p-3 shadow-sm focus:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]/20`}
                        placeholder="Bright Smile Dental"
                        aria-required="true"
                        aria-invalid={errors.practiceName ? "true" : "false"}
                      />
                      {errors.practiceName && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.practiceName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="websiteUrl" className="mb-1 block text-sm font-medium text-[#1D3557]">
                        Current Website URL <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="websiteUrl"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.websiteUrl ? "border-red-500" : "border-gray-300"
                        } p-3 shadow-sm focus:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]/20`}
                        placeholder="https://yourpractice.com"
                        aria-invalid={errors.websiteUrl ? "true" : "false"}
                      />
                      {errors.websiteUrl && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.websiteUrl}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#1D3557]">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } p-3 shadow-sm focus:border-[#F4A261] focus:outline-none focus:ring-2 focus:ring-[#F4A261]/20`}
                        placeholder="john@brightsmile.com"
                        aria-required="true"
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Calendar Section */}
                    <div>
                      <label className="mb-3 block text-sm font-medium text-[#1D3557]">
                        Select Appointment Date <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`rounded-lg border ${errors.appointmentDate ? "border-red-500" : "border-gray-300"} p-4`}
                      >
                        {/* Calendar Header */}
                        <div className="mb-4 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => navigateMonth("prev")}
                            className="rounded-lg p-2 hover:bg-gray-100"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <h3 className="text-lg font-semibold text-[#1D3557]">
                            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                          </h3>
                          <button
                            type="button"
                            onClick={() => navigateMonth("next")}
                            className="rounded-lg p-2 hover:bg-gray-100"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="p-2 text-sm font-medium text-gray-500">
                              {day}
                            </div>
                          ))}
                          {calendarDays.map((day, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => day.available && handleDateSelect(day.date)}
                              disabled={!day.available}
                              className={`
                                p-2 text-sm rounded-lg transition-colors
                                ${
                                  day.available
                                    ? "hover:bg-[#F4A261]/20 cursor-pointer"
                                    : "text-gray-300 cursor-not-allowed"
                                }
                                ${day.isSelected ? "bg-[#F4A261] text-white" : ""}
                                ${day.isToday && !day.isSelected ? "bg-blue-100 text-blue-600" : ""}
                              `}
                            >
                              {day.day}
                            </button>
                          ))}
                        </div>
                      </div>
                      {errors.appointmentDate && (
                        <p className="mt-1 text-sm text-red-500" role="alert">
                          {errors.appointmentDate}
                        </p>
                      )}
                    </div>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div>
                        <label className="mb-3 block text-sm font-medium text-[#1D3557]">
                          Select Time <span className="text-red-500">*</span>
                          <span className="ml-2 text-xs text-gray-500">
                            (Argentina office hours: 2:00 PM - 5:00 PM converted to your timezone)
                          </span>
                        </label>
                        <div
                          className={`grid grid-cols-2 gap-2 rounded-lg border ${errors.appointmentTime ? "border-red-500" : "border-gray-300"} p-4`}
                        >
                          {timeSlots.map((slot, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleTimeSelect(slot.time)}
                              disabled={!slot.available}
                              className={`
                                p-3 text-sm rounded-lg border transition-colors
                                ${
                                  selectedTime === slot.time
                                    ? "bg-[#F4A261] text-white border-[#F4A261]"
                                    : "border-gray-300 hover:border-[#F4A261] hover:bg-[#F4A261]/10"
                                }
                                ${!slot.available ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                              `}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                        {errors.appointmentTime && (
                          <p className="mt-1 text-sm text-red-500" role="alert">
                            {errors.appointmentTime}
                          </p>
                        )}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="group w-full bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="mr-2 h-5 w-5 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Scheduling...
                        </>
                      ) : (
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          <span>Schedule My Consultation</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-[#64748b]">
                      No spam. No sales calls. Just a valuable consultation about your practice's growth.
                    </p>

                    <div className="mt-4 rounded-lg bg-[#FFFAF0] p-3 text-center text-sm font-medium text-[#F4A261]">
                      Limited consultation slots available — book yours today.
                    </div>
                  </form>
                </div>

                {/* Website Preview Column - Desktop Only */}
                <div className="relative hidden bg-[#1D3557] md:block">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
                  </div>

                  <div className="relative z-10 flex h-full flex-col justify-center p-6 md:p-10">
                    {/* Website Preview Container */}
                    <div className="mb-8 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                      <h3 className="mb-4 text-xl font-bold text-white">See Our Work in Action</h3>
                      <div className="aspect-video rounded-lg bg-white/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="mb-4 rounded-full bg-white/20 p-4 mx-auto w-fit">
                            <Image
                              src="/placeholder.svg?height=60&width=60"
                              alt="Website Preview"
                              width={60}
                              height={60}
                              className="opacity-80"
                            />
                          </div>
                          <p className="text-white/80 text-sm">Website preview will be displayed here</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-white/80 text-center">
                        Example of a dental practice website we've created
                      </p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white">What You'll Get:</h3>
                      <div className="space-y-3">
                        {[
                          "Personalized marketing strategy",
                          "Website design consultation",
                          "SEO optimization plan",
                          "Social media strategy",
                          "Patient acquisition roadmap",
                          "ROI projections for your practice",
                        ].map((item, i) => (
                          <div key={i} className="flex items-start">
                            <div className="mr-3 mt-0.5 rounded-full bg-[#4CAF50]/20 p-1">
                              <Check className="h-4 w-4 text-[#4CAF50]" />
                            </div>
                            <span className="text-white">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-lg bg-[#F4A261]/10 p-4">
                        <p className="text-center text-sm font-medium text-white">
                          "We've helped over 200 dental practices increase new patient bookings by an average of 37%"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 text-center shadow-xl">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#4CAF50]/20 p-4">
                <Check className="h-12 w-12 text-[#4CAF50]" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#1D3557]">Consultation Scheduled!</h1>
            <p className="mb-6 text-xl text-[#64748b]">
              Your consultation with our team has been scheduled for{" "}
              <span className="font-semibold text-[#1D3557]">
                {selectedDate?.toLocaleDateString()} at {selectedTime}
              </span>
            </p>
            <div className="mb-8 rounded-lg bg-[#F5F5F5] p-6">
              <h3 className="mb-4 text-lg font-bold text-[#1D3557]">What happens next?</h3>
              <ol className="space-y-4 text-left">
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1D3557] text-white">
                    1
                  </div>
                  <p>
                    <span className="font-medium">Calendar invite sent:</span> Check your email for the meeting details
                    and video call link.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1D3557] text-white">
                    2
                  </div>
                  <p>
                    <span className="font-medium">Preparation:</span> We'll review your current online presence before
                    our call.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1D3557] text-white">
                    3
                  </div>
                  <p>
                    <span className="font-medium">During the call:</span> We'll discuss your goals and create a custom
                    growth strategy.
                  </p>
                </li>
              </ol>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="flex-1 bg-[#1D3557] hover:bg-[#1D3557]/90"
                onClick={() => (window.location.href = "/")}
              >
                Return to Homepage
              </Button>
              <Button
                className="flex-1 bg-[#F4A261] text-[#1D3557] hover:bg-[#F4A261]/90"
                onClick={() => (window.location.href = "/web-design")}
              >
                Learn More About Our Services
              </Button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-[#64748b]">
            © {new Date().getFullYear()} MUCHODENTALMARKETING. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="#" className="text-sm text-[#64748b] hover:text-[#1D3557]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-[#64748b] hover:text-[#1D3557]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
