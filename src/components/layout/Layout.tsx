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
            <section className={`flex flex-row w-full overflow-x-hidden ${withMenu ? 'mx-30' : ''}`}>
                {
                    withMenu &&
                    <div className="w-[30%]  border-r-[1px] border-secondary-dark p-3" >
                        <Menu />
                    </div>
                }
                <main className="">
                    {children}
                </main>
            </section>
            {withFooter && <Footer />}
        </div>
    );
}

