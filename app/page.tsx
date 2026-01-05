import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-950 text-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-20 pt-10 lg:px-6 lg:pt-16">
        <HeroSection />
        <QuranicAnchorSection />
        <AboutSection />
        <DirectorPreviewSection />
        <ProgramsSection />
        <ImpactSection />
        <ImpactImageSliderSection />
        <AllocationSection />
        <PhotoReportsSection />
        <FinalCTASection />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl bg-emerald-900 px-6 py-12 shadow-xl shadow-emerald-900/40 lg:flex lg:items-center lg:gap-12 lg:px-12 lg:py-16"
    >
      <div className="relative z-10 space-y-6 lg:w-1/2">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
          Al-Birr Charity Foundation
        </p>
        <h1 className="font-serif text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl lg:text-5xl">
          Support vulnerable Muslims in Northern Uganda with dignity and care.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-emerald-100 sm:text-lg">
          Al-Birr channels your Zakat and Sadaqah to families living with
          disability, post-conflict trauma, and deep financial hardshipwith
          transparent impact and faith-rooted accountability.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
          >
            Donate Now
          </Link>
          <Link
            href="#impact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 bg-emerald-900/40 px-7 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
          >
            View Our Impact
          </Link>
        </div>
        <p className="text-xs text-emerald-100/80">
          All donations are processed securely through trusted payment
          providers. No card details are ever stored on our servers.
        </p>
      </div>
      <div className="relative mt-12 lg:mt-0 lg:w-1/2">
        <div className="relative mx-auto w-full max-w-md rounded-[2.5rem] border border-emerald-400/40 bg-emerald-950/40 p-4 shadow-[0_0_80px_rgba(16,185,129,0.7)]">
          <div className="overflow-hidden rounded-[2rem] bg-emerald-950/60">
            <Image
              src="/bash.webp"
              alt="Portrait from Al-Birr's work in Northern Uganda."
              width={800}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 -bottom-20 h-40 w-40 rounded-full bg-emerald-700/40 blur-3xl"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-slate-950 [clip-path:polygon(0_100%,100%_100%,100%_55%,50%_100%,0_55%)]"
      />
    </section>
  );
}

