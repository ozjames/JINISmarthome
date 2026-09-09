import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{site.brand}</p>
          <p className="mt-1 text-sm text-stone-400">{site.tagline}</p>
        </div>
        <p className="text-sm text-stone-400">
          © {year} {site.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
