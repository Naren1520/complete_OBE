// import Link from "next/link";

// export default function Page({ searchParams }: { searchParams?: { sem?: string } }) {
// 	const sem = searchParams?.sem || "1";

// 	const items = [
// 		{ key: "scheme", title: "Scheme", desc: "View scheme for this semester", href: `/student-portal/my-class/semester/scheme?sem=${sem}` },
// 		{ key: "syllabus", title: "Syllabus", desc: "Download or view syllabus", href: `/student-portal/my-class/semester/syllabus?sem=${sem}` },
// 		{ key: "course-registration", title: "Course Registration", desc: "Register for courses", href: `/student-portal/my-class/semester/course-registration?sem=${sem}` },
// 		{ key: "course-withdraw", title: "Course Withdraw", desc: "Withdraw from a registered course", href: `/student-portal/my-class/semester/course-withdraw?sem=${sem}` },
// 		{ key: "course-drop", title: "Course Drop", desc: "Drop a course from your schedule", href: `/student-portal/my-class/semester/course-drop?sem=${sem}` },
// 		{ key: "exam-registration", title: "Exam Registration", desc: "Register for semester exams", href: `/student-portal/my-class/semester/exam-registration?sem=${sem}` },
// 		{ key: "results", title: "Results", desc: "View course results for this semester", href: `/student-portal/view-result?sem=${sem}` },
// 	];

// 	return (
// 		<main className="p-6">
// 			<header className="mb-6">
// 				<h1 className="text-2xl font-semibold">Semester {sem} Dashboard</h1>
// 				<p className="text-sm text-muted-foreground">Quick access to semester actions and documents.</p>
// 			</header>

// 			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
// 				{items.map((it) => (
// 					<Link key={it.key} href={it.href} className="block rounded-lg border p-4 hover:shadow-lg transition-shadow">
// 						<div className="flex items-start gap-3">
// 							<div className="w-12 h-12 flex-none rounded-md bg-slate-100 flex items-center justify-center">
// 								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// 									<path d="M4 7H20" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 									<path d="M4 12H20" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 									<path d="M4 17H14" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 								</svg>
// 							</div>

// 							<div>
// 								<h3 className="text-lg font-medium">{it.title}</h3>
// 								<p className="text-sm text-muted-foreground">{it.desc}</p>
// 							</div>
// 						</div>
// 					</Link>
// 				))}
// 			</section>

// 			<section className="mt-6 text-sm text-muted-foreground">
// 				<p>
// 					These links are placeholders. I can create the corresponding subpages or implement modal flows
// 					for each action (registration, withdraw, drop, exam reg.). Tell me which ones you'd like built
// 					next.
// 				</p>
// 			</section>
// 		</main>
// 	);
// }
import Link from "next/link";

export default function Page({ searchParams }: { searchParams?: { sem?: string } }) {
	const sem = searchParams?.sem || "1";

	const items = [
		{ 
			key: "scheme", 
			title: "Scheme", 
			desc: "View scheme for this semester", 
			href: `/student-portal/my-class/semester/scheme?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
				</svg>
			),
			color: "from-blue-500 to-cyan-500"
		},
		{ 
			key: "syllabus", 
			title: "Syllabus", 
			desc: "Download or view syllabus", 
			href: `/student-portal/my-class/semester/syllabus?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
				</svg>
			),
			color: "from-purple-500 to-pink-500"
		},
		{ 
			key: "course-registration", 
			title: "Course Registration", 
			desc: "Register for courses", 
			href: `/student-portal/my-class/semester/course-registration?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
				</svg>
			),
			color: "from-green-500 to-emerald-500"
		},
		{ 
			key: "course-withdraw", 
			title: "Course Withdraw", 
			desc: "Withdraw from a registered course", 
			href: `/student-portal/my-class/semester/course-withdraw?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
				</svg>
			),
			color: "from-orange-500 to-red-500"
		},
		{ 
			key: "course-drop", 
			title: "Course Drop", 
			desc: "Drop a course from your schedule", 
			href: `/student-portal/my-class/semester/course-drop?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
				</svg>
			),
			color: "from-rose-500 to-pink-500"
		},
		{ 
			key: "exam-registration", 
			title: "Exam Registration", 
			desc: "Register for semester exams", 
			href: `/student-portal/my-class/semester/exam-registration?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
				</svg>
			),
			color: "from-indigo-500 to-purple-500"
		},
		{ 
			key: "results", 
			title: "Results", 
			desc: "View course results for this semester", 
			href: `/student-portal/view-result?sem=${sem}`,
			icon: (
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
				</svg>
			),
			color: "from-teal-500 to-cyan-500"
		},
	];

	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50 p-6">
			<div className="max-w-7xl mx-auto">
				<header className="mb-10">
					<div className="flex items-center gap-4 mb-4">
						<div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
							{sem}
						</div>
						<div>
							<h1 className="text-3xl font-bold text-gray-800">Semester {sem} Dashboard</h1>
							<p className="text-gray-600 mt-1">Quick access to semester actions and documents</p>
						</div>
					</div>
					
					<div className="flex gap-2 mt-6">
						<div className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 shadow-sm">
							<span className="font-medium text-indigo-600">7</span> Actions Available
						</div>
						<div className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 shadow-sm">
							 Academic Year 2024-25
						</div>
					</div>
				</header>

				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{items.map((it) => (
						<Link key={it.key} href={it.href} className="group relative block">
							<div className={`absolute inset-0 bg-gradient-to-br ${it.color} rounded-2xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
							
							<div className="relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden">
								<div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
									<div className={`w-full h-full rounded-full bg-gradient-to-br ${it.color} opacity-10`} />
								</div>
								
								<div className="relative">
									<div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${it.color} flex items-center justify-center text-white mb-4 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
										{it.icon}
									</div>

									<h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
										{it.title}
									</h3>
									<p className="text-sm text-gray-600 mb-4">{it.desc}</p>
									
									<div className="flex items-center text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<span>Access now</span>
										<svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
										</svg>
									</div>
								</div>
								
								<div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${it.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
							</div>
						</Link>
					))}
				</section>

				<section className="mt-10 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
					<div className="flex items-start gap-4">
						<div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
							<svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h4 className="font-semibold text-gray-800 mb-1"> Note for Enginnering Students</h4>
							<p className="text-sm text-gray-600">
								Study well Bro ! jaiii
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}