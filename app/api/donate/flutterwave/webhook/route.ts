import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("verif-hash");
    const secret = process.env.FLUTTERWAVE_WEBHOOK_SECRET;

    if (!signature || !secret) {
      console.warn("Missing signature or webhook secret");
      // Return 401 to indicate unauthorized
      return NextResponse.json({ status: "error" }, { status: 401 });
    }

    // Timing-safe comparison
    const signatureBuffer = Buffer.from(signature);
    const secretBuffer = Buffer.from(secret);

    if (
      signatureBuffer.length !== secretBuffer.length ||
      !crypto.timingSafeEqual(signatureBuffer, secretBuffer)
    ) {
      console.warn("Invalid webhook signature attempt");
      return NextResponse.json({ status: "error" }, { status: 401 });
    }

    const body = await request.json();
    // const { status, txRef, amount, currency } = body; 
    
    // Flutterwave webhook structure usually:
    // body.data.status, body.data.tx_ref, body.data.amount, etc.
    // Or sometimes flat depending on version. Standard v3 is inside `data`.
    // Let's assume v3 structure: body = { event: 'charge.completed', data: { ... } }

    const eventData = body.data;

    if (body.event === "charge.completed" && eventData.status === "successful") {
        // Here we would verify against our DB if we stored the initiate request.
        // Since we are stateless for now (per instructions "We do NOT store payment records, but we MAY store..."),
        // We will just log it for now.
        
        // TODO: In a real DB, we would:
        // 1. Find transaction by tx_ref (eventData.tx_ref)
        // 2. Verify amount matches (eventData.amount)
        // 3. Verify currency matches (eventData.currency)
        // 4. Mark as paid.
        
        console.log(`✅ Donation Verified: ${eventData.currency} ${eventData.amount} [${eventData.tx_ref}]`);
        
        // Trigger Email (Placeholder)
        // await sendThankYouEmail(eventData.customer.email, ...);
    }

    return NextResponse.json({ status: "received" }, { status: 200 });

  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
