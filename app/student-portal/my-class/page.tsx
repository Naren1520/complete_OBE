//this will be the dashboard ( sem1 , sem2 ,etc...)







// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { ArrowLeft, BookOpen, Mail, User } from "lucide-react"

// export default function MyClassPage() {
//   const router = useRouter()
//   const [subjects] = useState([
// import Link from "next/link";

// export default function MyClassPage() {
// 	const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"];

// 	return (
// 		<main className="p-6">
// 			<header className="mb-6">
// 				<h1 className="text-2xl font-semibold">My Class</h1>
// 				<p className="text-sm text-muted-foreground">Select a semester to view dashboard and actions.</p>
// 			</header>

// 			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
// 				{semesters.map((s, idx) => (
// 					<Link
// 						key={s}
// 						href={`/student-portal/my-class/semester?sem=${idx + 1}`}
// 						className="block rounded-lg border p-4 hover:shadow-lg transition-shadow"
// 					>
// 						<h3 className="text-lg font-medium">{s}</h3>
// 						<p className="text-sm text-muted-foreground mt-1">Open {s} dashboard</p>
// 					</Link>
// 				))}
// 			</section>
// 		</main>
// 	);
// }
// //       semester: "3",

import Link from "next/link";

export default function MyClassPage() {
	const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8"];

	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
			<div className="max-w-7xl mx-auto">
				<header className="mb-12 text-center">
					<div className="inline-block mb-4">
						<div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
							<svg className="w-8 h-8 text-white transform -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
							</svg>
						</div>
					</div>
					<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
						My Class
					</h1>
					<p className="text-gray-600 text-lg">Select a semester to view your dashboard and explore learning materials</p>
				</header>

				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{semesters.map((s, idx) => (
						<Link
							key={s}
							href={`/student-portal/my-class/semester?sem=${idx + 1}`}
							className="group relative block"
						>
							<div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
							
							<div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
								<div className="flex items-start justify-between mb-4">
									<div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md ${
										idx % 4 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
										idx % 4 === 1 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' :
										idx % 4 === 2 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
										'bg-gradient-to-br from-violet-500 to-violet-600'
									}`}>
										{idx + 1}
									</div>
									
									<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</div>
								</div>
								
								<h3 className="text-xl font-semibold text-gray-800 mb-2">{s}</h3>
								<p className="text-sm text-gray-500 mb-4">Access your courses, materials & assignments</p>
								
								<div className="flex items-center text-xs text-gray-400">
									<div className="flex -space-x-2">
										<div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 border-2 border-white" />
										<div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 border-2 border-white" />
										<div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 border-2 border-white" />
									</div>
									<span className="ml-2">Multiple courses</span>
								</div>
								
								<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
							</div>
						</Link>
					))}
				</section>

				<div className="mt-12 text-center">
					<p className="text-sm text-gray-500">
						Need help? <span className="text-indigo-600 font-medium cursor-pointer hover:underline">Contact support</span>
					</p>
				</div>
			</div>
		</main>
	);
}
