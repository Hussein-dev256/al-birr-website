"use client";

import { useMemo, useState } from "react";

type DonationType = "zakat" | "sadaqah" | null;

type PaymentMethod = "card" | "bank" | "mtn" | "airtel" | null;

export default function DonatePageClient() {
  const [donationType, setDonationType] = useState<DonationType>(null);
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState("USD");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const submitLabel = useMemo(() => {
    if (!paymentMethod) {
      return "Proceed Securely";
    }
    if (paymentMethod === "bank") {
      return "Continue to Bank Details";
    }
    if (paymentMethod === "card") {
      return "Continue to Card Payment";
    }
    if (paymentMethod === "mtn") {
      return "Continue to MTN Mobile Money";
    }
    if (paymentMethod === "airtel") {
      return "Continue to Airtel Money";
    }
    return "Proceed Securely";
  }, [paymentMethod]);

  function handleAmountChange(value: string) {
    const cleaned = value.replace(/[^0-9.]/g, "");
    setAmount(cleaned);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatusMessage(null);

    if (!donationType || !paymentMethod || !amount || Number(amount) <= 0) {
      setStatusMessage(
        "Please select a donation type, enter an amount, and choose a payment method before continuing."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/donate/flutterwave/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          currency,
          donationType,
          paymentMethod,
          name,
          email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initiate payment");
      }

      if (data.link) {
        setStatusMessage("Redirecting to secure payment provider...");
        window.location.href = data.link;
      } else {
        throw new Error("No payment link received");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage(
        "Something went wrong initiating the payment. Please try again."
      );
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 lg:px-6 lg:pb-20">
        <header className="max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Donate
          </p>
          <h1 className="font-serif text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Make a Donation
          </h1>
          <p className="text-sm text-zinc-300 sm:text-base">
            Your support helps sustain dignity, worship, and essential care for
            vulnerable Muslims in Northern Uganda.
          </p>
        </header>

        <main className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          <section className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-emerald-100">
                  Donation Type
                </h2>
                <p className="text-xs text-zinc-300 sm:text-sm">
                  Choose whether your gift is intended as Zakat or Sadaqah. The
                  same secure account is used, but your intention is honoured.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setDonationType("zakat")}
                    className={`flex flex-col items-start rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      donationType === "zakat"
                        ? "border-emerald-400 bg-emerald-900/50 text-emerald-50"
                        : "border-slate-700 bg-slate-900/60 text-zinc-100 hover:border-emerald-400/70"
                    }`}
                    aria-pressed={donationType === "zakat"}
                  >
                    <span className="font-semibold">Zakat</span>
                    <span className="mt-1 text-xs text-zinc-300">
                      Directed towards eligible recipients in line with
                      recognised Islamic principles.
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("sadaqah")}
                    className={`flex flex-col items-start rounded-2xl border px-4 py-3 text-left text-sm transition ${
                      donationType === "sadaqah"
                        ? "border-emerald-400 bg-emerald-900/50 text-emerald-50"
                        : "border-slate-700 bg-slate-900/60 text-zinc-100 hover:border-emerald-400/70"
                    }`}
                    aria-pressed={donationType === "sadaqah"}
                  >
                    <span className="font-semibold">Sadaqah</span>
                    <span className="mt-1 text-xs text-zinc-300">
                      Flexible charitable giving that can support a wider range
                      of programs and needs.
                    </span>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-emerald-100">
                  Amount & Currency
                </h2>
                <p className="text-xs text-zinc-300 sm:text-sm">
                  Select your preferred currency and enter the amount you wish to give.
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="relative">
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="h-12 appearance-none rounded-xl border border-slate-700 bg-slate-900/70 pl-4 pr-10 text-sm font-semibold text-zinc-50 outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                      aria-label="Select currency"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="UGX">UGX (USh)</option>
                      <option value="GBP">GBP (£)</option>
                      <option value="EUR">EUR (€)</option>
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-1">
                    <span className="text-lg font-semibold text-zinc-400">
                      {currency === "USD"
                        ? "$"
                        : currency === "GBP"
                        ? "£"
                        : currency === "EUR"
                        ? "€"
                        : "USh"}
                    </span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={amount}
                      onChange={(event) =>
                        handleAmountChange(event.currentTarget.value)
                      }
                      className="h-10 flex-1 bg-transparent text-lg font-medium text-zinc-50 outline-none placeholder:text-zinc-600"
                      placeholder="0.00"
                      aria-label="Donation amount"
                    />
                  </div>
                </div>
                <p className="text-xs text-zinc-400">
                  Give what you are able. Even a modest amount can provide real
                  relief for a family.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-emerald-100">
                  Payment Method
                </h2>
                <p className="text-xs text-zinc-300 sm:text-sm">
                  Choose a secure payment method. Mobile money transactions are processed instantly.
                </p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      paymentMethod === "card"
                        ? "border-emerald-400 bg-emerald-900/50 text-emerald-50"
                        : "border-slate-700 bg-slate-900/60 text-zinc-100 hover:border-emerald-400/70"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold">
                        Card Payment
                      </span>
                      <span className="block text-[11px] text-zinc-400">
                        Credit / Debit Cards
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      paymentMethod === "bank"
                        ? "border-emerald-400 bg-emerald-900/50 text-emerald-50"
                        : "border-slate-700 bg-slate-900/60 text-zinc-100 hover:border-emerald-400/70"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-zinc-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold">
                        Bank Transfer
                      </span>
                      <span className="block text-[11px] text-zinc-400">
                        Manual Wire Transfer
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mtn")}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      paymentMethod === "mtn"
                        ? "border-yellow-400/80 bg-yellow-950/40 text-yellow-50"
                        : "border-slate-700 bg-slate-900/60 text-zinc-100 hover:border-yellow-400/50"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-yellow-950">
                      <span className="text-xs font-bold">MTN</span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold">
                        MTN Mobile Money
                      </span>
                      <span className="block text-[11px] text-zinc-400">
                        Fast & Direct
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("airtel")}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      paymentMethod === "airtel"
                        ? "border-red-500/80 bg-red-950/40 text-red-50"
                        : "border-slate-700 bg-slate-900/60 text-zinc-100 hover:border-red-500/50"
                    }`}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white">
                      <span className="text-xs font-bold">Airtel</span>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold">
                        Airtel Money
                      </span>
                      <span className="block text-[11px] text-zinc-400">
                        Fast & Direct
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-sm font-semibold text-emerald-100">
                  Optional Donor Details
                </h2>
                <p className="text-xs text-zinc-300 sm:text-sm">
                  You may share your details if you would like a personalised
                  acknowledgement or future updates. This is optional.
                </p>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label
                      htmlFor="donor-name"
                      className="text-xs font-medium text-zinc-300"
                    >
                      Name{" "}
                      <span className="text-[11px] font-normal text-zinc-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="donor-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.currentTarget.value)}
                      className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 text-sm text-zinc-50 outline-none transition focus:border-emerald-400"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="donor-email"
                      className="text-xs font-medium text-zinc-300"
                    >
                      Email{" "}
                      <span className="text-[11px] font-normal text-zinc-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="donor-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.currentTarget.value)}
                      className="h-9 w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 text-sm text-zinc-50 outline-none transition focus:border-emerald-400"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="donor-message"
                    className="text-xs font-medium text-zinc-300"
                  >
                    Message{" "}
                    <span className="text-[11px] font-normal text-zinc-500">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="donor-message"
                    rows={3}
                    value={message}
                    onChange={(event) => setMessage(event.currentTarget.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-zinc-50 outline-none transition focus:border-emerald-400"
                  />
                </div>
                <p className="text-xs text-zinc-400">
                  We do not publicly display donor information. Details you
                  share are used only for acknowledgement and accountable
                  follow-up.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-900/80 p-4">
                  <div className="mt-[2px] text-lg text-emerald-300">🔒</div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-zinc-50">
                      Security and trust
                    </p>
                    <p className="text-xs text-zinc-300">
                      Secure payment processing via trusted providers. No card
                      data is stored on our servers. Payment verification is
                      completed server-side through provider webhooks.
                    </p>
                  </div>
                </div>
                <p className="text-xs text-zinc-400">
                  You will receive an immediate confirmation on this page after
                  successful payment, followed by an email receipt once
                  automated email integration is enabled.
                </p>
              </div>

              {statusMessage && (
                <div className="rounded-2xl border border-amber-400/50 bg-amber-500/10 p-4 text-xs text-amber-100 sm:text-sm">
                  {statusMessage}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Please wait..." : submitLabel}
                </button>
                <p className="mt-2 text-center text-[11px] text-zinc-500">
                  Personal follow-up may occur where appropriate. Automated
                  confirmations are immediate once processing is complete.
                </p>
              </div>
            </form>
          </section>

          <aside className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/60 p-6">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-emerald-100">
                How your donation helps
              </h2>
              <p className="text-xs text-zinc-300 sm:text-sm">
                Your donation may support mosque construction, disability
                support, Ramadan food baskets, or scholastic and Islamic
                learning materials, depending on verified needs at the time of
                giving.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-900/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Expectation Setting
              </p>
              <p className="mt-1 text-xs text-zinc-300 sm:text-sm">
                Personal follow-up may occur when needed for receipts, reports,
                or clarification. Automated confirmations are immediate once a
                payment provider confirms your donation.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-slate-900/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Zakat and Sadaqah
              </p>
              <p className="mt-1 text-xs text-zinc-300 sm:text-sm">
                Zakat is directed towards eligible recipients and clearly
                defined welfare purposes. Sadaqah supports a broader range of
                programs, including education, community support, and mosque
                infrastructure.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

