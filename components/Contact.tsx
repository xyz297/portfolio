// app/components/Contact.tsx

export default function Contact() {
  return (
    <section className="w-full py-20 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Let’s Connect
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          I’m open to freelance, full-time roles, or collaborations. Feel free to reach out.
        </p>
        <a
          href="mailto:amittripathi@example.com"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          amittripathi@example.com
        </a>
      </div>
    </section>
  );
}
