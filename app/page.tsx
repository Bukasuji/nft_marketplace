import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feautures from "./components/Feautures";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cover bg-[#060714] pt-0">
      <div className="">
        <Hero/>
        <Feautures/>
        <Footer/>
      </div>
    </main>
  );
}
