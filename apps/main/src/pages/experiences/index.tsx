import Head from "next/head"
import { pageLayout } from "~/components/Page"
import type { NextPageWithLayout } from "~/pages/_app"

interface Experience {
	company: string
	role: string
	date: string
}

const experiences: Experience[] = [
	{
		company: "Abundant (YC F24)",
		role: "Software Engineering Intern",
		date: "June 2025 – Current",
	},
	{
		company: "Rayfield Systems",
		role: "Software Engineering Intern",
		date: "June 2025 – Aug 2025",
	},
	{
		company: "Cognizant",
		role: "Generative AI Extern",
		date: "May 2025 – June 2025",
	},
	{
		company: "Demian Design",
		role: "Software Engineering Intern",
		date: "Apr 2025 – June 2025",
	},
	{
		company: "AIEA",
		role: "Student Researcher",
		date: "Apr 2025 – Current",
	},
	{
		company: "Reality AI",
		role: "Generative AI Developer",
		date: "Dec 2024 – Current",
	},
	{
		company: "Neuromorphic Computing Group",
		role: "Student Researcher",
		date: "Dec 2024 – Current",
	},
	{
		company: "ClassMate",
		role: "Co-Founder",
		date: "Sep 2024 – Current",
	},
	{
		company: "Cratus Technology",
		role: "Software Development Engineering Intern",
		date: "May 2020 – Aug 2020",
	},
]

const Experiences: NextPageWithLayout = () => {
	return (
		<div>
			<Head>
				<title>Experiences - Sai Rohan Jayaprakash</title>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💼</text></svg>"
				/>
				<meta name="description" content="Experiences" />
			</Head>
			<div className="mt-0 pt-24 lg:mt-20 lg:pt-0">
				<div className="mb-8 text-center">
					<h1 className="font-medium text-3xl text-black tracking-wide dark:text-white">
						Experiences
					</h1>
				</div>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="rounded-lg border border-gray-200 bg-white p-5 shadow-xs transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
							<h3 className="font-medium text-lg text-black dark:text-white">
								{exp.company}
							</h3>
							<p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
								{exp.role}
							</p>
							<p className="mt-1 text-gray-500 text-xs dark:text-gray-500">
								{exp.date}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

Experiences.layout = pageLayout

export default Experiences

