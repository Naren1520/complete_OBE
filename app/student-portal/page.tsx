// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import {
//   User,
//   CreditCard,
//   BookOpen,
//   BarChart3,
//   MessageSquare,
//   Calendar,
//   Users,
//   Receipt,
//   ClipboardList,
//   FileText,
//   Trophy,
//   FileCheck,
//   LogOut,
// } from "lucide-react"

// export default function StudentPortal() {
//   const [username, setUsername] = useState("JOHN")
//   const router = useRouter()
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username")
//     if (storedUsername) {
//       setUsername(storedUsername.toUpperCase())
//     }
//   }, [])

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn")
//     localStorage.removeItem("username")
//     localStorage.removeItem("userRole")
//     localStorage.removeItem("password")
//     router.push("/")
//   }

//   const modules = [
//     {
//       title: "Profile",
//       description: "View personal & academic details",
//       icon: User,
//       href: "/student-portal/profile",
//       color: "from-cyan-400 to-cyan-600",
//       bgColor: "bg-cyan-50",
//       textColor: "text-cyan-700",
//     },
//     {
//       title: "Fee Pay",
//       description: "Manage fee payments & receipts",
//       icon: CreditCard,
//       href: "/student-portal/fee-pay",
//       color: "from-slate-500 to-slate-700",
//       bgColor: "bg-slate-50",
//       textColor: "text-slate-700",
//     },
//     {
//       title: "My Class",
//       description: "View current semester subjects",
//       icon: BookOpen,
//       href: "/student-portal/my-class",
//       color: "from-orange-400 to-orange-600",
//       bgColor: "bg-orange-50",
//       textColor: "text-orange-700",
//     },
//     {
//       title: "IA/Attendance",
//       description: "Internal assessments & attendance",
//       icon: BarChart3,
//       href: "/student-portal/ia-attendance",
//       color: "from-blue-600 to-blue-800",
//       bgColor: "bg-blue-50",
//       textColor: "text-blue-700",
//     },
//     {
//       title: "Feedback",
//       description: "Provide feedback to faculty",
//       icon: MessageSquare,
//       href: "/student-portal/feedback",
//       color: "from-teal-500 to-teal-700",
//       bgColor: "bg-teal-50",
//       textColor: "text-teal-700",
//     },
//     {
//       title: "Activities",
//       description: "College events & activities",
//       icon: Calendar,
//       href: "/student-portal/activities",
//       color: "from-blue-500 to-blue-600",
//       bgColor: "bg-blue-50",
//       textColor: "text-blue-700",
//     },
//     {
//       title: "Mentor-Mentee",
//       description: "Mentorship programs",
//       icon: Users,
//       href: "/student-portal/mentor-mentee",
//       color: "from-teal-400 to-teal-600",
//       bgColor: "bg-teal-50",
//       textColor: "text-teal-700",
//     },
//     {
//       title: "Fee Receipt",
//       description: "Download fee receipts",
//       icon: Receipt,
//       href: "/student-portal/fee-receipt",
//       color: "from-yellow-500 to-yellow-600",
//       bgColor: "bg-yellow-50",
//       textColor: "text-yellow-700",
//     },
//     {
//       title: "Course Registration",
//       description: "Register for courses",
//       icon: ClipboardList,
//       href: "/student-portal/course-registration",
//       color: "from-green-500 to-green-700",
//       bgColor: "bg-green-50",
//       textColor: "text-green-700",
//     },
//     {
//       title: "Supplementary Course Registration",
//       description: "Register supplementary courses",
//       icon: FileText,
//       href: "/student-portal/supplementary-course",
//       color: "from-pink-500 to-pink-700",
//       bgColor: "bg-pink-50",
//       textColor: "text-pink-700",
//     },
//     {
//       title: "Exam Application",
//       description: "Apply for examinations",
//       icon: FileCheck,
//       href: "/student-portal/exam-application",
//       color: "from-red-500 to-red-700",
//       bgColor: "bg-red-50",
//       textColor: "text-red-700",
//     },
//     {
//       title: "Supplementary Exam Application",
//       description: "Apply for supplementary exams",
//       icon: FileText,
//       href: "/student-portal/supplementary-exam",
//       color: "from-slate-600 to-slate-800",
//       bgColor: "bg-slate-50",
//       textColor: "text-slate-700",
//     },
//     {
//       title: "Apply for Paper Seeing Re-evaluation",
//       description: "Request paper re-evaluation",
//       icon: Trophy,
//       href: "/student-portal/paper-revaluation",
//       color: "from-cyan-500 to-cyan-700",
//       bgColor: "bg-cyan-50",
//       textColor: "text-cyan-700",
//     },
//     // 'View Result' removed from global dashboard: results are available per-semester via My Class -> Semester
//   ]

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <div className="bg-white shadow-md sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">S</span>
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-gray-800">Digital Campus</h1>
//                 <p className="text-xs text-gray-500">Student Portal</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center space-x-2">
//                 <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
//                   <span className="text-white text-sm font-semibold">J</span>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm font-semibold text-gray-800">JOHN</p>
//                   <p className="text-xs text-gray-500">Student</p>
//                 </div>
//               </div>
//               <Button onClick={handleLogout} variant="outline" size="sm" className="ml-4 bg-transparent">
//                 <LogOut className="w-4 h-4 mr-2" />
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Welcome Section */}
//         <div className="mb-8">
//           <div className="flex items-center space-x-2 mb-2">
//             <BookOpen className="w-6 h-6 text-blue-600" />
//             <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
//           </div>
//           <p className="text-gray-600">Welcome back, John! Select any module to get started</p>
//         </div>

