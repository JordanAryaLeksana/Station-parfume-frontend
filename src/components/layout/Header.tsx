import Typography from "../Typography/Typography";



export default function Header() {
    return (
        <header className="flex px-10 items-center justify-center w-full h-16 bg-secondary-darker text-white ">
            <Typography as="h1" variant="Paragraph" size="base" className="text-center font-light">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </Typography>
        </header>

    )
}