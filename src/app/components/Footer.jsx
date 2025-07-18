// import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import Image from "next/image";
import fb from "../public/fb.png";
import x from "../public/twitter.png";
import insta from "../public/instagram.png";

export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Social Icons */}
        <div className="flex items-center gap-10 ml-20">
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
        <div className="flex items-center gap-6 text-sm">
          <a
            href="/terms"
            className="hover:underline hover:text-sky-300 transition-colors"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="/privacy"
            className="hover:underline hover:text-sky-300 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-sky-100">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