//         {/* Module Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {modules.map((module) => {
//             const Icon = module.icon
//             return (
//               <button
//                 key={module.title}
//                 onClick={() => router.push(module.href)}
//                 className="group h-32 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//               >
//                 <div
//                   className={`h-full bg-gradient-to-br ${module.color} rounded-lg flex flex-col items-center justify-center text-white p-4 group-hover:brightness-110 transition-all`}
//                 >
//                   <Icon className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform" />
//                   <h3 className="font-semibold text-sm text-center leading-tight">{module.title}</h3>
//                 </div>
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  User,
  CreditCard,
  BookOpen,
  BarChart3,
  MessageSquare,
  Calendar,
  Users,
  Receipt,
  ClipboardList,
  FileText,
  Trophy,
  FileCheck,
  LogOut,
  Bell,
  Search,
} from "lucide-react"

export default function StudentPortal() {
  const [username, setUsername] = useState("JOHN")
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    const storedUsername = localStorage.getItem("username")
    if (storedUsername) {
      setUsername(storedUsername.toUpperCase())
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("username")
    localStorage.removeItem("userRole")
    localStorage.removeItem("password")
    router.push("/")
  }

  const modules = [
    {
      title: "Profile",
      description: "View personal & academic details",
      icon: User,
      href: "/student-portal/profile",
      color: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
    },
    {
      title: "Fee Pay",
      description: "Manage fee payments & receipts",
      icon: CreditCard,
      href: "/student-portal/fee-pay",
      color: "from-slate-500 to-slate-700",
      bgColor: "bg-slate-50",
      textColor: "text-slate-700",
    },
    {
      title: "My Class",
      description: "View current semester subjects",
      icon: BookOpen,
      href: "/student-portal/my-class",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
    },
    {
      title: "IA/Attendance",
      description: "Internal assessments & attendance",
      icon: BarChart3,
      href: "/student-portal/ia-attendance",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Feedback",
      description: "Provide feedback to faculty",
      icon: MessageSquare,
      href: "/student-portal/feedback",
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
    {
      title: "Activities",
      description: "College events & activities",
      icon: Calendar,
      href: "/student-portal/activities",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      title: "Mentor-Mentee",
      description: "Mentorship programs",
      icon: Users,
      href: "/student-portal/mentor-mentee",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-700",
    },
    {
      title: "Fee Receipt",
      description: "Download fee receipts",
      icon: Receipt,
      href: "/student-portal/fee-receipt",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
    },
    {
      title: "Course Registration",
      description: "Register for courses",
      icon: ClipboardList,
      href: "/student-portal/course-registration",
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      title: "Supplementary Course Registration",
      description: "Register supplementary courses",
      icon: FileText,
      href: "/student-portal/supplementary-course",
      color: "from-pink-500 to-pink-700",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
    },
    {
      title: "Exam Application",
      description: "Apply for examinations",
      icon: FileCheck,
      href: "/student-portal/exam-application",
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      title: "Supplementary Exam Application",
      description: "Apply for supplementary exams",
      icon: FileText,
      href: "/student-portal/supplementary-exam",
      color: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-50",
      textColor: "text-slate-700",
    },
    {
      title: "Apply for Paper Seeing Re-evaluation",
      description: "Request paper re-evaluation",
      icon: Trophy,
      href: "/student-portal/paper-revaluation",
      color: "from-cyan-500 to-cyan-700",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <span className="text-white font-bold text-xl transform -rotate-3">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Digital Campus
                </h1>
                <p className="text-xs text-gray-500 font-medium">Student Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200">
                <Search className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Search...</span>
              </button>
              
              <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-semibold">J</span>
                  </div>
                  <div className="hidden md:block text-right">
                    <p className="text-sm font-semibold text-gray-800">Naren S J</p>
                    <p className="text-xs text-gray-500">USN: 4SF24IS061</p>
                  </div>
                </div>
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  size="sm" 
                  className="ml-2 bg-white hover:bg-red-50 border-gray-200 hover:border-red-200 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-4 h-4 md:mr-2" />
                  <span className="hidden md:inline">Logout</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
              </div>
              <p className="text-gray-600 ml-13">Welcome back, Naren S J! Select any module to get started</p>
            </div>
            
            <div className="hidden lg:flex space-x-3">
              <div className="px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-xs text-gray-500">Current Semester</p>
                <p className="text-sm font-semibold text-gray-800">Semester 3 </p>
              </div>
              <div className="px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-xs text-gray-500">Attendance</p>
                <p className="text-sm font-semibold text-green-600">87.5%</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-gray-500">Active</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">6</p>
              <p className="text-xs text-gray-600">Courses</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-green-600" />
                </div>
                <span className="text-xs font-medium text-gray-500">Pending</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">3</p>
              <p className="text-xs text-gray-600">Assignments</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <span className="text-xs font-medium text-gray-500">Upcoming</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">2</p>
              <p className="text-xs text-gray-600">Events</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-xs font-medium text-gray-500">CGPA</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">8.7</p>
              <p className="text-xs text-gray-600">Overall</p>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">All Modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <button
                  key={module.title}
                  onClick={() => router.push(module.href)}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.color} rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  <div className="relative bg-white rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-6 -translate-y-6">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${module.color} opacity-10`} />
                    </div>
                    
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-md mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-1 text-left group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-600 text-left">{module.description}</p>
                      
                      <div className="flex items-center text-indigo-600 font-medium text-xs mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Open</span>
                        <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}