"use client"

import { useEffect, useRef, useState } from "react"

export function TestimonialsCarousel() {
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Ethan Williams",
      title: "Digital Marketing Specialist",
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      rating: 5,
      avatar: "/ethan.png",
    },
    {
      id: 2,
      name: "Daniel Thompson",
      title: "Product Designer",
      text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It's designed to put you in control of your payments.",
      rating: 5,
      avatar: "/Daniel.png",
    },
    {
      id: 3,
      name: "Daniel Thompson",
      title: "Product Designer",
      text: "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It's designed to put you in control of your payments.",
      rating: 5,
      avatar: "/Daniel.png",
    },
    {
      id: 4,
      name: "Ethan Williams",
      title: "Digital Marketing Specialist",
      text: "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      rating: 5,
      avatar: "/ethan.png",
    },
    {
      id: 5,
      name: "Sophia Johnson",
      title: "Software Engineer",
      text: "A payment app that prioritizes simplicity and transparency. With no hidden fees, it offers a straightforward and user-friendly experience, making every transaction clear and hassle-free. Take control of your payments with ease.",
      rating: 5,
      avatar: "/ethan.png",
    },
    {
      id: 6,
      name: "Sophia Johnson",
      title: "Software Engineer",
      text: "A payment app that prioritizes simplicity and transparency. With no hidden fees, it offers a straightforward and user-friendly experience, making every transaction clear and hassle-free. Take control of your payments with ease.",
      rating: 5,
      avatar: "/Daniel.png",
    },
  ]

  useEffect(() => {
    if (!isAutoPlay || !containerRef.current) return

    const container = containerRef.current
    const scrollInterval = setInterval(() => {
      const itemWidth = container.querySelector(".testimonial-card")?.clientWidth || 0
      const gap = 24 // gap-6 = 24px
      container.scrollLeft += itemWidth + gap
    }, 1000) // Scroll every 1 seconds

    return () => clearInterval(scrollInterval)
  }, [isAutoPlay])

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Customer <span className="text-orange-600">satisfaction</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">Our instant loan process is designed for speed and convenience</p>
        </div>

        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card flex-shrink-0 w-full sm:w-96 snap-start bg-white border border-gray-200 rounded-2xl p-8"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-5">{testimonial.text}</p>

              {/* Customer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
