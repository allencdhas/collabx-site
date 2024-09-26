import Image from "next/image";
import { Inter } from 'next/font/google'
//import image from '../app/image.png';
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div className="mt-5">
      <div className="flex justify-center flex-row">
        <div className="mt-10 flex flex-col items-center w-[100%] lg:w-[60%] inter.classname">
            <p className="mt-10 pt-20 text-[6rem] font-semibold text-neutral-300 ">
              Collab<span className="text-purple-800">X</span>
            </p>
            <p className="my-5 sm:w-[70%] text-center text-2xl font-medium text-salte-400 dark:text-gray-50 ">
              A collaborative business platform for creators with limited resources to upscale your business.

            </p>
            {/* <p className="sm:w-[50%] my-6 text-center text-lg leading-6 text-salte-200 dark:text-gray-200">
            A collaborative business platform for creators with limited resources to upscale your business.
            </p> */}
            <div className="mb-8 my-6 flex"><a href="https://github.com/allencdjas/collab-x" target="_blank" rel="noopener noreferrer" className="inline-flex"><span className="relative inline-block overflow-hidden rounded-full p-[1px]"><span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span><div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-black px-3 py-1 text-xs font-medium leading-5 text-slate-200 backdrop-blur-xl dark:bg-black dark:text-slate-100">Github<span className="inline-flex items-center pl-2 text-white dark:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="pl-0.5 text-neutral dark:text-white"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span></div></span></a></div>

            <div className="text-black">
              <Button className="mt-2 text-white font-semibold border-5 border-purple-950 bg-purple-800 hover:bg-purple-700 hover:text-purple-white focus:ring-2 focus:ring-purple-950 focus:ring-opacity-50"
                       variant="secondary"
              >
                Launch dApp
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
