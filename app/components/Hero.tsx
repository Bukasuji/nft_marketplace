import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
  return (
      <div className="w-full bg-cover bg-[url('/images/hero_background.png')]">
        <Navbar/>
        <div className="">
           {/*<Image src="/images/Squares.png" width={1851} height={608} alt="icon" />*/}
            <div className=" ">
               <p className="md:text-base text-xs text-center uppercase text-[#7780A1] md:mb-8 mb-4">Non fungible token</p>
                <div className="">
                  <div className="flex justify-center">
                    <p className="font-semibold md:text-8xl text-4xl text-white text-center ">A new NFT</p>
                    <Image src="/images/inline_image.png" className="h-auto w-auto" width={40} height={90} alt="icon" />
                  </div>
                  <div className="flex justify-center md:ml-28 ml-10 ">
                    <Image src="/images/inline_image2.png" className="h-auto w-auto" width={62} height={62} alt="icon" />
                    <p className="font-semibold md:text-8xl text-4xl text-white text-center ml-4 ">Experience</p>
                  </div>
                  <div>
                    <p className="md:text-base text-xs  text-center uppercase text-[#7780A1] md:my-8 my-4 ">Discover, collect and sell</p>
                  </div>
                </div>

                <div className="relative mx-auto w-[90%] lg:w-[643px] z-0">
                  <input
                    type="text"
                    placeholder="Items, collections and creators"
                    className="text-xs py-4 pl-4 pr-4 block w-full rounded-lg"
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <Image src="/images/Line.png" className="" width={1} height={28} alt="line" />
                    <p className="ml-4 md:mr-8 mr-2 text-xs">Category</p>
                    <Image src="/images/dropdown.png" className="md:mr-6 mr-2" width={10} height={10} alt="dropdown" />
                    <Image src="/images/search.png" width={19} height={19} alt="search" />
                  </div>
                </div>
                <div className="mx-4 md:mx-auto lg:w-[670px] w-auto h-auto md:mt-40 mt-20">
                    <Image src="/images/Logotypes.png"  width={670} height={45} alt="icon" />
                </div>
            </div>
           
        </div>
      </div>
  );
}
