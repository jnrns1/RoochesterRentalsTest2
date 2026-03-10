"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
      
      {/* Content */}
      <div className="container relative z-10 text-center pt-20 sm:pt-24">
        <div className="space-y-6 sm:space-y-8 pb-24">
          {/* Tagline */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold animate-fade-in">
            Premium Living in Rochester
          </p>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Discover Your</span>
            <br />
            <span className="text-gradient">Perfect Home</span>
          </h1>
          
          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Explore our curated selection of premium rental properties in Rochester. 
            From modern apartments to luxury houses, find the perfect place to call home.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#properties"
              className="w-full sm:w-auto px-8 py-4 bg-gold text-background font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-gold-light transition-colors duration-300"
            >
              View Properties
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 border border-gold/50 text-gold font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-gold/10 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#properties" aria-label="Scroll to properties">
          <ChevronDown className="w-8 h-8 text-gold/60" />
        </a>
      </div>
    </section>
  )
}
