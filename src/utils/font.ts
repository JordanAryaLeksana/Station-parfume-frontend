import {Poppins, Montserrat} from "next/font/google"

export const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
});
