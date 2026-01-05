import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Al-Birr Charity Foundation",
    template: "%s | Al-Birr Charity Foundation",
  },
  description:
    "Al-Birr Charity Foundation channels Zakat and Sadaqah to vulnerable Muslims in Northern Uganda with transparent, faith-rooted impact.",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_BASE_URL
      ? new URL(
          process.env.NEXT_PUBLIC_SITE_URL ||
            process.env.NEXT_PUBLIC_BASE_URL ||
            "http://localhost:3000",
        )
      : undefined,
  icons: {
    icon: "/al-bir.svg",
    shortcut: "/al-bir.svg",
    apple: "/al-bir.svg",
  },
  openGraph: {
    type: "website",
    title: "Al-Birr Charity Foundation",
    description:
      "Support vulnerable Muslims in Northern Uganda through secure Zakat and Sadaqah.",
    url: "/",
    siteName: "Al-Birr Charity Foundation",
    images: [
      {
        url: "/al-bir.svg",
        width: 1024,
        height: 1024,
        alt: "Al-Birr Charity Foundation logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Birr Charity Foundation",
    description:
      "Secure, faith-aligned giving for vulnerable Muslims in Northern Uganda.",
    images: ["/al-bir.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-zinc-50 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pb-12 pt-24 md:pt-28">{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-emerald-900/60 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-emerald-900">
            <Image
              src="/al-bir.svg"
              alt="Al-Birr Charity Foundation logo"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-zinc-50">
              Al-Birr
            </span>
            <span className="text-[11px] text-emerald-200">
              Charity Foundation
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-100 md:flex">
          <Link
            href="/#home"
            className="transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            About Us
          </Link>
          <Link
            href="/#our-programs"
            className="transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Our Programs
          </Link>
          <Link
            href="/#impact"
            className="transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Impact
          </Link>
          <Link
            href="/#recent-works"
            className="transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Recent Works
          </Link>
          <Link
            href="/our-director"
            className="transition hover:text-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Our Director
          </Link>
          <Link
            href="/donate"
            className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-md shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Donate
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/donate"
            className="rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold text-emerald-950 shadow-md shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-zinc-400 lg:px-6">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-emerald-900">
                <Image
                  src="/al-bir.svg"
                  alt="Al-Birr Charity Foundation logo"
                  fill
                  className="object-contain p-1.5"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-zinc-50">
                  Al-Birr Charity Foundation
                </span>
                <span className="text-[11px] text-zinc-400">
                  Northern Uganda · Faith-rooted community support
                </span>
              </div>
            </div>
            <p className="max-w-md text-[11px] text-zinc-400">
              Impact figures, stories and images are shared with care for the
              dignity and privacy of the families we serve.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/#home"
                  className="transition hover:text-amber-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#our-programs"
                  className="transition hover:text-amber-300"
                >
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/#impact"
                  className="transition hover:text-amber-300"
                >
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/#recent-works"
                  className="transition hover:text-amber-300"
                >
                  Recent Works
                </Link>
              </li>
              <li>
                <Link
                  href="/our-director"
                  className="transition hover:text-amber-300"
                >
                  Our Director
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="transition hover:text-amber-300"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Our Contacts
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="/contact"
                  aria-label="Contact"
                  className="transition hover:text-amber-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@al-birr.org"
                  aria-label="Email"
                  className="transition hover:text-amber-300"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/albirrcharity"
                  aria-label="Facebook"
                  className="transition hover:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/albirrcharity"
                  aria-label="Twitter"
                  className="transition hover:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@albirrcharity"
                  aria-label="TikTok"
                  className="transition hover:text-amber-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-4 text-[11px] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Al-Birr Charity Foundation. All rights
            reserved.
          </p>
          <p className="flex flex-wrap items-center gap-1">
            <span>Website developed by</span>
            <span className="font-semibold text-emerald-200">
              Codeby Hussein
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
