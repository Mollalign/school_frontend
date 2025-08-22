"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { 
  Home, Users, User, BookOpen, GraduationCapIcon, Calendar, FileText, Clipboard, CheckSquare, 
  Award, CheckCircle, MessageCircle, Megaphone, Settings, LogOut 
} from "lucide-react";

import { role } from "@/lib/data";

type MenuItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  visible: string[];
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      { icon: Home, label: "Home", href: "/", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Users, label: "Teachers", href: "/list/teachers", visible: ["admin", "teacher"] },
      { icon: GraduationCapIcon, label: "Students", href: "/list/students", visible: ["admin", "teacher"] },
      { icon: Users, label: "Parents", href: "/list/parents", visible: ["admin", "teacher"] },
      { icon: BookOpen, label: "Subjects", href: "/list/subjects", visible: ["admin"] },
      { icon: Award, label: "Classes", href: "/list/classes", visible: ["admin", "teacher"] },
      { icon: Clipboard, label: "Lessons", href: "/list/lessons", visible: ["admin", "teacher"] },
      { icon: FileText, label: "Exams", href: "/list/exams", visible: ["admin", "teacher", "student", "parent"] },
      { icon: CheckSquare, label: "Assignments", href: "/list/assignments", visible: ["admin", "teacher", "student", "parent"] },
      { icon: CheckCircle, label: "Results", href: "/list/results", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Clipboard, label: "Attendance", href: "/list/attendance", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Calendar, label: "Events", href: "/list/events", visible: ["admin", "teacher", "student", "parent"] },
      { icon: MessageCircle, label: "Messages", href: "/list/messages", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Megaphone, label: "Announcements", href: "/list/announcements", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: User, label: "Profile", href: "/profile", visible: ["admin", "teacher", "student", "parent"] },
      { icon: Settings, label: "Settings", href: "/settings", visible: ["admin", "teacher", "student", "parent"] },
      { icon: LogOut, label: "Logout", href: "/logout", visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="p-4 overflow-y-auto h-screen flex flex-col gap-6 scrollbar-hide items-center mx-auto">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 uppercase text-xs tracking-wider font-semibold">
            {section.title}
          </span>

          <div className="flex flex-col gap-1">
            {section.items.map((item) => {
              if (!item.visible.includes(role)) return null;

              const active = isActive(item.href);

              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={`flex items-center gap-4 py-2 px-3 rounded-lg transition-all duration-200 ${
                    active
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-500 font-medium"
                      : "text-gray-600 hover:bg-lamaSky"
                  }`}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
