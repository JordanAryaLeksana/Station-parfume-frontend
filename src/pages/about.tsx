import Layout from "@/components/layout/Layout"
import Typography from "@/components/Typography/Typography"


export default function About() {
    return (
        <Layout withFooter withHeader withNavbar withMenu>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-10">
                <Typography as="h1" variant="Header" size="7xl" className="mb-4">
                    About Us
                </Typography>
                <Typography as="p" variant="Paragraph" size="xl" className="text-center max-w-2xl">
                    At Station Parfume, we are passionate about bringing you the finest selection of fragrances from around the world. Our mission is to help you discover your signature scent and enhance your personal style with our curated collection of perfumes. Whether youre looking for a classic fragrance or something more contemporary, we have something for everyone. Explore our range and find the perfect scent that resonates with you.
                </Typography>
            </div>
        </Layout>
    )
}