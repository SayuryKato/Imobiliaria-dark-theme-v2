import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

interface HeroCarouselProps {
  images: string[];
  mapa: {
    address: string;
    city: string;
  };
}

export function HeroCarouselProperty({ images, mapa }: HeroCarouselProps) {
  return (
    <Carousel className="w-full bg-black relative h-140">
      <CarouselContent className="w-full h-140">
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
            <Dialog>
              <DialogTrigger asChild>
                <div className="flex aspect-square items-center justify-center relative w-full h-140 cursor-pointer">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </CarouselItem>
        ))}

        <div className="absolute bottom-0 right-0 text-primary bg-white p-1">
          <Link
            href={`https://www.google.com/maps?q=${encodeURIComponent(
              `${mapa.address}, ${mapa.city}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <MoveUpRight size={12} />
            <p>Ver no Google Maps</p>
          </Link>
        </div>
      </CarouselContent>

      <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4" />
      <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4" />
    </Carousel>
  );
}
