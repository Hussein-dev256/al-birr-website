import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, currency, email, name, donationType, paymentMethod } = body;

    // 1. Basic Validation
    if (!amount || !currency || !email || !donationType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Strict Input Validation & Sanitization
    const allowedCurrencies = ["USD", "UGX", "GBP", "EUR"];
    if (!allowedCurrencies.includes(currency)) {
      return NextResponse.json(
        { error: "Invalid currency selected" },
        { status: 400 }
      );
    }

    const numericAmount = Number(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount" },
        { status: 400 }
      );
    }

    // Limit maximum donation amount to prevent potential overflow or fraud triggers
    if (numericAmount > 100000000) {
       return NextResponse.json(
        { error: "Amount exceeds transaction limit" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const allowedTypes = ["zakat", "sadaqah"];
    if (!allowedTypes.includes(donationType)) {
      return NextResponse.json(
        { error: "Invalid donation type" },
        { status: 400 }
      );
    }

    // 2. Generate Transaction Reference
    const tx_ref = `alb-${crypto.randomUUID()}`;

    // 3. Prepare Flutterwave Payload
    // Map internal payment methods to Flutterwave options if needed
    // "card", "bank", "mtn", "airtel"
    // Flutterwave handles most via standard checkout, but we can hint.
    // For mobile money, we usually just send the user to the standard checkout
    // unless we are doing direct charge (which requires more compliance).
    // We will use the Standard Checkout Link method as per "User Checkout (Flutterwave)" section.

    const payload = {
      tx_ref,
      amount,
      currency,
      redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/donate/verify?status=completed`,
      customer: {
        email,
        name: name || "Anonymous Donor",
      },
      customizations: {
        title: "Al-Birr Foundation Donation",
        description: `${donationType.toUpperCase()} Donation`,
        logo: `${process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/al-bir.svg`,
      },
      meta: {
        donation_type: donationType,
        payment_method_preference: paymentMethod,
      },
    };

    // 4. Call Flutterwave API
    const response = await fetch("https://api.flutterwave.com/v3/payments", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.status !== "success") {
      console.error("Flutterwave Init Error:", data);
      return NextResponse.json(
        { error: "Failed to initiate payment provider" },
        { status: 502 }
      );
    }

    // 5. Return the link to the client
    return NextResponse.json({
      link: data.data.link,
      tx_ref,
    });
  } catch (error) {
    console.error("Payment Initiation Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
