import Link from "next/link";
import Typography from "@/components/Typography/Typography";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,

	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/router";
import { BiCart, BiChevronDown, BiLogIn, BiSearch, BiUser, BiUserPlus } from "react-icons/bi"
import { usePathname } from "next/navigation";
const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
	{ name: "Shop", href: "/shop" },
];
 const authLinks = [
    { name: "Login", path: "/login", icon: <BiLogIn /> },
    { name: "Register", path: "/register", icon: <BiUserPlus /> },
  ];
export default function Navbar() {
	const router = useRouter();
	// const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	// const [isMobileDropdownOpen, setIsMobileDropdownOpen] = React.useState(false);
	const handleNavigation = (path: string) => {
		router.push(path);
		// setIsMobileMenuOpen(false);
		// setIsMobileDropdownOpen(false);
	};
	const session = null
	const status: "unauthenticated" | "authenticated" | "loading" = "loading";
	const pathname = usePathname();
	const isActive = (path: string) => pathname === path;
	// const toggleMobileMenu = () => {
	// 	setIsMobileMenuOpen(!isMobileMenuOpen);
	// 	setIsMobileDropdownOpen(false);
	// };
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
			<section className="flex flex-row gap-10 justify-center items-center ">
				<div className="flex flex-row mr-1 items-center bg-secondary-dark/40 rounded-md px-4 py-2 gap-2">
					<Input
						placeholder="what are you looking for?"
						className="p-3 border-none bg-transparent focus:outline-none focus:ring-0 focus:border-0 shadow-none"
					/>
					<BiSearch className="text-secondary-dark" size={24} />

				</div>
				{/* Desktop Auth Buttons */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" className="md:flex hidden items-center gap-2 border-none text-secondary-darker hover:bg-secondary-dark/10">
							<BiUser className="h-4 w-4" />
							Account
							<BiChevronDown className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-48">
						{status === "loading" ? (
							<DropdownMenuItem disabled>Loading...</DropdownMenuItem>
						) : session ? (
							<>
								<DropdownMenuItem disabled className="font-semibold text-yellow-600">
									{/* 👋 {session.user?.name || session.user?.email} */}
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								{/* <DropdownMenuItem onClick={() => signOut({ callbackUrl: "/" })}>
									<BiLogIn className="h-4 w-4 mr-2 rotate-180" />
									Logout
								</DropdownMenuItem> */}
							</>
						) : (
							authLinks.map((authLink, index) => (
								<div key={authLink.path}>
									<DropdownMenuItem
										onClick={() => handleNavigation(authLink.path)}
										className={`cursor-pointer flex items-center gap-2 ${isActive(authLink.path) ? "bg-secondary-dark/10 text-yellow-800" : ""}`}
									>
										{authLink.name}
									</DropdownMenuItem>
									{index < authLinks.length - 1 && <DropdownMenuSeparator />}
								</div>
							))
						)}
					</DropdownMenuContent>
				</DropdownMenu>
				<BiCart className="text-secondary-dark cursor-pointer" onClick={() => router.push("/cart")} color="black" size={30} />

			</section>
		</nav>
	);
}