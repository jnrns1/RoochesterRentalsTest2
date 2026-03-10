import { Award, Users, Home, Clock } from "lucide-react"

const stats = [
  { icon: Home, value: "500+", label: "Properties" },
  { icon: Users, value: "2,000+", label: "Happy Tenants" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support" },
]

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
        <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-4">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
                Rochester's Trusted Property Partner
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              For over 15 years, Rochester Rentals has been connecting people with their perfect homes. 
              We pride ourselves on our curated selection of quality properties and our commitment to 
              exceptional service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced professionals is dedicated to making your rental experience 
              seamless and enjoyable. From your first inquiry to move-in day and beyond, we're here 
              to support you every step of the way.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gold text-background font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-gold-light transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 sm:p-8 bg-card rounded-lg border border-border text-center"
              >
                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-gold/10 text-gold mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
