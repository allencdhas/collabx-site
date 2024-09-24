import Image from "next/image";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className="mx-10 flex flex-col w-[100%] lg:w-[60%] inter.classname">
            <p className="pt-20 text-[9rem] font-bold ">
              CollabX
            </p>

            <p className="sm:w-[50%] pt-15 pb-10 pl-2">
              A collaborative business platform for creators with limited resources to upscale your business.
            </p>
            
            <div className="pl-2">
              <button
                className="bg-white text-black py-2 px-10  rounded-full w-fit"
              >
                Launch dApp
              </button>
            </div>
            
          </div>
    </div>
  );
}
