// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import fb from "../public/fb.png";
import x from "../public/twitter.png";
import insta from "../public/instagram.png";

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white flex flex-col items-center justify-center px-5 sm:px-5 md:px-8 lg:px-10 py-3 sm:py-3 md:py-5 lg:py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-1 sm:gap-0 md:gap-4 lg:gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-10">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-300 transition-colors"
          >
            <Image src={x} alt="X" width={15} height={15} />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-sky-300 transition-colors"
          >
            <Image src={fb} alt="facebook" width={15} height={15} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-sky-300 transition-colors"
          >
            <Image src={insta} alt="Instagram" width={15} height={15} />
          </a>
        </div>
        {/* Links */}
        <div className="flex items-center gap-6 text-xs">
          <a
            href="/terms"
            className="hover:underline hover:text-sky-300 transition-colors text-xs"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/privacy"
            className="hover:underline hover:text-sky-300 transition-colors text-xs"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-sky-100 text-2xs">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
