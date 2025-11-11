import Head from "next/head"
import { pageLayout } from "~/components/Page"
import type { NextPageWithLayout } from "~/pages/_app"

interface Experience {
	company: string
	role: string
	date: string
	location?: string
	category: "Internship" | "Research" | "Startup"
	highlights: string[]
}

const experiences: Experience[] = [
	{
		company: "Abundant (YC F24)",
		role: "Software Engineering Intern",
		date: "June 2025 – Present",
		location: "San Francisco, CA",
		category: "Internship",
		highlights: [
			"Shipped a cross-platform Electron desktop app (React/TypeScript + Node.js) that automates browser data collection for Fortune 500 web agents.",
			"Automated Playwright/BrowserBase pipelines capturing 1,400+ data points into Supabase with 100% accuracy, generating datasets for 3 of the top 6 global AI labs.",
			"Built a Dockerized agent evaluation system with CI/CD for reproducible environments and automated deployments.",
			"Implemented Kubernetes backend scheduling to scale LLM agent evaluations across cloud clusters via pod resource orchestration.",
		],
	},
	{
		company: "Rayfield Systems",
		role: "Software Engineering Intern",
		date: "June 2025 – Aug 2025",
		location: "Remote",
		category: "Internship",
		highlights: [
			"Developed a Node.js/Express + React app that automated proposal generation for energy developers across 18+ business use cases.",
			"Delivered a Supabase-powered dashboard with instant search across 1,000+ lease records, cutting review time from hours to minutes.",
			"Built a Python RAG pipeline combining PDF parsing, OCR, and regex clause detection to automate lease data extraction.",
		],
	},
	{
		company: "Cognizant",
		role: "Generative AI Extern",
		date: "May 2025 – Jun 2025",
		category: "Internship",
		highlights: [
			"Generative-AI externship focused on PyTorch Lightning, PyTorch, torchvision, OpenAI Python SDK, Matplotlib, and the CUDA Toolkit.",
			"Trained a GAN on MNIST with a CNN discriminator and transposed convolution generator, producing high-quality digits in under 50 epochs.",
			"Built a text completion script to batch multiple user inputs and return structured AI-generated responses within a single CLI session.",
			"Integrated OpenAI GPT-3.5 into a Python CLI, securely managing API keys and streamlining prompt handling for seamless text generation.",
		],
	},
	{
		company: "Demian Design",
		role: "Software Engineering Intern",
		date: "Apr 2025 – Jun 2025",
		location: "Remote",
		category: "Internship",
		highlights: [
			"Finalized and optimized a Postgres schema for metadata mapping across 5+ microservices.",
			"Secured FastAPI endpoints with row-level security and role-based access control for sensitive data.",
		],
	},
	{
		company: "AIEA Lab",
		role: "AI Researcher",
		date: "Apr 2025 – Jun 2025",
		category: "Research",
		highlights: [
			"Explored logical reasoning in Prolog to benchmark agent autonomy.",
			"Implemented the Logic-LM algorithm for symbolic reasoning experiments.",
			"Built first-order backward chaining algorithms to evaluate inference strategies.",
		],
	},
	{
		company: "Reality AI Lab",
		role: "Generative AI Developer",
		date: "Jan 2025 – Jun 2025",
		category: "Research",
		highlights: [
			"Implemented AI agents that generate personalized practice exercises for learners.",
			"Built AI agents that produce engaging syllabi for teachers.",
		],
	},
	{
		company: "Neuromorphic Computing Group",
		role: "Student Researcher",
		date: "Dec 2024 – Present",
		category: "Research",
		highlights: [
			"Implemented a random forest classifier to distinguish AI- vs. human-generated text.",
			"Built a driver-attention detection algorithm for in-cabin safety monitoring.",
			"Created an LSTM-based stock prediction model for temporal financial forecasting.",
		],
	},
	{
		company: "ClassMate",
		role: "Co-Founder",
		date: "Sep 2024 – Present",
		category: "Startup",
		highlights: [
			"Co-founded an AI study assistant that generates practice sets, summaries, and personalized plans using orchestrated LLM agents.",
		],
	},
	{
		company: "CRATUSTECH",
		role: "Software Development Engineering Intern",
		date: "Jun 2020 – Aug 2020",
		location: "San Jose, CA · Hybrid",
		category: "Internship",
		highlights: [
			"Implemented object detection pipelines using Jetson Inference, TensorRT, and SSD MobileNet v2 for edge deployments.",
		],
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
			<div className="mt-0 px-4 pt-24 pb-16 sm:px-6 lg:mt-20 lg:px-8 lg:pt-0">
				<div className="mb-10 text-left sm:text-center">
					<h1 className="text-3xl font-semibold text-gray-900 dark:text-white sm:text-4xl">
						Experiences
					</h1>
					<p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
						{experiences.length} roles across internships, research, and startups.
					</p>
				</div>
				<div className="space-y-6">
					{experiences.map((exp, index) => (
						<div
							key={index}
							className="group rounded-2xl border border-gray-200 bg-white/95 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
							<div className="mb-3 flex flex-wrap items-center gap-3">
								<span
									className={`rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-[0.3em] ${
										exp.category === "Internship"
											? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200"
											: exp.category === "Research"
												? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-200"
												: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200"
									}`}>{exp.category}</span>
								<h3 className="font-medium text-lg text-gray-900 transition group-hover:text-indigo-500 dark:text-white">
									{exp.company}
								</h3>
							</div>
							<p className="text-gray-600 text-sm font-medium leading-relaxed dark:text-gray-300">
								{exp.role}
							</p>
							<p className="mt-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">
								{exp.date}
								{exp.location ? ` • ${exp.location}` : ""}
							</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
								{exp.highlights.map((point, idx) => (
									<li key={idx} className="flex items-start gap-2 text-left">
										<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

Experiences.layout = pageLayout

export default Experiences

