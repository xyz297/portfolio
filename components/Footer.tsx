'use client';

export default function Footer() {
  return (
    <footer className="bg-white border-t py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex justify-between text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Amit Tripathi</span>
        <div className="space-x-4">
          <a href="mailto:amit5000tripathi@gmail.com" className="hover:underline">Email</a>
          <a href="https://linkedin.com/in/amit5000tripathi" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