function QuranicAnchorSection() {
  return (
    <section
      id="quranic-anchor"
      className="rounded-3xl bg-slate-900/70 px-6 py-12 text-center shadow-lg shadow-black/40 lg:px-12"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
        Qur&apos;anic Anchor
      </p>
      <p
        className="mt-6 text-2xl font-semibold leading-relaxed text-zinc-50 sm:text-3xl"
        lang="ar"
      >
        وَمَا تُقَدِّمُوا لِأَنفُسِكُم مِّنْ خَيْرٍ تَجِدُوهُ عِندَ اللَّهِ
      </p>
      <p className="mt-4 text-lg text-emerald-100 sm:text-xl">
        &quot;Whatever good you send ahead for yourselves, you will find it
        with Allah.&quot;
      </p>
      <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-200 sm:text-base">
        Giving through Al-Birr is an opportunity to answer the dua of families
        who rely on the compassion of strangers. Each contribution is treated
        as an amanah—a trust that must be delivered with care, transparency,
        and ihsan.
      </p>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-10 rounded-3xl bg-slate-900/60 px-6 py-10 shadow-lg shadow-black/40 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:px-12"
    >
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          About Al-Birr
        </h2>
        <p className="font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Restoring dignity for vulnerable Muslims in Northern Uganda.
        </p>
        <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
          Many Muslim families in Northern Uganda live at the intersection of
          disability, post-conflict trauma, and generational poverty. Access to
          mosques, assistive devices, schooling, and Ramadan support is often
          fragile or completely absent.
        </p>
        <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
          Al-Birr works quietly with local communities and scholars to identify
          genuine need, prioritise the most vulnerable, and deliver support in
          ways that preserve privacy, faith, and community belonging.
        </p>
      </div>
      <div className="space-y-4 rounded-2xl bg-slate-950/70 p-6">
        <div className="relative h-64 w-full overflow-hidden rounded-xl bg-slate-900/80">
          <Image
            src="/About us.webp"
            alt="Scenes from Al-Birr's work in Northern Uganda."
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 320px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const programs = [
    {
      id: "mosques",
      title: "Mosque Construction in Rural Areas",
      description:
        "Supporting simple, accessible masajid so that isolated communities can gather for prayer, learning, and companionship.",
      short: "Rural mosque construction and rehabilitation.",
    },
    {
      id: "charity-support",
      title: "Charity for Less-Privileged Muslims",
      description:
        "Targeted support for households facing food insecurity, medical needs, and sudden crises.",
      short: "Direct assistance to the most financially vulnerable.",
    },
    {
      id: "ramadan",
      title: "Ramadan Support for Fasting Households",
      description:
        "Food baskets and iftar support so families can complete the month with ease and dignity.",
      short: "Ramadan food baskets and iftar support.",
    },
    {
      id: "education",
      title: "Scholastic & Islamic Learning Materials",
      description:
        "Providing uniforms, basic school supplies, and Qur'an learning materials for children and new students of knowledge.",
      short: "Tools for both secular and Islamic education.",
    },
  ];

  return (
    <section id="our-programs" className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Our Programs
          </h2>
          <p className="mt-2 font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
            Faith-rooted initiatives with measurable impact.
          </p>
        </div>
        <p className="max-w-md text-sm text-zinc-200 sm:text-base">
          Each program is designed with local scholars and community leaders so
          that your donation follows sound Islamic guidance and meets real,
          verifiable needs.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <article
            key={program.id}
            className="group flex flex-col justify-between rounded-2xl border border-emerald-800/60 bg-slate-900/70 p-6 shadow-sm shadow-emerald-900/40 transition hover:-translate-y-1 hover:border-emerald-400/80 hover:shadow-lg"
          >
            <div className="space-y-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-900/80 text-xs font-semibold uppercase tracking-wide text-amber-300">
                {program.title
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 3)}
              </div>
              <h3 className="text-base font-semibold text-zinc-50 sm:text-lg">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
                {program.description}
              </p>
            </div>
            <p className="mt-4 text-xs font-medium text-emerald-200">
              {program.short}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ImpactSection() {
  const metrics = [
    {
      title: "Families Supported",
      value: "683",
      description:
        "Through direct charity and seasonal programs, since inception.",
      iconLabel: "FS",
    },
    {
      title: "Mosques Supported / Built",
      value: "12",
      description: "In rural communities across Northern Uganda.",
      iconLabel: "MS",
    },
    {
      title: "Ramadan Food Packages Distributed",
      value: "2345",
      description: "Supporting fasting households during Ramadan.",
      iconLabel: "RF",
    },
    {
      title: "Students Supported",
      value: "427",
      description: "With Qur'an and scholastic materials.",
      iconLabel: "SS",
    },
  ];

  return (
    <section id="impact" className="space-y-10">
      <div className="space-y-3 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Our Impact
        </h2>
        <p className="mx-auto max-w-3xl text-sm text-emerald-100 sm:text-base">
          Measured through verified program reports and community feedback.
          Figures are reviewed and updated annually.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <article
            key={metric.title}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-left"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-500/50 text-xs font-semibold text-emerald-200">
                {metric.iconLabel}
              </div>
              <h3 className="text-sm font-semibold text-zinc-50">
                {metric.title}
              </h3>
            </div>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-amber-300">
              {metric.value}
            </p>
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-emerald-200">
              Since inception
            </p>
            <p className="mt-2 text-sm text-zinc-200">{metric.description}</p>
          </article>
        ))}
      </div>
      <div className="space-y-3 rounded-3xl bg-emerald-50/5 p-6 text-center ring-1 ring-emerald-900/40">
        <p className="text-sm font-semibold text-emerald-200" lang="ar">
          وَأَنفِقُوا مِمَّا رَزَقْنَاكُم
        </p>
        <p className="text-sm text-emerald-100">
          &quot;And spend from that which We have provided for you.&quot; (Qur&apos;an 63:10)
        </p>
        <p className="text-xs text-zinc-200 sm:text-sm">
          We regard every donation as a trust (amanah). Impact figures are based
          on program records and feedback from local communities we serve. We do
          not inflate numbers or publish estimates.
        </p>
      </div>
      <div className="grid gap-4 rounded-3xl bg-slate-950/60 p-6 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold text-emerald-100">Zakat</h3>
          <p className="mt-2 text-xs text-zinc-200 sm:text-sm">
            Intended for eligible recipients and distributed according to
            recognised Islamic principles. Used for clearly defined welfare
            purposes.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-emerald-100">Sadaqah</h3>
          <p className="mt-2 text-xs text-zinc-200 sm:text-sm">
            Intended for flexible charitable use. Supports education, mosque
            construction, community support and relief programs.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="#recent-works"
          className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 bg-transparent px-6 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          See Our Recent Work
        </Link>
      </div>
    </section>
  );
}

