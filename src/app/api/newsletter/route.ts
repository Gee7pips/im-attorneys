import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: "Email address is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Store subscription in database
    const subscriber = await db.newsletterSubscriber.create({
      data: {
        email: normalizedEmail,
      },
    });

    console.log("=== New Newsletter Subscriber ===");
    console.log("ID:", subscriber.id);
    console.log("Email:", subscriber.email);
    console.log("Subscribed at:", subscriber.createdAt);
    console.log("=== End Subscriber ===");

    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed to the newsletter.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
