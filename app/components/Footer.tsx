import Image from "next/image";

export default function Footer() {
  return (
      <div className="flex flex-col lg:flex-row lg:justify-around xl:mx-auto mx-6 xl:max-w-6xl lg:h-80 border border-slate-900 rounded-2xl my-8">
        <div className="p-8 lg:w-1/3 h-full">
           <Image src="/images/white_logo.png" className="" width={213} height={34} alt="icon" />

           <div className="flex flex-col lg:flex-row lg:space-x-8 text-sm lg:mt-48">
                <p className="text-[#7780A1] text-center ">Support</p>
                <p className="text-[#7780A1] text-center ">Term of service</p>
                <p className="text-[#7780A1] text-center ">Licence</p>
           </div>
        </div>

        <div className="lg:w-1/3 p-8 flex flex-col border border-slate-900 border-l border-r">
           <div className="text-white text-base mb-8">
                <p className="text-center lg:text-start mb-2 lg:mb-0">Auctions</p>
                <p className="text-center lg:text-start mb-2 lg:mb-0">Roadmap</p>
                <p className="text-center lg:text-start mb-2 lg:mb-0">Discover</p>
                <p className="text-center lg:text-start mb-2 lg:mb-0">Community</p>
           </div>
           <div className="mb-10 mx-auto lg:mx-0">
                <button className='bg-gradient-to-br from-indigo-900 to-indigo-700 text-base font-semibold py-4 px-6 border-[#262840] rounded-xl text-white shadow-[inset_4px_4px_4px_#FFFFFF1A]'>
                        My account
                </button>
           </div>

           <div className="flex mx-auto lg:mx-0 space-x-6 w-auto">
             <Image src="/images/facebook.png" className="" width={20} height={20} alt="icon" />
             <Image src="/images/linkdin.png" className="" width={20} height={20} alt="icon" />
             <Image src="/images/github.png" className="" width={20} height={20} alt="icon" />
             <Image src="/images/instagram.png" className="" width={20} height={20} alt="icon" />
           </div>
        </div>

        <div className="lg:w-1/3 p-8 flex flex-col">
           <div className="text-[#7780A1]  text-center flex-grow">
              <p>Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.</p>
           </div>

           <div className="relative w-full lg:mt-auto mt-4">
                <input
                type="text"
                placeholder="Newsletter"
                className="text-xs py-4 pl-4 pr-4 block w-full rounded-lg"
                />
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <p className="ml-4 md:mr-8 mr-2 text-xs">Sign in</p>
                </div>
           </div>
        </div>
      </div>
  );
}