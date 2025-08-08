import Image from "next/image";
import contactus from "../public/contactus.png";

export default function ContactPage() {
    return (
        <div className="contact-page p-5 bg-white shadow-md rounded-lg mx-5 my-2 flex h-screen ">
            <div className="w-1/2 h-sm md:h-md lg:h-lg mt-5 p-5">
                <h1 className="text-2xl font-bold mb-4">Drop us a line</h1>
                <p className="text-md mb-2">
                    If you have any questions or need further information, please reach out to us.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-md font-semibold mb-1" htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
                    </div>
                    <div>
                        <label className="block text-md font-semibold mb-1" htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
                    </div>
                    <div>
                        <label className="block text-md font-semibold mb-1" htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded" required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
                </form>
            </div>
            <div className="w-1/2 items-center justify-center flex">
                <Image
                    src={contactus}
                    alt="Contact Us"
                    className="mt-5 h-md md:h-xl lg:h-2xl rounded-lg"
                />
            </div>
        </div>
    );
}