import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-4">Oops! This page does not exist.</p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-[#795F9F] text-white rounded-lg hover:bg-[#795F9F] transition"
      >
        Go Home
      </Link>
    </div>
  );
}
