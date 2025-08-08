import Image from "next/image";
import aboutus from "../public/aboutus.png";

export default function ContactPage() {
    return (
        <div className="contact-page bg-white flex h-screen mx-5 p-5">
            <div className="w-7/10 ms-5 h-full overflow-y-auto hide-scrollbar">
                <div className="text-md md:text-lg lg:text-xl font-semibold">23 Years of Trust, Quality, and Cleanliness</div>
                <p className="mt-5">Founded over two decades ago by a visionary entrepreneur, our company began with a simple yet powerful mission: to create high-quality cleaning and hygiene products that truly make a difference. What started as a one-man operation 23 years ago has now grown into a trusted name in households, industries, and institutions across the region.</p>
                <p className="mt-4 font-semibold">We specialize in manufacturing a wide range of essential cleaning and maintenance products, including:</p>
                <ul className="list-disc ms-8 mt-2">
                    <li>Floor Cleaner - Tough on stains, gentle on surfaces.</li>
                    <li>Bathroom Cleaner - Keeps your bathroom fresh, hygienic, and sparkling.</li>
                    <li>Distilled Battery Water - Pure and reliable for automotive and industrial battery use.</li>
                    <li>Disinfectant Powder - Effective germ protection for homes and businesses.</li>
                    <li>Handwash - Gentle on hands, tough on germs.</li>
                </ul>
                
                <p className="mt-4">Our journey has been driven by an unwavering commitment to quality, affordability, and customer satisfaction. Every product is formulated with care and tested for performance, ensuring you get nothing but the best.</p>

                <p className="mt-4">As we continue to grow, we remain proud of our humble beginnings and stay committed to the values that built our foundation: integrity, hard work, and innovation.</p>
                <p className="mt-4">Join us in our mission to create a cleaner, safer world—one product at a time.</p>
            </div>
            <div className="w-3/10 items-center justify-center flex ms-10">
                <Image
                    src={aboutus}
                    alt="About Us"
                    className="mt-5 h-md md:h-xl lg:h-2xl rounded-lg"
                />
            </div>
        </div>
    );
}