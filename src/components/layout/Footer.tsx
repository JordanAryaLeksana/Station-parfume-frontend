
export default function Footer(){
    return (
        <footer className="flex items-center justify-center w-full h-20 bg-gray-800 text-white">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Station Parfume. All rights reserved.
            </p>
        </footer>
    )
}