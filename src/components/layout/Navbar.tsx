export default function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-16 bg-gray-800 text-white px-4">
            <div className="text-lg font-bold">
                Station Parfume
            </div>
            <div className="space-x-4">
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
            </div>
        </nav>
    );
}