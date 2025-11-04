import Document, {
	type DocumentContext,
	type DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document"

class AppDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx)
		return initialProps
	}

	render() {
		return (
			<Html lang="en" prefix="og: http://ogp.me/ns#">
				<Head>
					<link
						rel="icon"
						href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='white' stroke='%23d1d5db' stroke-width='3'/><text x='50' y='50' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='500' text-anchor='middle' dominant-baseline='central' fill='%23374151'>s</text></svg>"
						media="(prefers-color-scheme: light)"
					/>
					<link
						rel="icon"
						href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%231f2937' stroke='%236b7280' stroke-width='3'/><text x='50' y='50' font-family='system-ui, -apple-system, sans-serif' font-size='50' font-weight='500' text-anchor='middle' dominant-baseline='central' fill='%239ca3af'>s</text></svg>"
						media="(prefers-color-scheme: dark)"
					/>
				<meta
					name="description"
					content="Sai Rohan Jayaprakash - I love to design, build, and scale products."
				/>
				<meta
					name="keywords"
					content="Sai Rohan Jayaprakash, Product Designer, Product Engineer, Full Stack Developer, Software Engineer, Developer, Blog, Personal Site, Next.js, React.js, TypeScript, JavaScript"
				/>
					<meta name="robots" content="index,follow" />
					<meta name="googlebot" content="index,follow" />
					<meta property="og:url" content="https://personal-website-analytics-tau.vercel.app" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Sai Rohan Jayaprakash" />
				<meta
					property="og:description"
					content="Sai Rohan Jayaprakash - I love to design, build, and scale products."
				/>
					<meta property="og:image:alt" content="Sai Rohan Jayaprakash" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:site_name" content="Sai Rohan Jayaprakash" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@rohanjp" />
					<meta name="twitter:creator" content="@rohanjp" />
					<meta property="twitter:title" content="Sai Rohan Jayaprakash" />
				<meta
					property="twitter:description"
					content="Sai Rohan Jayaprakash - I love to design, build, and scale products."
				/>
					<meta name="theme-color" content="#f7f8f9" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default AppDocument
