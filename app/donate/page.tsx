import type { Metadata } from "next";
import DonatePageClient from "./DonatePageClient";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Make a calm, secure donation to Al-Birr Charity Foundation. Choose between Zakat and Sadaqah and give with confidence.",
  openGraph: {
    title: "Make a Donation | Al-Birr Charity Foundation",
    description:
      "Support vulnerable Muslims in Northern Uganda through a secure, dignified donation experience.",
  },
  twitter: {
    title: "Make a Donation | Al-Birr Charity Foundation",
    description:
      "Safe, faith-aligned giving to support vulnerable Muslims in Northern Uganda.",
  },
};

export default function DonatePage() {
  return <DonatePageClient />;
}

