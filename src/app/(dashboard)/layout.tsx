import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* LEFT SIDEBAR */}
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 fixed h-screen bg-white shadow">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold text-purple-600">KulitoHighschool</span>
        </Link>
        <Menu />
      </aside>

      {/* RIGHT CONTENT */}
      <div className="ml-[14%] md:ml-[8%] lg:ml-[16%] xl:ml-[14%] flex-1 bg-[#F7F8FA] min-h-screen">
        {/* Navbar (sticky instead of fixed) */}
        <div className="sticky top-0 z-10 bg-[#F7F8FA] shadow">
          <Navbar />
        </div>

        {/* Scrollable main content */}
        <main className="p-4 overflow-y-auto h-[calc(100vh-64px)] scrollbar-hide">
          {children}
        </main>
      </div>
    </div>
  );
}
