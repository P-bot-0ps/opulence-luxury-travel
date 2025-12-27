export default function ContactPage() {
  return (
    <main className="pt-[100px] bg-gradient-to-b from-[#fffaf0] to-[#fefefe] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url('/image/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9e4b7]/80 to-[#fefefe]/80 flex items-center justify-center">
          <h1 className="text-[#5c3d2e] text-4xl font-bold drop-shadow-lg">
            We’d Love to Hear From You
          </h1>
        </div>
      </section>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xwvkvyop"
        method="POST"
        className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-xl space-y-6 mt-12 border border-[#f3e5ab]"
      >
        <div>
          <label className="block text-sm font-medium text-[#5c3d2e]">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="mt-1 block w-full border border-[#e2cfa5] rounded-md p-3 focus:ring-2 focus:ring-[#f9e4b7]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5c3d2e]">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border border-[#e2cfa5] rounded-md p-3 focus:ring-2 focus:ring-[#f9e4b7]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#5c3d2e]">
            Message
          </label>
          <textarea
            name="message"
            className="mt-1 block w-full border border-[#e2cfa5] rounded-md p-3 h-32 focus:ring-2 focus:ring-[#f9e4b7]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#f9e4b7] to-[#e2cfa5] text-[#5c3d2e] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="max-w-2xl mx-auto mt-12 text-center space-y-4 text-[#5c3d2e]">
        <p className="text-lg">📞 +1 7542966725-OPULENCE</p>
        <p className="text-lg">📧 info@travelwithopulence.com</p>
        <p className="text-lg">📍 Fort Lauderdale, FL</p>
      </div>
    </main>
  );
}
