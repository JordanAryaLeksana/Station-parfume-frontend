"use client";
import Layout from "@/components/layout/Layout";
import Typography from "@/components/Typography/Typography";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
} from "@/components/ui/carousel";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, 
  // useScroll, 
  // useTransform 
} from "framer-motion";
import { BiPackage, BiRocket, BiShield, BiStar } from "react-icons/bi";
import { useRef } from "react";
import { useHorizontalScroll } from "@/utils/useHorizontalScroll";
import type { EmblaCarouselType } from "embla-carousel";

export default function Home() {
  const emblaRef = useRef<EmblaCarouselType | null>(null);
  const heroRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start start", "end start"],
  // });



  useHorizontalScroll(emblaRef, 1.5);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    } as const,
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    } as const,
  };

  // Slide from LEFT animation
  const slideInLeft = {
    hidden: { x: -100 },
    visible: {
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    } as const,
  };

  // Slide from RIGHT animation
  const slideInRight = {
    hidden: { x: 100 },
    visible: {

      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    } as const,
  };

  return (
    <Layout withFooter withNavbar>
      <div className="mx-auto w-full h-full min-h-screen">
       

        {/* Horizontal Scroll Section - Featured Collections */}
        <section
          id="horizontal-section"
          style={{ height: `${5 * 100}vh` }}
          className="w-full my-10 relative"
        >
          <div className="sticky top-0 h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />
            <Carousel
              className="w-full"
              opts={{ dragFree: true, containScroll: "trimSnaps" }}
              setApi={(api) => {
                emblaRef.current = api || null;
              }}
            >
              <CarouselContent className="-ml-4">
                {[
                  {
                    title: "Exclusive Unisex",
                    desc: "For Everyone",
                    gradient: "from-primary via-primary-dark to-primary-darker",
                  },
                  {
                    title: "Women's Elegance",
                    desc: "Sophisticated & Timeless",
                    gradient: "from-pink-400 via-rose-400 to-red-400",
                  },
                  {
                    title: "Men's Bold",
                    desc: "Confident & Strong",
                    gradient: "from-blue-600 via-indigo-600 to-purple-600",
                  },
                  {
                    title: "New Arrivals",
                    desc: "Fresh & Trending",
                    gradient: "from-amber-400 via-orange-400 to-red-500",
                  },
                  {
                    title: "Limited Edition",
                    desc: "Rare & Precious",
                    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
                  },
                ].map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-[70vh]">
                      <Card className="h-full border-0 overflow-hidden group cursor-pointer">
                        <CardContent
                          className={`relative h-full flex items-end p-8 bg-gradient-to-br ${item.gradient}`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                          <div className="relative z-10 text-neutral-0 space-y-3">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <h2 className="text-4xl font-bold group-hover:scale-105 transition-transform">
                                {item.title}
                              </h2>
                              <p className="text-lg text-neutral-200 mt-2">
                                {item.desc}
                              </p>
                              <button className="mt-4 px-6 py-2 bg-neutral-0 text-neutral-900 rounded-full font-semibold hover:bg-primary hover:text-neutral-0 transition-all">
                                Shop Now
                              </button>
                            </motion.div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>

        {/* Category Grid with SLIDE LEFT/RIGHT Animations */}
        <motion.section
          ref={heroRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 px-4 lg:px-0 w-full lg:w-[85%] mx-auto overflow-hidden"
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <Typography
              variant="Header"
              size="3xl"
              className="font-bold text-neutral-900 mb-3"
            >
              Shop by Category
            </Typography>
            <p className="text-neutral-600 text-lg">
              Find your perfect match
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-6 auto-rows-[200px] max-w-7xl mx-auto">
            {/* Unisex Best Seller - SLIDE FROM LEFT */}
            <motion.div variants={slideInLeft} className="col-span-6 row-span-1">
              <Link href="/shop/unisex">
                <Card className="h-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-neutral-800 via-neutral-900 to-neutral-800 text-neutral-0 hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="flex flex-col items-center justify-center text-center relative z-10">
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-semibold"
                    >
                      Unisex Best Seller
                    </motion.h2>
                    <p className="mt-1 text-sm text-neutral-400">
                      Loved by everyone, made for anyone
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* New Arrivals - SLIDE FROM LEFT */}
            <motion.div
              variants={slideInLeft}
              className="col-span-6 md:col-span-3 row-span-2"
            >
              <Link href="/shop/new">
                <Card className="h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-light via-primary to-primary-dark text-neutral-0 hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
                  <CardContent className="flex flex-col items-center justify-center text-center relative z-10">
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-lg font-semibold"
                    >
                      New Arrivals
                    </motion.h2>
                    <p className="mt-1 text-sm text-neutral-100">
                      Fresh & trending now
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Women Best Seller - SLIDE FROM RIGHT */}
            <motion.div
              variants={slideInRight}
              className="col-span-6 md:col-span-3 row-span-1"
            >
              <Link href="/shop/women">
                <Card className="h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 text-neutral-900 hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="flex flex-col items-center justify-center text-center relative z-10">
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl font-bold"
                    >
                      Women Best Seller
                    </motion.h2>
                    <p className="mt-2 text-sm text-neutral-600">
                      Elegant & sophisticated
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Men Best Seller - SLIDE FROM RIGHT */}
            <motion.div
              variants={slideInRight}
              className="col-span-6 md:col-span-3 row-span-1"
            >
              <Link href="/shop/men">
                <Card className="h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 text-neutral-0 hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="flex flex-col items-center justify-center text-center relative z-10">
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-2xl font-bold"
                    >
                      Men Best Seller
                    </motion.h2>
                    <p className="mt-2 text-sm text-neutral-300">
                      Bold & confident
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Hampers - SLIDE FROM LEFT */}
            <motion.div
              variants={slideInLeft}
              className="col-span-6 md:col-span-2 row-span-1"
            >
              <Link href="/shop/hampers">
                <Card className="h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200 text-neutral-900 hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center text-center">
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-semibold"
                    >
                      Hampers
                    </motion.h2>
                    <p className="mt-1 text-sm text-neutral-600">
                      Perfect gifts
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* Room Fragrance - SLIDE FROM RIGHT */}
            <motion.div
              variants={slideInRight}
              className="col-span-6 md:col-span-4 row-span-1"
            >
              <Link href="/shop/room">
                <Card className="h-full flex items-center justify-center overflow-hidden bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100 text-neutral-900 hover:shadow-2xl transition-all duration-500 border-0 cursor-pointer group">
                  <CardContent className="flex flex-col items-center justify-center text-center">
                    <motion.h2
                      whileHover={{ scale: 1.05 }}
                      className="text-xl font-semibold"
                    >
                      Room Fragrance
                    </motion.h2>
                    <p className="mt-1 text-sm text-neutral-600">
                      Transform your space
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Why Shop With Us - Enhanced */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 px-4 lg:px-0 w-full lg:w-[85%] mx-auto bg-gradient-to-b from-transparent via-neutral-50 to-transparent"
        >
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <Typography
              variant="Header"
              size="3xl"
              className="font-bold text-neutral-900"
            >
              Why Shop With Us?
            </Typography>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: <BiRocket size={48} />,
                title: "Gratis Ongkir",
                desc: "Untuk pesanan tertentu",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: <BiPackage size={48} />,
                title: "Pengiriman Cepat",
                desc: "1–2 hari kerja",
                color: "from-green-500 to-green-600",
              },
              {
                icon: <BiShield size={48} />,
                title: "100% Original",
                desc: "Dijamin asli",
                color: "from-amber-500 to-amber-600",
              },
              {
                icon: <BiStar size={48} />,
                title: "Bonus Packaging",
                desc: "Eksklusif & aman",
                color: "from-primary to-primary-dark",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={i % 2 === 0 ? slideInLeft : slideInRight}>
                <Card className="h-full flex items-center justify-center border-0 hover:shadow-2xl transition-all duration-500 p-8 group cursor-pointer bg-neutral-0 overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  <CardContent className="flex flex-col items-center text-center space-y-4 p-0 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`text-transparent bg-gradient-to-br ${item.color} bg-clip-text`}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Beloved Brands - Enhanced */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="py-20 w-full bg-gradient-to-b from-neutral-50 to-neutral-0"
        >
          <Typography
            variant="Header"
            size="3xl"
            className="mb-12 text-center font-bold text-neutral-900"
          >
            Our Beloved Brands
          </Typography>
          <Marquee pauseOnHover gradient={false} speed={50}>
            {Array.from({ length: 10 }).map((_, i) => (
              <Card
                key={i}
                className="mx-4 min-w-[200px] h-28 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 hover:from-primary-light hover:to-primary-light-hover text-neutral-900 rounded-2xl border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              >
                <CardContent className="flex items-center justify-center p-4">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-base font-semibold group-hover:text-primary transition-colors"
                  >
                    Brand {i + 1}
                  </motion.span>
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </motion.section>
      </div>
    </Layout>
  );
}