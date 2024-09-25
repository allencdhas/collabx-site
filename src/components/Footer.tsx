import React from "react";
import Image from "next/image";

import { Space_Grotesk } from "next/font/google";

import kintoLogo from "../app/logo-horizontal-black.svg";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer className="mt-20  text-center text-xl  text-gray-400 flex justify-center">
      {/* Main Footer Content */}

      <div className="mt-20 flex flex-row space-x-2.5 items-center">
        <div>
            <p>
                Powered By
                <span>
                    
                </span>
            </p>
            
        </div>
        <Image src={kintoLogo} height={120} width={120} alt='img' className=""/>
      </div>

    </footer>
  );
};

export default Footer;