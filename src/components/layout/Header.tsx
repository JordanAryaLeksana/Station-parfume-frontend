

export default function Header(){
    return (
        <header className="flex items-center justify-between w-full h-20 bg-gray-800 text-white px-4">
            <div className="text-lg font-bold">
                Station Parfume
            </div>
            <nav className="space-x-4">
                <a href="/about" className="hover:text-gray-400">About</a>
                <a href="/contact" className="hover:text-gray-400">Contact</a>
            </nav>
        </header>
    )
}