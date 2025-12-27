import { useEffect, useState } from "react";

function getRemaining(target) {
  const now = Date.now();
  const diff = target - now;
  const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  const h = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
  const m = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
  const s = Math.max(0, Math.floor((diff / 1000) % 60));
  return { d, h, m, s };
}

export default function Countdown() {
  const target = new Date();
  target.setDate(target.getDate() + 15);
  const [time, setTime] = useState(getRemaining(target.getTime()));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target.getTime())), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-gray-900 text-white">
      <div className="container-x py-10 grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-2xl font-bold">Enhance your music experience</h3>
          <p className="mt-2 text-gray-300">Limited-time offer—grab premium audio gear before the timer runs out.</p>
          <a href="/shop" className="mt-6 btn-primary bg-white text-gray-900 hover:bg-gray-200">Check it Out!</a>
        </div>
        <div className="flex items-center gap-4">
          {[
            { label: "Days", value: time.d },
            { label: "Hours", value: time.h },
            { label: "Minutes", value: time.m },
            { label: "Seconds", value: time.s },
          ].map((t) => (
            <div key={t.label} className="text-center">
              <div className="rounded bg-gray-800 px-4 py-3 text-2xl font-bold">{String(t.value).padStart(2, "0")}</div>
              <div className="mt-1 text-xs uppercase tracking-wide text-gray-400">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
