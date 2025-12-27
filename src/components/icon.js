// src/components/Icon.jsx
export default function Icon({ name, className }) {
  const icons = {
    cruise: "🛳️",
    flight: "✈️",
    hotel: "🏨",
    car: "🚗",
    experience: "🎟️",
  };

  return <span className={`text-4xl ${className}`}>{icons[name] || "❓"}</span>;
}
