import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feautures from "./components/Feautures";
import Footer from "./components/Footer";
import Nfts from "./components/Carousal";
import Popular_auction from "./components/Popular_auction";
import ScrollingEth from "./components/Scrolling_eth";
import Stats from "./components/Stats";
import data from "../app/data/popular_auction.json"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-cover bg-[#060714] pt-0">
      <div className="">
        <Hero/>
        <Nfts/>
        <Feautures/>
        <Popular_auction data={data}/>
        <Stats/>
        <ScrollingEth/>
        <Footer/>
      </div>
    </main>
  );
}
