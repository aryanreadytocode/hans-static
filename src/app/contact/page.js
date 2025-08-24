'use client'
import twilio from "twilio/lib/rest/Twilio";
import Image from "next/image";
import contactus from "../public/contactus.png";
import { useState } from "react";

export default function ContactPage() {
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const sendSms = async () => {
    };


    return (
        <div className="contact-page p-1 bg-white shadow-md rounded-lg mx-2 my-2 flex flex-col md:flex-row h-auto md:h-screen">
            <div className="w-full md:w-1/2 mt-5 p-2 md:p-5">
                <h1 className="text-md md:text-lg lg:text-2xl font-bold mb-1">Drop us a line</h1>
                <p className="text-sm md:text-md lg:text-lg mb-2">
                    If you have any questions or need further information, please reach out to us.
                </p>
                <form
                    className="space-y-4"
                    onSubmit={e => {
                        e.preventDefault();
                        sendDataSms();
                    }}
                >
                    <div>
                        <label className="block text-sm md:text-md lg:text-lg  font-semibold mb-1" htmlFor="name">Name:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded"
                            value={name}
                            maxLength={30}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label className="block text-sm md:text-md lg:text-lg  font-semibold mb-1" htmlFor="mobile">Mobile:</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            className="w-full p-2 border rounded"
                            pattern="\d{10}"
                            maxLength={10}
                            title="Please enter a valid 10-digit mobile number"
                            value={phone}
                            onChange={e => {
                                // Only allow digits, max 10
                                const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                setPhone(val);
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm md:text-md lg:text-lg  font-semibold mb-1" htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded"
                            value={message}
                            maxLength={150}
                            onChange={(e) => setMessage(e.target.value)}
                            required></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm text-sm md:text-md lg:text-lg" onClick={() => sendSms()}>Submit</button>
                    <p>{status}</p>
                </form>
            </div>
            <div className="hidden md:flex w-1/2 items-center justify-center">
                <Image
                    src={contactus}
                    alt="Contact Us"
                    className="mt-5 h-md md:h-xl lg:h-2xl rounded-lg"
                />
            </div>
        </div>
    );
}