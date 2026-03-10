import { Bed, Bath, Square, MapPin } from "lucide-react"

interface PropertyCardProps {
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  image: string
  featured?: boolean
}

export function PropertyCard({
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  image,
  featured,
}: PropertyCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-gold/30 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-background text-xs font-semibold uppercase tracking-wider rounded">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="p-4 sm:p-6 space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 mt-1 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4" />
            <span className="text-sm">{sqft} sqft</span>
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-xl sm:text-2xl font-bold text-gold">{price}</span>
          <span className="text-sm text-muted-foreground">/month</span>
        </div>
      </div>
    </div>
  )
}
