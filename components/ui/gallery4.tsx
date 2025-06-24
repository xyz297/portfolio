"use client";

import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  type: 'Professional' | 'Personal';
  image: string;
  link?: string;
  period?: string;
  company?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
}

const Gallery4 = ({
  title = "Featured Projects",
  description = "A showcase of my professional and personal projects demonstrating expertise in data analysis, ETL development, and business intelligence solutions.",
  items,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Gallery4Item | null>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border border-blue-100 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="font-medium text-gray-700">Portfolio Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
            
            <div className="flex justify-center gap-2 mt-8">
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollPrev();
                }}
                disabled={!canScrollPrev}
                className="w-10 h-10 rounded-full border-blue-200 hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                onClick={() => {
                  carouselApi?.scrollNext();
                }}
                disabled={!canScrollNext}
                className="w-10 h-10 rounded-full border-blue-200 hover:border-blue-300 hover:bg-blue-50 disabled:opacity-50"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: false,
              skipSnaps: false,
              containScroll: "trimSnaps",
            }}
            className="w-full"
          >
            <CarouselContent className="flex">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[320px] flex-shrink-0 pl-4"
                >
                  <div 
                    className="group rounded-xl cursor-pointer"
                    onClick={() => setSelectedProject(item)}
                  >
                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                      
                      {/* Project Type Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge 
                          variant={item.type === 'Professional' ? 'default' : 'secondary'}
                          className={item.type === 'Professional' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-100 text-green-700'}
                        >
                          {item.type}
                        </Badge>
                      </div>

                      {/* External Link Icon */}
                      {item.link && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                      
                      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                        <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                          {item.title}
                        </div>
                        <div className="mb-4 line-clamp-2 md:mb-6 lg:mb-4">
                          {item.description}
                        </div>
                        
                        {/* Tech Tags Preview */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white"
                            >
                              {tag}
                            </span>
                          ))}
                          {item.tags.length > 3 && (
                            <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white">
                              +{item.tags.length - 3}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center text-sm">
                          View Details{" "}
                          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        <div className="max-w-6xl mx-auto px-6">
          <div className="mt-8 flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => carouselApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <DialogTitle className="text-2xl font-bold mb-2">
                  {selectedProject?.title}
                </DialogTitle>
                <div className="flex items-center gap-4 mb-4">
                  <Badge 
                    variant={selectedProject?.type === 'Professional' ? 'default' : 'secondary'}
                    className={selectedProject?.type === 'Professional' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-100 text-green-700'}
                  >
                    {selectedProject?.type}
                  </Badge>
                  {selectedProject?.company && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedProject.company}</span>
                    </div>
                  )}
                  {selectedProject?.link && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                  )}
                </div>
              </div>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <div className="relative w-full h-64 mb-6">
              <Image
                src={selectedProject?.image || ''}
                alt={selectedProject?.title || ''}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {selectedProject?.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-blue-600" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="hover:bg-blue-50 hover:border-blue-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { Gallery4 };
