"use client"

import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const PRODUCTS = [
  {
    id: "monobox",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  },
  {
    id: "monodev",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=80",
  },
  {
    id: "studio",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1920&q=80",
  },
  {
    id: "monocreative",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
  },
]

export function ProductSlider() {
  return (
    <section className="relative z-20 pt-32 md:pt-48 pb-20 bg-transparent">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="product-slider bg-transparent"
      >
        {PRODUCTS.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="relative w-full h-[50vh] md:h-[60vh] px-16 md:px-20 flex items-center justify-center bg-transparent">
              {/* OPTIMIZATION: Replaced standard <img> with Next.js <Image> component for automatic optimization (lazy loading, resizing, format conversion). */}
              <div className="relative w-full max-w-6xl h-full rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.id}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .product-slider .swiper-button-next,
        .product-slider .swiper-button-prev {
          color: #38bdf8;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          border-radius: 0;
          box-shadow: none;
          backdrop-filter: none;
          transition: all 0.3s ease;
        }

        .product-slider .swiper-button-next::after,
        .product-slider .swiper-button-prev::after {
          font-size: 28px;
          font-weight: bold;
          transition: all 0.3s ease;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
        }

        .product-slider .swiper-button-next:hover,
        .product-slider .swiper-button-prev:hover {
          color: #7dd3fc;
        }

        .product-slider .swiper-button-next:hover::after,
        .product-slider .swiper-button-prev:hover::after {
          transform: scale(1.1);
        }

        .product-slider .swiper-button-next {
          right: 20px;
        }

        .product-slider .swiper-button-prev {
          left: 20px;
        }

        .product-slider .swiper-pagination {
          bottom: 24px !important;
        }

        .product-slider .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.8);
          background-clip: padding-box;
          transition: all 0.3s ease;
        }

        .product-slider .swiper-pagination-bullet-active {
          opacity: 1;
          background: #ffffff;
          border-color: #ffffff;
          transform: scale(1.4);
          width: 12px;
          height: 12px;
        }

        @media (max-width: 768px) {
          .product-slider .swiper-button-next,
          .product-slider .swiper-button-prev {
            width: 32px;
            height: 32px;
          }

          .product-slider .swiper-button-next::after,
          .product-slider .swiper-button-prev::after {
            font-size: 22px;
          }

          .product-slider .swiper-button-next {
            right: 12px;
          }

          .product-slider .swiper-button-prev {
            left: 12px;
          }

          .product-slider .swiper-pagination {
            bottom: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
