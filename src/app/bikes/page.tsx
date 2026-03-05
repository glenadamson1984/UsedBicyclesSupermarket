import Image from "next/image";
import Link from "next/link";
import bikesData from "../../../data/bikes.json";
import type { Bike } from "@/types/bike";

const bikes = bikesData as Bike[];

type SortOrder = "price-asc" | "price-desc";

function sortBikes(bikes: Bike[], sort: SortOrder): Bike[] {
  const sorted = [...bikes];
  sorted.sort((a, b) =>
    sort === "price-asc" ? a.price - b.price : b.price - a.price
  );
  return sorted;
}

export default function BikesPage({
  searchParams,
}: {
  searchParams: { sort?: string };
}) {
  const sort =
    searchParams?.sort === "price-desc" ? "price-desc" : "price-asc";
  const sortedBikes = sortBikes(bikes, sort);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-4xl px-6 py-10 sm:px-10">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-slate-400 transition hover:text-sky-300"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl font-bold">All bikes</h1>
        <p className="mt-2 text-slate-300">
          Every bike is workshop checked and ready to ride.
        </p>
        <div className="mt-6 flex items-center gap-2">
          <span className="text-sm text-slate-400">Sort by price:</span>
          <Link
            href="/bikes?sort=price-asc"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              sort === "price-asc"
                ? "bg-sky-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Low to high
          </Link>
          <Link
            href="/bikes?sort=price-desc"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              sort === "price-desc"
                ? "bg-sky-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            High to low
          </Link>
        </div>
        <ul className="mt-10 flex flex-col gap-6">
          {sortedBikes.map((bike) => (
            <li key={bike.id}>
              <article className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 sm:flex-row">
                <div className="relative h-40 w-full shrink-0 bg-slate-800 sm:h-36 sm:w-44">
                  <Image
                    src={`/bikes/${bike.image}`}
                    alt={bike.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-sm text-sky-300">{bike.type}</p>
                    <h2 className="mt-1 text-xl font-semibold">{bike.name}</h2>
                    <p className="mt-2 text-sm text-slate-300">
                      Condition: {bike.condition}
                    </p>
                    {bike.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-slate-400">
                        {bike.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-xl font-bold">
                      {bike.currency} {bike.price}
                    </p>
                    <Link
                      href="/#contact"
                      className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
