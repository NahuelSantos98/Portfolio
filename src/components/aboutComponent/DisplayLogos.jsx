// DisplayLogos.jsx
import PropTypes from "prop-types";

const DisplayLogos = ({ title, logos = [], accent = "sky" }) => {
  const ring =
    accent === "emerald"
      ? "from-emerald-400/60 to-teal-500/60"
      : accent === "amber"
      ? "from-amber-400/60 to-yellow-500/60"
      : accent === "violet"
      ? "from-violet-400/60 to-fuchsia-500/60"
      : "from-sky-400/60 to-blue-500/60";

  const items = logos.map((t) => ({ name: t.name, icon: t.icon ?? t.url ?? "" }));

  return (
    <div className="h-full flex flex-col rounded-2xl border border-white/5 bg-gray-900/60 backdrop-blur p-6 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
      {/* header */}
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-white text-lg font-medium tracking-wide">{title}</h4>
        <span className={`h-1 w-12 rounded-full bg-gradient-to-r ${ring}`} />
      </div>

      {/* GRID */}
      <div className="mt-1 grid [grid-template-columns:repeat(auto-fit,minmax(104px,1fr))] gap-4">
        {items.map((t) => (
          <figure
            key={`${title}-${t.name}`}
            className="
              group relative isolate overflow-hidden
              rounded-xl border border-white/5 bg-white/[0.02] p-4
              transition-all duration-200 hover:bg-white/[0.05] hover:border-white/10
            "
            title={t.name}
          >
            {/* glow sutil */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300 bg-[radial-gradient(160px_40px_at_50%_-10%,rgba(255,255,255,0.04),transparent)]" />

            <div className="grid place-items-center gap-2">
              <div className="relative grid place-items-center size-18 rounded-lg ring-1 ring-white/5 bg-black/20">
                <div className={`pointer-events-none absolute -inset-px rounded-lg bg-gradient-to-br ${ring} opacity-0 group-hover:opacity-20 blur-sm transition-opacity`} />
                <img
                  src={t.icon}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 object-contain transition-transform duration-200 group-hover:scale-105"
                  onError={(e) => (e.currentTarget.src = "/icons/placeholder.svg")}
                />
              </div>

              {/* label */}
              <figcaption
                className="text-[12px] text-gray-400 text-center max-w-[7rem] leading-tight"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {t.name}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-auto" />
    </div>
  );
};

DisplayLogos.propTypes = {
  title: PropTypes.string.isRequired,
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  accent: PropTypes.string,
};

export default DisplayLogos;
