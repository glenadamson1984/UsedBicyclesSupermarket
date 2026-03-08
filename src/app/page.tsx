import Image from "next/image";
import bikesData from "../../data/bikes.json";
import type { Bike } from "@/types/bike";
import { ContactForm } from "@/components/ContactForm";

// concole log
const bikes = bikesData as Bike[];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 sm:px-10">
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky-300">
            UsedBicyclesNI
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
            Premium used bikes, checked and sold by one trusted local shop.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            No random classifieds. Every bike is inspected, cleaned, and ready
            to ride.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Based in Co. Armagh, Northern Ireland
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              href="#featured"
            >
              Browse featured bikes
            </a>
            <a
              className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-slate-400 hover:text-white"
              href="/bikes"
            >
              View all bikes
            </a>
            <a
              className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-slate-400 hover:text-white"
              href="#selling-points"
            >
              Why buy from us
            </a>
            <a
              className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-slate-400 hover:text-white"
              href="#contact"
            >
              Contact us
            </a>
          </div>
        </section>

        <section id="featured">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">Featured Stock</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">
                New bikes added weekly
              </span>
              <a
                href="/bikes"
                className="text-sm font-semibold text-sky-300 transition hover:text-sky-200"
              >
                View all bikes →
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bikes.slice(0, 3).map((bike) => (
              <article
                key={bike.id}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900"
              >
                <div className="relative aspect-[4/3] min-h-0 bg-slate-800">
                  <Image
                    src={`/bikes/${bike.image}`}
                    alt={bike.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm text-sky-300">{bike.type}</p>
                  <h3 className="mt-1 text-lg font-semibold">{bike.name}</h3>
                  <p className="mt-3 text-slate-300">
                    Condition: {bike.condition}
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    {bike.currency} {bike.price}
                  </p>
                  <button
                    className="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
                    type="button"
                  >
                    View details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="selling-points">
          <h2 className="mb-6 text-2xl font-bold">Why buy from us</h2>
          <p className="mb-8 max-w-2xl text-slate-300">
            We&apos;re not a faceless classifieds site. Every bike comes from
            one trusted local shop – inspected, serviced, and ready to ride.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              href="#contact"
            >
              <h3 className="text-lg font-semibold">Workshop checked</h3>
              <p className="mt-2 text-sm text-slate-300">
                Every bike is serviced and safety checked before it goes live.
                Bearings, brakes, drivetrain – we make sure it&apos;s right.
              </p>
            </a>
            <a
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              href="#contact"
            >
              <h3 className="text-lg font-semibold">Clear pricing</h3>
              <p className="mt-2 text-sm text-slate-300">
                Transparent prices and honest condition reports on all listings.
                No haggling surprises – what you see is what you get.
              </p>
            </a>
            <a
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              href="#contact"
            >
              <h3 className="text-lg font-semibold">Local support</h3>
              <p className="mt-2 text-sm text-slate-300">
                Based in Co. Armagh. Call, message, or visit us to get the right
                bike for your needs. We&apos;re here to help.
              </p>
            </a>
            <a
              className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              href="#contact"
            >
              <h3 className="text-lg font-semibold">Delivery available</h3>
              <p className="mt-2 text-sm text-slate-300">
                Can&apos;t collect? Delivery can be arranged at an additional
                charge. We cover NI and beyond.
              </p>
            </a>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:p-12"
        >
          <h2 className="text-2xl font-bold">Contact us</h2>
          <p className="mt-2 text-slate-300">
            Based in Co. Armagh. Get in touch about a bike or to arrange a
            viewing. Delivery can be arranged at an additional charge.
          </p>
          <div className="mt-8 max-w-md">
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
