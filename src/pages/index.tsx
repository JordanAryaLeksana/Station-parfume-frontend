
import Layout from "@/components/layout/Layout";
import Typography from "@/components/Typography/Typography";



export default function Home() {
  return (
    <Layout withFooter withHeader withNavbar withMenu>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-10">
        <Typography as="h1" variant="Header" size="7xl" className="mb-4">
          Welcome to Station Parfume
        </Typography>
        <Typography as="p" variant="Paragraph" size="xl" className="text-center max-w-2xl">
          Discover a world of exquisite fragrances at Station Parfume. Explore our curated collection of perfumes and find your signature scent today!
        </Typography>
      </div>
    </Layout>
  );
}
