import { useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import gale1 from "@/assets/1.jpeg";
import gale2 from "@/assets/2.jpeg";
import gale3 from "@/assets/3.jpeg";
import gale4 from "@/assets/4.jpeg";
import gale5 from "@/assets/5.jpeg";
import gale6 from "@/assets/6.jpeg";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  location: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: gale1,
    thumbnail: gale1,
    title: "Distribution alimentaire",
    location: "Kasaï, RDC",
  },
  {
    id: 2,
    type: "video",
    src: gale2,
    thumbnail: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=300&fit=crop",
    title: "Témoignage d'une mère",
    location: "Centre nutritionnel Kinshasa",
  },
  {
    id: 3,
    type: "image",
    src: gale3,
    thumbnail: gale3,
    title: "Classe en plein air",
    location: "École Esengo, Kinshasa",
  },
  {
    id: 4,
    type: "image",
    src: gale4,
    thumbnail: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop",
    title: "Soins médicaux",
    location: "Clinique mobile, Nord-Kivu",
  },
  {
    id: 5,
    type: "video",
    src: gale5,
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    title: "Journée de vaccination",
    location: "Village de Butembo",
  },
  {
    id: 6,
    type: "image",
    src: gale6,
    thumbnail: gale6,
    title: "Rentrée scolaire",
    location: "Kinshasa",
  },
  {
    id: 7,
    type: "image",
    src: gale5,
    thumbnail:gale5,
    title: "Centre nutritionnel",
    location: "Kasaï Central",
  },
  {
    id: 8,
    type: "image",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
    title: "Formation des enseignants",
    location: "Kinshasa",
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");

  const filteredItems = mediaItems.filter(
    (item) => filter === "all" || item.type === filter
  );

  const currentIndex = selectedItem
    ? filteredItems.findIndex((item) => item.id === selectedItem.id)
    : -1;

  const navigateGallery = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setSelectedItem(filteredItems[newIndex]);
  };

  return (
    <section id="galerie" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sur le Terrain
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Galerie Photos & Vidéos
            </h2>
            <p className="text-muted-foreground">
              Découvrez nos actions en images et vivez l'impact de notre travail 
              auprès des enfants et des communautés.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={filter === "all" ? "accent" : "outline"}
              onClick={() => setFilter("all")}
            >
              Tous
            </Button>
            <Button
              variant={filter === "image" ? "accent" : "outline"}
              onClick={() => setFilter("image")}
            >
              Photos
            </Button>
            <Button
              variant={filter === "video" ? "accent" : "outline"}
              onClick={() => setFilter("video")}
            >
              Vidéos
            </Button>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delay={index * 50}>
              <div
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-accent-foreground fill-current ml-1" />
                    </div>
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={() => setSelectedItem(null)}
          >
            <X className="h-6 w-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateGallery("prev");
            }}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateGallery("next");
            }}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Content */}
          <div
            className="max-w-5xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            ) : (
              <div className="aspect-video">
                <iframe
                  src={selectedItem.src}
                  title={selectedItem.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <div className="text-center mt-4">
              <p className="text-white font-semibold text-lg">{selectedItem.title}</p>
              <p className="text-white/70">{selectedItem.location}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
