import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import Navbar from "./Navbar";

type LayoutProps = {
    children: React.ReactNode;
    withFooter?: boolean;
    withHeader?: boolean;
    withNavbar?: boolean;
    withMenu?: boolean;
}

export default function Layout({
    children,
    withFooter = false,
    withHeader = false,
    withNavbar = false,
    withMenu = false,
}: LayoutProps) {
    return (
        <div className={` min-h-screen`}>
            {withHeader && <Header />}
            {withNavbar && <Navbar />}
            <main className=" flex flex-row-reverse ">
                <div className="flex flex-col flex-grow border-l-[1px] border-secondary-dark">
                    {children}
                </div>
                <div className="flex-grow p-3" >
                    {withMenu &&
                        <Menu />
                    }
                </div>
            </main>
            {withFooter && <Footer />}
        </div>
    );
}

