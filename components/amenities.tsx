import { Wifi, Car, Shield, Sparkles, Dumbbell, Trees } from "lucide-react"

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Fiber-optic internet included in most properties",
  },
  {
    icon: Car,
    title: "Parking Included",
    description: "Dedicated parking spaces with many units",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Secure access and surveillance systems",
  },
  {
    icon: Sparkles,
    title: "Modern Finishes",
    description: "Updated appliances and contemporary design",
  },
  {
    icon: Dumbbell,
    title: "Fitness Centers",
    description: "On-site gyms in select properties",
  },
  {
    icon: Trees,
    title: "Green Spaces",
    description: "Access to parks and outdoor areas",
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-16 sm:py-20 lg:py-24">
        <div className="container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Premium Amenities
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Enjoy a range of amenities designed for comfortable, modern living
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.title}
              className="group p-6 sm:p-8 bg-card rounded-lg border border-border hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gold/10 text-gold mb-4 group-hover:bg-gold group-hover:text-background transition-colors duration-300">
                <amenity.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {amenity.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
