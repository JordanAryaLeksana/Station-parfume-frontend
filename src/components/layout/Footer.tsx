import Link from "next/link";
import Typography from "../Typography/Typography";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center p-5 justify-center w-full h-auto bg-secondary-darker text-white">
            <section className="w-full mb-6 px-3 flex flex-col items-center justify-center">
                <Typography variant="Header" size="2xl" className="mb-6 text-center font-bold text-neutral-0">
                    Station Parfume
                </Typography>
                <Typography variant="Paragraph" size="lg" className="mb-6 font-light text-center max-w-2xl">
                    Your one-stop shop for all things fragrance. Discover our curated selection of premium perfumes, colognes, and scented products to elevate your everyday experience.
                </Typography>
            </section>
            <section className="grid grid-cols-4 gap-3 w-full ">
                <div className="flex flex-col items-center">
                    <Typography variant="Header" size="xl" className="font-black text-center py-4 col-span-4">
                        Quick Links
                    </Typography>
                    <Link href="#" className="text-center">
                        Link 1
                    </Link>
                    <Link href="#" className="text-center">
                        Link 2
                    </Link>
                    <Link href="#" className="text-center">
                        Link 3
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Typography variant="Header" size="xl" className="font-black text-center py-4 col-span-4">
                        Quick Links
                    </Typography>

                    <Link href="#" className="text-center">
                        Link 4
                    </Link>
                    <Link href="#" className="text-center">
                        Link 5
                    </Link>
                    <Link href="#" className="text-center">

                        Link 6
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Typography variant="Header" size="xl" className="font-black text-center py-4 col-span-4">
                        Quick Links
                    </Typography>
                    <Link href="#" className="text-center">
                        Link 7
                    </Link>
                    <Link href="#" className="text-center">

                        Link 8
                    </Link>
                    <Link href="#" className="text-center">
                        Link 9
                    </Link>
                </div>
                <div className="flex flex-col items-center">
                    <Typography variant="Header" size="xl" className="font-black text-center py-4 col-span-4">
                        Quick Links
                    </Typography>
                    <Link href="#" className="text-center">
                        Link 10
                    </Link>
                    <Link href="#" className="text-center">
                        Link 11
                    </Link>
                    <Link href="#" className="text-center">
                        Link 12
                    </Link>
                </div>
            </section>
            <section className="w-[50%] mx-auto m-3 ">
                <Typography variant="Header" size="xl" className="font-black text-center py-4">
                    Merk Parfum
                </Typography>
                <div className="grid grid-cols-3 gap-4 mb-4">
                    {['Chanel', 'Dior', 'Gucci', 'Prada', 'Versace', 'Yves Saint Laurent', 'Hermes', 'Burberry', 'Givenchy', 'Chanel', 'Dior', 'Gucci', 'Prada', 'Versace', 'Yves Saint Laurent', 'Hermes', 'Burberry', 'Givenchy'].map((brand) => (
                        <Link key={brand} href="#" className="text-center">
                            {brand}
                        </Link>
                    ))}
                </div>
            </section>
            <Typography variant="Paragraph" size="sm" >
                &copy; {new Date().getFullYear()} Station Parfume. All rights reserved.
            </Typography>
        </footer>
    )
}