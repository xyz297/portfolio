export default function Header() {
  return (
    <header className="w-full shadow bg-white">
      <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Amit Tripathi</h1>
        <nav className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="/projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
          <a href="/resume" className="text-gray-700 hover:text-indigo-600">Resume</a>
        </nav>
      </div>
    </header>
  );
}
