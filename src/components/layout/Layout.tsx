
type LayoutProps = {
    children: React.ReactNode;
    withFooter?: boolean;
    withHeader?: boolean;
    withNavbar?: boolean;
}

export default function Layout({
    children,
    withFooter = true,
    withHeader = true,
    withNavbar = true,
}: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {withHeader && <header className="bg-gray-800 text-white p-4">Header</header>}
            {withNavbar && <nav className="bg-gray-700 text-white p-4">Navbar</nav>}
            <main className="flex-grow p-4">{children}</main>
            {withFooter && <footer className="bg-gray-800 text-white p-4">Footer</footer>}
        </div>
    );
}