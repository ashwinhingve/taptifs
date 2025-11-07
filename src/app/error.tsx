"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}
