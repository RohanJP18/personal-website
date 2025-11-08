import Head from "next/head"
import { pageLayout } from "~/components/Page"
import type { NextPageWithLayout } from "~/pages/_app"

interface Experience {
	company: string
	role: string
	date: string
	category: "Internship" | "Research" | "Startup"
	description: string
}

const experiences: Experience[] = [
	{
		company: "Abundant (YC F24)",
		role: "Software Engineering Intern",
		date: "Jun 2025 – Present",
		category: "Internship",
		description:
			"Shipping agentic workflows and growth automations across Abundant's energy permitting platform, owning features from ideation to delivery.",
	},
	{
		company: "Rayfield Systems",
		role: "Software Engineering Intern",
		date: "Jun 2025 – Aug 2025",
		category: "Internship",
		description:
			"Prototyped automation proposals for field operations, connecting OCR, document intelligence, and LLM routing for the permitting team.",
	},
	{
		company: "Cognizant",
		role: "Generative AI Extern",
		date: "May 2025 – Jun 2025",
		category: "Internship",
		description:
			"Built benchmarking harnesses and multi-agent pipelines for GPT, Claude, and Gemini to evaluate reasoning, RAG, and autonomy use cases.",
	},
	{
		company: "Demian Design",
		role: "Software Engineering Intern",
		date: "Apr 2025 – Jun 2025",
		category: "Internship",
		description:
			"Delivered production RAG systems with NextAuth, Redis, and Docker/Kubernetes deployments to automate knowledge workflows for clients.",
	},
	{
		company: "AIEA Lab",
		role: "Student Researcher",
		date: "Apr 2025 – Present",
		category: "Research",
		description:
			"Researching multi-agent reasoning, backward chaining, and collaborative simulation environments for AI teams tackling complex objectives.",
	},
	{
		company: "Reality AI",
		role: "Generative AI Developer",
		date: "Dec 2024 – Present",
		category: "Startup",
		description:
			"Building AI-native product experiences, from prompt pipelines to customer-facing tools, that help teams ideate and iterate faster.",
	},
	{
		company: "Neuromorphic Computing Group",
		role: "Student Researcher",
		date: "Dec 2024 – Present",
		category: "Research",
		description:
			"Exploring spiking neural networks for temporal prediction and energy-efficient learning, comparing SNN latency and accuracy vs ANNs.",
	},
	{
		company: "ClassMate",
		role: "Co-Founder",
		date: "Sep 2024 – Present",
		category: "Startup",
		description:
			"Co-founded an AI study assistant that generates practice sets, summaries, and personalized plans using orchestrated LLM agents.",
	},
	{
		company: "Cratus Technology",
		role: "Software Development Engineering Intern",
		date: "May 2020 – Aug 2020",
		category: "Internship",
		description:
			"Engineered embedded tooling and automation scripts that reduced firmware validation time for IoT hardware by double-digit percentages.",
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
					<p className="mt-2 text-gray-500 text-sm dark:text-gray-400">
						{experiences.length} roles across internships, research, and startups
					</p>
				</div>
				<div className="flex flex-col gap-3">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="group rounded-lg border border-gray-200 bg-white p-5 shadow-xs transition-all hover:border-pink-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-pink-900">
							<div className="mb-2 flex items-center gap-x-3">
								<span
									className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
										exp.category === "Internship"
											? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
											: exp.category === "Research"
												? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
												: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
									}`}>
									{exp.category}
								</span>
								<h3 className="font-medium text-lg text-black transition-colors group-hover:text-pink-600 dark:text-white dark:group-hover:text-pink-400">
									{exp.company}
								</h3>
							</div>
							<p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
								{exp.role}
							</p>
							<p className="mt-1 text-gray-500 text-xs uppercase tracking-wide dark:text-gray-500">
								{exp.date}
							</p>
							<p className="mt-2 text-gray-600 text-sm leading-relaxed dark:text-gray-400">
								{exp.description}
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

