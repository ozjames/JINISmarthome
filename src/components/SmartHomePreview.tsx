/** Decorative smart-home preview — not a live dashboard. */

const rooms = [
  { name: "Living", state: "Evening scene", active: true },
  { name: "Kitchen", state: "Task lights", active: false },
  { name: "Front door", state: "Locked · camera ok", active: true },
  { name: "Climate", state: "22° · eco schedule", active: true },
];

export function SmartHomePreview() {
  return (
    <aside
      aria-hidden="true"
      className="relative overflow-hidden rounded-3xl border border-border bg-card-elevated p-5 shadow-[var(--shadow-md)] sm:p-6"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,var(--accent-glow),transparent_70%)]" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
              Preview
            </p>
            <p className="mt-1 font-display text-xl font-medium tracking-tight text-foreground">
              Home at a glance
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted">
            <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-accent" />
            Decorative
          </span>
        </div>

        <div className="mt-5 grid gap-2.5">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/80 px-3.5 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-foreground">
                  {room.name}
                </p>
                <p className="truncate text-xs text-muted">{room.state}</p>
              </div>
              <span
                className={`h-6 w-10 rounded-full p-0.5 transition-colors ${
                  room.active ? "bg-accent" : "bg-border-strong"
                }`}
              >
                <span
                  className={`block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                    room.active ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-dashed border-border bg-surface-muted/60 px-3.5 py-3 text-xs leading-relaxed text-muted">
          Illustrative only — your real system is designed after a consult, not
          controlled from this website.
        </div>
      </div>
    </aside>
  );
}
