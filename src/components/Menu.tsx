import Link from "next/link";

import { 
  Home, Users, User, BookOpen, GraduationCapIcon, Calendar, FileText, Clipboard, CheckSquare, 
  Award, CheckCircle, MessageCircle, Megaphone, Settings, LogOut 
} from "lucide-react";

const menuItems = [
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
  return (
    <div className="p-4">
      {menuItems.map(section => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>
          <div className="flex flex-col gap-2">
            {section.items.map(item => (
              <Link 
                href={item.href} 
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
              >
                <span className="w-5Z h-5"><item.icon /></span>
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Menu