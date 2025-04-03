'use client'

import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    }
  }

  return timeLeft
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-[#faf7f5] p-6 rounded-lg">
          <span className="block text-3xl font-bold text-[#d4a373] mb-2">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-gray-600 capitalize">
            {unit}
          </span>
        </div>
      ))}
    </div>
  )
}