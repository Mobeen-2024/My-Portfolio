import Link from "next/link";
import { Button } from "./ui/button";

//  loadComponents.
import Nav from "./nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Mobeen<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nov & hire me button*/}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-black">Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
