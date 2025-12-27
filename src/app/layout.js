import "./globals.css";
import Footer from "../components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const metadata = {
  title: "Travel with Opulence",
  description: "Luxury travel, study abroad, and global opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mobile responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        />

        {/* Travelpayouts verification script */}
        <script
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var script = document.createElement("script");
                script.async = 1;
                script.src = 'https://tpembars.com/NDc3NzE4.js?t=477718';
                document.head.appendChild(script);
              })();
            `,
          }}
        />
      </head>

      <body
        className="font-inter bg-white text-gray-800"
        suppressHydrationWarning
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
