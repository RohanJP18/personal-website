import Head from "next/head"
import { pageLayout } from "~/components/Page"
import type { NextPageWithLayout } from "~/pages/_app"

interface Project {
	name: string
	description: string
	category?: string
}

const projects: Project[] = [
	// Machine Learning / Generative AI
	{
		name: "Spiking Neural Network for Stock Prediction",
		description: "Built an SNN in PyTorch/snnTorch to model temporal firing dynamics for stock price forecasting. Compared accuracy and latency with ANNs.",
		category: "ML/AI",
	},
	{
		name: "LSTM Stock Predictor",
		description: "Sequential model predicting financial trends using LSTM with optimized time-series preprocessing.",
		category: "ML/AI",
	},
	{
		name: "Latent Diffusion for 3D Mesh Generation",
		description: "Trained on ModelNet40 to generate text-to-3D point clouds and meshes using latent diffusion.",
		category: "ML/AI",
	},
	{
		name: "GAN Model",
		description: "Implemented a Generative Adversarial Network to experiment with generative synthesis and adversarial training.",
		category: "ML/AI",
	},
	{
		name: "Immunotherapy Recommendation Model",
		description: "Predicts treatment suitability/outcomes using patient biomarkers and ML classification.",
		category: "ML/AI",
	},
	{
		name: "AI vs Human Text Classifier",
		description: "Built a text classifier to distinguish AI- vs human-generated content via stylistic, syntactic, and discourse-based features.",
		category: "ML/AI",
	},
	{
		name: "TextToVoxel (ShapeNet)",
		description: "Extended text-to-3D model trained on ShapeNet, improving spatial accuracy and semantic grounding.",
		category: "ML/AI",
	},
	{
		name: "Driver Attention Detection",
		description: "Deep learning model detecting distracted driving behavior using multimodal sensor data (UCSC Research).",
		category: "ML/AI",
	},
	// AI Agents, Reasoning & Automation
	{
		name: "Backward Chaining Logic Engine",
		description: "Built a first-order reasoning system performing backward chaining for inference over logic rules and facts (AIEA Lab).",
		category: "Agents",
	},
	{
		name: "Multi-Agent Teamwork Simulation",
		description: "Simulation environment testing collaborative AI agents that share tasks and adapt to dynamic goals.",
		category: "Agents",
	},
	{
		name: "Workflow Agent System",
		description: "Created an agentic workflow orchestrator automating multi-step task pipelines and decision routing.",
		category: "Agents",
	},
	{
		name: "Scholar Agent",
		description: "Research automation agent that retrieves, filters, and summarizes academic papers using retrieval and LLM-based synthesis.",
		category: "Agents",
	},
	{
		name: "Physics RAG Chatbot",
		description: "Domain-specific Retrieval-Augmented Generation chatbot for physics Q&A with contextual document retrieval.",
		category: "Agents",
	},
	{
		name: "Automation Bot",
		description: "CLI automation connecting Gmail → Notion to log unread messages and trigger workflow tasks.",
		category: "Agents",
	},
	{
		name: "RAG Pipeline for Lease Data Extraction",
		description: "Automated OCR + regex + PDF parsing pipeline to extract clauses, royalty rates, and acreage from lease documents.",
		category: "Agents",
	},
	{
		name: "Agentic RAG Workflows",
		description: "Built agent-driven retrieval systems integrating NextAuth, Docker/Kubernetes, and Redis for scalable deployment (Demian Design).",
		category: "Agents",
	},
	{
		name: "AI Agent Benchmark Harness",
		description: "Engineered evaluation framework for GPT/Claude/Gemini agents to benchmark reasoning, code, and distributed workflows (Cognizant / Demian).",
		category: "Agents",
	},
	// Web, SaaS, and Applied AI
	{
		name: "Iter8 — Customer Feedback → Code CLI Tool",
		description: "Built a CLI and backend service that turns user feedback into actionable code tasks using LLMs. Integrates version control, prompt parsing, and automatic Git updates.",
		category: "Web/SaaS",
	},
	{
		name: "ClassMate — AI Study Assistant",
		description: "Co-founded project that creates personalized practice exercises, summaries, and study plans using LLM agents. Integrated syllabus parsing and question generation pipeline.",
		category: "Web/SaaS",
	},
	{
		name: "Programmatic SEO Generator",
		description: "AI-driven SaaS that reads a Notion page and outputs fully SEO-optimized website content and layouts using generative design.",
		category: "Web/SaaS",
	},
	{
		name: "Job Board Scraper Web App",
		description: "Live job aggregation app scraping SWE internships from multiple boards, showing results on a web UI and sending email alerts. Backend deployed on Railway, auto-refreshes in real-time.",
		category: "Web/SaaS",
	},
	{
		name: "Rayfield Systems Automation Proposal",
		description: "Designed AI document agents for energy permitting workflows, focusing on automation and structured data extraction.",
		category: "Web/SaaS",
	},
	{
		name: "Zero-Capital SaaS Growth Platform",
		description: "Built architecture for a startup-focused SaaS tool that automates content, backlinks, SEO, and outreach with AI.",
		category: "Web/SaaS",
	},
]

const Pages: NextPageWithLayout = () => {
	return (
		<div>
			<Head>
				<title>Projects - Sai Rohan Jayaprakash</title>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📑</text></svg>"
				/>
				<meta name="description" content="Projects" />
			</Head>
			<div className="mt-0 pt-24 lg:mt-20 lg:pt-0">
				<div className="mb-8 text-center">
					<h1 className="font-medium text-3xl text-black tracking-wide dark:text-white">
						Projects
					</h1>
					<p className="mt-2 text-gray-500 text-sm dark:text-gray-400">
						{projects.length} projects across ML/AI, Agents, and Web/SaaS
					</p>
				</div>
				<div className="flex flex-col gap-3">
					{projects.map((project, index) => (
						<div
							key={index}
							className="group rounded-lg border border-gray-200 bg-white p-5 shadow-xs transition-all hover:border-pink-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-pink-900">
							<div className="mb-2 flex items-center gap-x-3">
								<span
									className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
										project.category === "ML/AI"
											? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
											: project.category === "Agents"
												? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
												: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
									}`}>
									{project.category}
								</span>
								<h3 className="font-medium text-lg text-black transition-colors group-hover:text-pink-600 dark:text-white dark:group-hover:text-pink-400">
									{project.name}
								</h3>
							</div>
							<p className="text-gray-600 text-sm leading-relaxed dark:text-gray-400">
								{project.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

Pages.layout = pageLayout

export default Pages
