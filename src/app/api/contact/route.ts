import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { fullName, phone, email, areaOfLaw, description } = body;

    // Validate required fields
    if (!fullName || !phone || !email || !areaOfLaw || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Validate phone format (basic SA phone validation)
    const phoneRegex = /^(\+27|0)[0-9]{9}$/;
    const cleanPhone = phone.replace(/[\s()-]/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid South African phone number" },
        { status: 400 }
      );
    }

    // Store enquiry in database
    const enquiry = await db.contactEnquiry.create({
      data: {
        fullName: fullName.trim(),
        phone: cleanPhone,
        email: email.trim().toLowerCase(),
        areaOfLaw,
        description: description.trim(),
      },
    });

    console.log("=== New Contact Enquiry ===");
    console.log("ID:", enquiry.id);
    console.log("Timestamp:", enquiry.createdAt);
    console.log("Name:", enquiry.fullName);
    console.log("Phone:", enquiry.phone);
    console.log("Email:", enquiry.email);
    console.log("Area of Law:", enquiry.areaOfLaw);
    console.log("Description:", enquiry.description);
    console.log("=== End Enquiry ===");

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your enquiry. Our team will contact you within 24 hours.",
        enquiryId: enquiry.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
