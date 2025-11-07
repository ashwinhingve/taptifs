import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-6xl font-bold mb-4">404</h2>
      <h3 className="text-2xl font-semibold mb-2">Page Not Found</h3>
      <p className="text-gray-600 mb-6">Could not find the requested resource</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
