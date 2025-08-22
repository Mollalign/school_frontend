"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-100 animate-gradientBackground p-6">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-12 max-w-lg text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-6">
          Welcome to Halaba KulitoHischol
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Ready to explore your dashboard? Click the button below to get started.
        </p>
        <button
          onClick={handleClick}
          className="bg-purple-600 hover:bg-purple-500 transition-all text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
        >
          🚀 Go to Dashboard
        </button>
      </div>
      <style jsx>{`
        @keyframes gradientBackground {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientBackground {
          background-size: 200% 200%;
          animation: gradientBackground 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
