import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Director",
  description:
    "Read the message from the Director of Al-Birr Charity Foundation on responsibility, faith and service in Northern Uganda.",
  openGraph: {
    title: "Our Director | Al-Birr Charity Foundation",
    description:
      "A calm, accountable message from the Director of Al-Birr Charity Foundation about serving vulnerable Muslims in Northern Uganda.",
  },
  twitter: {
    title: "Our Director | Al-Birr Charity Foundation",
    description:
      "A faith-rooted message from the Director of Al-Birr Charity Foundation on amanah and accountability.",
  },
};

export default function OurDirectorPage() {
  return (
    <div className="bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 pb-16 pt-6 lg:px-6 lg:pb-20">
        <header className="flex min-h-[40vh] flex-col items-center justify-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Al-Birr Charity Foundation
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Our Director
          </h1>
          <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-base">
            A message of responsibility, faith, and service.
          </p>
        </header>

        <section className="mt-10 grid gap-10 border-y border-slate-800 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div className="flex items-start justify-center">
            <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-3xl bg-slate-900 shadow-[0_0_40px_rgba(15,118,110,0.55)] sm:w-72">
              <Image
                src="/Director.webp"
                alt="Portrait of the Director of Al-Birr Charity Foundation."
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="space-y-3 text-left">
            <p className="text-sm font-semibold text-emerald-200">
              Founding Director
            </p>
            <p className="font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
              Serving quietly among the families we support.
            </p>
            <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
              I did not begin this foundation from abundance, but from
              witnessing hardship up close in Northern Uganda—families living
              with disability, conflict, and poverty, and yet holding on to
              their faith with remarkable patience.
            </p>
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-200 sm:text-base">
          <p>
            Al-Birr was born from visits to homes that were difficult to reach,
            conversations that were difficult to hear, and prayers that were
            made with very little in the room. In those moments, it became
            clear that supporting these families is not a choice of
            convenience, but a responsibility and amanah.
          </p>
          <p>
            Many of the Muslims we serve live at the intersection of
            generational poverty, post-conflict trauma, and physical or
            intellectual disability. Access to a nearby masjid, a wheelchair, a
            simple food basket, or basic school materials can completely change
            how a family experiences a single day, a single Ramadan, or a
            single year.
          </p>
          <p>
            Our work is guided by scholars and community leaders who understand
            both the realities on the ground and the principles of Zakat and
            Sadaqah. Every intervention is questioned, reviewed, and refined so
            that what reaches a family is beneficial, dignified, and in line
            with recognised Islamic guidance.
          </p>
          <p>
            To our donors, I regard every contribution as a trust between you,
            us, and Allah. For that reason, we avoid exaggeration, we do not
            publish stories that compromise privacy, and we work to ensure that
            reports reflect what is actually happening in the field rather than
            what sounds impressive online.
          </p>
          <p>
            I ask you to see this foundation not as a brand, but as a bridge:
            between your intention to give, and the families who quietly carry
            heavy burdens. My role is to stand on that bridge with humility,
            accepting accountability in this world and the next for how these
            funds are used.
          </p>
          <p>
            May Allah accept from you and from us, protect the people we serve
            from harm, and make this work a means of relief, gratitude, and
            closeness to Him.
          </p>
        </section>

        <section className="mx-auto mt-10 max-w-3xl rounded-3xl bg-emerald-900/10 p-6 text-center ring-1 ring-emerald-800/60">
          <p className="text-sm text-emerald-100 sm:text-base">
            Every donation is treated as a trust before Allah and before the
            community we serve.
          </p>
        </section>

        <section className="mx-auto mt-10 flex max-w-3xl justify-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Support Our Work
          </Link>
        </section>
      </div>
    </div>
  );
}

