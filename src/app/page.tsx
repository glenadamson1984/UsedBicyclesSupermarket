export default function Home() {
  const featuredBikes = [
    {
      name: "Trek Domane AL 3",
      price: "GBP 950",
      type: "Road Bike",
      condition: "Excellent",
    },
    {
      name: "Specialized Rockhopper",
      price: "GBP 700",
      type: "Mountain Bike",
      condition: "Very Good",
    },
    {
      name: "Giant Escape 2",
      price: "GBP 525",
      type: "Hybrid Bike",
      condition: "Good",
    },
  ];

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
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              href="#featured"
            >
              Browse featured bikes
            </a>
            <a
              className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold transition hover:border-slate-400 hover:text-white"
              href="#selling-points"
            >
              Why buy from us
            </a>
          </div>
        </section>

        <section id="featured">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">Featured Stock</h2>
            <span className="text-sm text-slate-400">
              New bikes added weekly
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredBikes.map((bike) => (
              <article
                key={bike.name}
                className="rounded-xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-sm text-sky-300">{bike.type}</p>
                <h3 className="mt-1 text-lg font-semibold">{bike.name}</h3>
                <p className="mt-3 text-slate-300">Condition: {bike.condition}</p>
                <p className="mt-2 text-xl font-bold">{bike.price}</p>
                <button
                  className="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
                  type="button"
                >
                  View details
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="selling-points" className="grid gap-4 sm:grid-cols-3">
          <a
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            href="#"
          >
            <h3 className="text-lg font-semibold">Workshop checked</h3>
            <p className="mt-2 text-sm text-slate-300">
              Every bike is serviced and safety checked before it goes live.
            </p>
          </a>
          <a
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            href="#"
          >
            <h3 className="text-lg font-semibold">Clear pricing</h3>
            <p className="mt-2 text-sm text-slate-300">
              Transparent prices and honest condition reports on all listings.
            </p>
          </a>
          <a
            className="rounded-xl border border-slate-800 bg-slate-900 p-5"
            href="#"
          >
            <h3 className="text-lg font-semibold">Local support</h3>
            <p className="mt-2 text-sm text-slate-300">
              Call, message, or visit us to get the right bike for your needs.
            </p>
          </a>
        </section>
      </main>
    </div>
  );
}
