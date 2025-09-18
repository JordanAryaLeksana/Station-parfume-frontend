import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];
export default function Navbar() {
    const router = useRouter();
	return (
		<nav className=" flex flex-row items-center justify-between h-30 bg-neutral-0 w-full border-b-[1px] px-20 border-secondary-dark">
			<Link href="/" className="flex flex-row justify-center items-center gap-4">
				{/* logo */}
				<Typography variant="Header" size="2xl" as="div" className="font-light">
					Station Parfume
				</Typography>
			</Link>
			<section className="flex flex-row items-center gap-8 ">
				{links.map((link) => (
					<Link
						key={link.name}
						href={link.href}
						className="text-lg font-medium hover:text-secondary-dark transition"
					>
						<Typography variant="Header" size="lg" as="div">
							{link.name}
						</Typography>
					</Link>
				))}
			</section>
			<section className="flex flex-row justify-center items-center ">
				<div className="flex flex-row mr-1 items-center bg-secondary-dark/40 rounded-md px-4 py-2 gap-2">
					<Input
						placeholder="what are you looking for?"
						className="p-3 border-none bg-transparent focus:outline-none focus:ring-0 focus:border-0 shadow-none"
					/>
					<Button variant="ghost" className="p-2 rounded-full">
						<Search className="text-secondary-dark" />
					</Button>
				</div>
                <Button className="cursor-pointer" onClick={() => router.push("/login")} variant="default" size="sm">
                    <Typography  variant="Header" size="lg" as="div">
                        Sign In
                    </Typography>
                </Button>
                <Button className="cursor-pointer" onClick={() => router.push("/register")} variant="default" size="sm">
                    <Typography variant="Header" size="lg" as="div">
                        Sign Up
                    </Typography>
                </Button>
                <Button className="cursor-pointer" onClick={() => router.push("/cart")} variant="default" size="sm">
                    <Typography variant="Header" size="lg" as="div">
                        Cart
                    </Typography>
                </Button>
			</section>
		</nav>
	);
}