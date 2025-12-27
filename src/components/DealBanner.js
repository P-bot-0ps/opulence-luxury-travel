export default function DealBanner({ deal }) {
  if (!deal) return null;

  const baseStyle =
    "flex flex-col items-center justify-center p-6 shadow-xl transition-all duration-500 text-white";

  const styles = {
    heart: {
      shape: "rounded-full w-80 h-40",
      gradient: "bg-gradient-to-br from-black-50/80 to-red-500/60",
      border: "",
      font: "font-fancy",
      shadow: "shadow-lg",
    },
    block: {
      shape: "w-80 h-40 rounded-[30%]",
      gradient: "bg-gradient-to-tr from-blue-400/80 to-indigo-500/60",
      border: "border-4 border-blue-200",
      font: "font-display",
    },
    plain: {
      shape: "w-80 h-40 rounded-xl",
      gradient: "bg-gradient-to-r from-yellow-300/80 to-white/60",
      border: "border-4 border-yellow-200",
      font: "font-serif",
    },
  };

  const current = styles[deal.style] || styles.plain;

  return (
    <div
      className={`${baseStyle} ${current.shape} ${current.gradient} ${current.border} backdrop-blur-md`}
    >
      <h3
        className={`text-center ${current.font} text-10xl md:text-5xl bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent drop-shadow-lg`}
      >
        <span className="text-6xl">{deal.title.charAt(0)}</span>
        <span className="text-3xl ml-1">{deal.title.slice(1)}</span>
      </h3>
      <p className="text-lg text-white/80 font-light italic text-center mt-2">
        {deal.description}
      </p>
    </div>
  );
}
