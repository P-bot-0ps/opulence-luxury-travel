// components/videos.js
export default function OpulenceVideo() {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
      <video
        className="w-full h-auto"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videoH.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

