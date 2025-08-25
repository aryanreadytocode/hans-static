export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(req) {
//   try {
//     // Parse incoming request body
//     const { to, message } = await req.json();

//     if (!to || !message) {
//       return NextResponse.json(
//         { error: "Phone number and message are required" },
//         { status: 400 }
//       );
//     }

//     // Initialize Twilio client
//     const client = twilio(
//       process.env.TWILIO_SID,
//       process.env.TWILIO_AUTH_TOKEN
//     );

//     // Send SMS
//     const sms = await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE, // Twilio phone number
//       to: to, // Receiver's phone number
//     });

//     return NextResponse.json(
//       { success: true, sid: sms.sid, status: sms.status },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Twilio Error:", error.message);
//     return NextResponse.json(
//       { error: "Failed to send SMS", details: error.message },
//       { status: 500 }
//     );
//   }
}
