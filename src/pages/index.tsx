
import Layout from "@/components/layout/Layout";
import Typography from "@/components/Typography/Typography";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselContent
} from "@/components/ui/carousel";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <Layout withFooter withNavbar >
      <div className=" mx-auto w-[80%]  h-full min-h-screen  ">
        <Carousel className="w-full  max-w-7xl ">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex h-[400px] items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <section className="mt-10 h-full w-full bg-neutral-0 max-w-7xl ">
          <div className="grid gap-6 md:grid-cols-6 auto-rows-[200px]">
            {/* Unisex Best Seller */}
            <Card className="col-span-6 row-span-1 flex items-center justify-center bg-neutral-800 text-neutral-0 hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-semibold">Unisex Best Seller</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Loved by everyone, made for anyone.
                </p>
              </CardContent>
            </Card>
            {/* New Arrivals */}
            <Card className="col-span-3 row-span-2 flex items-center justify-center bg-neutral-900 text-neutral-0 hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <h2 className="text-lg font-semibold">New Arrivals</h2>
                <p className="mt-1 text-sm text-neutral-400">Fresh & trending now.</p>
              </CardContent>
            </Card>
            {/* Women / Men Best Seller */}
            <Card className="col-span-3 row-span-1 flex items-center justify-center bg-neutral-900 text-neutral-0 hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold">Women / Men Best Seller</h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Explore our most popular picks for him & her.
                </p>
              </CardContent>
            </Card>
            <Card className="col-span-3 row-span-1 flex items-center justify-center bg-neutral-900 text-neutral-0 hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-bold">Women / Men Best Seller</h2>
                <p className="mt-2 text-sm text-neutral-400">
                  Explore our most popular picks for him & her.
                </p>
              </CardContent>
            </Card>
            {/* Hampers / Room Fragrance */}
            <Card className=" col-span-2 row-span-1 flex items-center justify-center bg-neutral-800 text-neutral-0 hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-semibold">Hampers / Room Fragrance</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Perfect gifts & scents for your space.
                </p>
              </CardContent>
            </Card>
            {/* Hampers / Room Fragrance */}
            <Card className=" col-span-4 row-span-1 flex items-center justify-center bg-neutral-800 text-neutral-0 hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center justify-center text-center">
                <h2 className="text-xl font-semibold">Hampers / Room Fragrance</h2>
                <p className="mt-1 text-sm text-neutral-400">
                  Perfect gifts & scents for your space.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-16 w-full max-w-7xl mx-auto">
          <Typography variant="Header" size="2xl" className="mb-6 text-center  font-bold text-neutral-900">
            Why Shop With Us?
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="flex items-center justify-center border text-neutral-0 p-6">
              <CardContent className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">Gratis Ongkir</h3>
                <p className="text-sm text-neutral-400 mt-1">Untuk pesanan tertentu</p>
              </CardContent>
            </Card>
            <Card className="flex items-center justify-center border text-neutral-0 p-6">
              <CardContent className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">Pengiriman Cepat</h3>
                <p className="text-sm text-neutral-400 mt-1">1–2 hari kerja</p>
              </CardContent>
            </Card>
            <Card className="flex items-center justify-center border text-neutral-0 p-6">
              <CardContent className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">100% Original</h3>
                <p className="text-sm text-neutral-400 mt-1">Dijamin asli</p>
              </CardContent>
            </Card>
            <Card className="flex items-center justify-center border text-neutral-0 p-6">
              <CardContent className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold">Bonus Packaging</h3>
                <p className="text-sm text-neutral-400 mt-1">Eksklusif & aman</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="my-10 w-full h-full max-w-7xl">
          {/* Our Beloved Brands */}
          <Typography variant="Header" size="2xl" className="mb-6 text-center text-2xl font-bold text-neutral-900">
            Our Beloved Brands 
          </Typography>
          <Marquee
            pauseOnHover
            gradient={false}
            speed={50}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <Card
                key={i}
                className="mx-4 min-w-[180px] h-20 flex items-center justify-center bg-primary-light-hover text-neutral-0 rounded-lg"
              >
                <CardContent className="flex items-center justify-center p-2 text-sm font-semibold">
                  Brand {i + 1}
                </CardContent>
              </Card>
            ))}
          </Marquee>
        </section>
      </div>
    </Layout>
  );
}
