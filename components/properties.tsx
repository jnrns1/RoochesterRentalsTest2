import { PropertyCard } from "./property-card"

const properties = [
  {
    title: "Modern Downtown Loft",
    location: "East Ave, Rochester",
    price: "$2,400",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    featured: true,
  },
  {
    title: "Charming Victorian Home",
    location: "Park Ave, Rochester",
    price: "$3,200",
    beds: 4,
    baths: 2,
    sqft: 2400,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    featured: false,
  },
  {
    title: "Luxury Waterfront Condo",
    location: "Corn Hill, Rochester",
    price: "$2,800",
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    featured: true,
  },
  {
    title: "Cozy Studio Apartment",
    location: "South Wedge, Rochester",
    price: "$1,200",
    beds: 1,
    baths: 1,
    sqft: 650,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    featured: false,
  },
  {
    title: "Spacious Family Home",
    location: "Brighton, Rochester",
    price: "$3,500",
    beds: 5,
    baths: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    featured: false,
  },
  {
    title: "Contemporary Townhouse",
    location: "College Town, Rochester",
    price: "$2,600",
    beds: 3,
    baths: 2,
    sqft: 1600,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    featured: true,
  },
]

export function Properties() {
  return (
    <section id="properties" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-4">
            Our Collection
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance">
            Featured Properties
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Explore our handpicked selection of premium rental properties across Rochester
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 border border-gold/50 text-gold font-semibold uppercase tracking-wider text-sm rounded-md hover:bg-gold/10 transition-colors duration-300"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  )
}
