import Image from "next/image";


export default function Stats() {
  return (
      <div className=" ">
           <div className="flex flex-col lg:flex-row lg:space-x-10 justify-center mt-16">
                <div className="mb-6 lg:mb-0">
                  <Image src="/images/User.png" className="h-auto w-auto mx-auto" width={32} height={32} alt="user" /> 
                  <p className="font-semibold text-5xl text-white text-center">300K</p>
                  <p className="text-[#7780A1] text-center ">User active</p>
                </div>
                <div className="mb-6 lg:mb-0">
                  <Image src="/images/Artworks.png" className="h-auto w-auto mx-auto" width={32} height={32} alt="artworks" /> 
                  <p className="font-semibold text-5xl text-white text-center">52,5K</p>
                  <p className="text-[#7780A1] text-center ">Art works</p>
                </div>
                <div className="mb-6 lg:mb-0">
                  <Image src="/images/Artists.png" className="h-auto w-auto mx-auto" width={32} height={32} alt="artist" /> 
                  <p className="font-semibold text-5xl text-white text-center">17,5k</p>
                  <p className="text-[#7780A1] text-center ">Artist</p>
                </div>
                <div>
                  <Image src="/images/Wallet.png" className="h-auto w-auto mx-auto" width={32} height={32} alt="wallet" /> 
                  <p className="font-semibold text-5xl text-white text-center">35.58</p>
                  <p className="text-[#7780A1] text-center ">ETH Spent</p>
                </div>
            </div>
            
            <div className="bg-gradient-to-b from-navy-800 via-navy-800 to-opacity-10 rounded-2xl flex flex-col flex-col-reverse lg:flex-row xl:mx-auto md:mx-32 mx-6 xl:max-w-6xl ">
               <div className="">
                    <div>
                        <p className="text-sm lg:text-start text-center text-[#7780A1] mb-4">Overline</p>
                        <p className="xl:text-6xl text-2xl text-center lg:text-start text-white mb-8 lg:w-[300px] xl:w-[400px] lg:text-4xl">Sapien ipsum scelerisque convallis fusce</p>
                        <p className="text-sm lg:text-start text-center text-[#7780A1] mb-10 xl:w-[400px] lg:w-[300px]">Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.</p>
                    </div>
                    <div className='flex justify-center lg:justify-start'>
                        <button className='bg-gradient-to-br from-indigo-900 to-indigo-700 text-sm py-2 px-3 border border-[#262840] rounded-xl text-white shadow-[inset_4px_4px_4px_#FFFFFF1A]'>
                                Get started 
                        </button>

                        <button className='bg-transparent hover:bg-blue-500 text-[#7780A1] text-sm  hover:text-white ml-4 py-2 px-3 border border-[#262840] hover:border-transparent rounded-xl'>
                            Learn more
                        </button>
                    </div>
               </div>
               <div className="w-auto ml-auto">
                 <Image src="/images/Users2.png" className="h-auto ml-6" width={600} height={400} alt="user2" /> 
               </div>
            </div>
      </div>
  );
}