function ImpactImageSliderSection() {
  const slides = [
    {
      src: "/image-slider1.webp",
      alt: "Qur'ans being provided to Muslim communities.",
      caption: "Providing Qur'ans to Muslim communities to strengthen iman.",
    },
    {
      src: "/image-slider2.webp",
      alt: "Preparing beef portions for distribution on Eid al-Adha.",
      caption: "Preparing to supply beef to Muslims on Eid al-Adha.",
    },
    {
      src: "/image-slider3.webp",
      alt: "Construction work taking place at a mosque in Unyama.",
      caption: "Mosque construction in Unyama.",
    },
    {
      src: "/image-slider4.webp",
      alt: "Construction works for the Al-Birr offices in Gulu.",
      caption: "Construction of Al-Birr offices, Gulu.",
    },
    {
      src: "/image-slider5.webp",
      alt: "Building works for the Al-Birr orphanage in Gulu.",
      caption: "Construction of Al-Birr orphanage, Gulu.",
    },
    {
      src: "/image-slider6.webp",
      alt: "Water source area prepared for wudu.",
      caption: "Water source made accessible for wudu.",
    },
    {
      src: "/image-slider7.webp",
      alt: "Muslim family engaged in an empowerment activity.",
      caption: "Empowering Muslim families.",
    },
    {
      src: "/image-slider8.webp",
      alt: "Mosque building serving the local community.",
      caption: "Mosque supporting a local Muslim community.",
    },
  ];

  const loopSlides = [...slides, ...slides];

  return (
    <section className="space-y-8">
      <div className="space-y-2 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          From the Field
        </h2>
        <p className="mx-auto max-w-3xl text-sm text-zinc-200 sm:text-base">
          Glimpses from recent work in Northern Uganda, shown with care for the
          dignity and privacy of each person.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
        <div className="impact-slider-track">
          {loopSlides.map((slide, index) => (
            <article
              key={`${slide.src}-${index}`}
              className="relative flex w-80 shrink-0 flex-col overflow-hidden rounded-2xl border border-emerald-900/60 bg-slate-900/70 shadow-md shadow-emerald-900/60"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <p className="text-xs text-zinc-100 sm:text-sm">
                  {slide.caption}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AllocationSection() {
  const categories = [
    {
      title: "Education",
      emphasis: "Students and learning spaces",
      description:
        "Qur'an circles, learning materials and basic school-related support.",
      level: 54,
    },
    {
      title: "Ramadan Relief",
      emphasis: "Seasonal assistance",
      description:
        "Food baskets and Ramadan support for fasting households.",
      level: 66,
    },
    {
      title: "Community Support",
      emphasis: "Infrastructure and relief",
      description:
        "Mosque construction, accessibility improvements and urgent family support.",
      level: 48,
    },
  ];

  return (
    <section id="donation-breakdown" className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Where Your Donation Goes
        </h2>
        <p className="font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Clear priorities, honest limitations.
        </p>
        <p className="max-w-3xl text-sm text-zinc-200 sm:text-base">
          These categories describe the typical intended use of donations across
          our programs. Exact allocations vary based on verified needs and the
          time of year.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <article
            key={category.title}
            className="flex flex-col rounded-2xl border border-emerald-900/60 bg-slate-900/70 p-5 shadow-sm shadow-emerald-900/40"
          >
            <div>
              <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                {category.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-emerald-200">
                {category.emphasis}
              </p>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-emerald-400"
                style={{ width: `${category.level}%` }}
                aria-hidden="true"
              />
            </div>
            <p className="mt-3 text-xs text-zinc-200 sm:text-sm">
              {category.description}
            </p>
          </article>
        ))}
      </div>
      <p className="max-w-3xl text-xs text-zinc-300">
        Bar lengths are illustrative and show relative focus areas rather than
        exact percentages or financial breakdowns.
      </p>
    </section>
  );
}

function DirectorPreviewSection() {
  return (
    <section
      id="director"
      className="grid gap-8 rounded-3xl bg-slate-900/70 px-6 py-10 shadow-lg shadow-black/40 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:px-12"
    >
      <div className="space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Our Director
        </h2>
        <p className="font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Leadership rooted in service, not visibility.
        </p>
        <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
          The founding director of Al-Birr has spent years accompanying
          families in Northern Uganda through hospital visits, school
          registrations, and mosque rebuilding effortsoften with little or no
          public recognition.
        </p>
        <p className="text-sm leading-relaxed text-zinc-200 sm:text-base">
          His message to donors is simple: every contribution is an amanah to
          be guarded, reported on, and used in ways that you would be proud to
          explain to Allah on the Day of Judgement.
        </p>
        <Link
          href="/our-director"
          className="inline-flex w-fit items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-950/40 px-6 py-2.5 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          Read the Director&apos;s Message
        </Link>
      </div>
        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border border-emerald-500/60 bg-emerald-950/60 shadow-[0_0_60px_rgba(16,185,129,0.75)]">
            <Image
              src="/Director.webp"
              alt="Portrait of the Director of Al-Birr Charity Foundation."
              fill
              className="object-cover"
            style={{ objectPosition: "center top" }}
          />
        </div>
      </div>
    </section>
  );
}

function PhotoReportsSection() {
  const photos = [
    {
      src: "/charity1.webp",
      alt: "Community members gathered during a distribution activity.",
      caption: "Community-based distribution of support to households identified through local partners.",
    },
    {
      src: "/charity2.webp",
      alt: "Volunteers preparing items for charity work.",
      caption: "Volunteers preparing and organising items before field visits.",
    },
    {
      src: "/charity3.webp",
      alt: "Supplies arranged for families in need.",
      caption: "Supplies arranged for families that have been screened for support.",
    },
    {
      src: "/charity5.webp",
      alt: "Outdoor scene from a recent charity activity.",
      caption:
        "Scenes from recent work carried out with local communities in Northern Uganda.",
    },
  ];

  return (
    <section id="recent-works" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Recent Works
        </h2>
        <p className="font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
          Photo reports from the field.
        </p>
        <p className="max-w-3xl text-sm text-zinc-200 sm:text-base">
          Images are shared with consent and with care to protect the dignity
          and privacy of each person. No names or specific locations are
          published.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {photos.map((photo) => (
          <figure
            key={photo.src}
            className="overflow-hidden rounded-2xl border border-emerald-900/70 bg-slate-900/60 shadow-md shadow-black/40"
          >
            <div className="relative h-56 w-full sm:h-64">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs text-zinc-200 sm:text-sm">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-900 px-6 py-10 text-center shadow-xl shadow-emerald-900/60 lg:px-12"
    >
      <h2 className="font-serif text-2xl font-semibold text-zinc-50 sm:text-3xl">
        Make a difference today.
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-sm text-emerald-100 sm:text-base">
        Your Zakat and Sadaqah can help families rebuild their lives with
        security, worship, and learning at the centre. Give once, or establish
        a habit of regular giving that continues to benefit you in this world
        and the next.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          href="/donate"
          className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-amber-500/40 transition hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
        >
          Donate Securely
        </Link>
        <Link
          href="#impact"
          className="inline-flex items-center justify-center rounded-full border border-emerald-300/70 bg-emerald-950/40 px-8 py-3 text-sm font-semibold text-emerald-50 transition hover:bg-emerald-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-900"
        >
          Review Our Impact
        </Link>
      </div>
    </section>
  );
}
