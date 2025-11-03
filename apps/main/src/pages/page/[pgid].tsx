import type { GetServerSideProps } from "next"
import Head from "next/head"
import { useEffect } from "react"
import { contentLayout } from "~/components/Content"
import { useDispatch } from "~/hooks"
import type { NextPageWithLayout } from "~/pages/_app"
import { setHeaderTitle } from "~/store/general/actions"

const BlogPage: NextPageWithLayout = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setHeaderTitle("Connect"))

		return () => {
			dispatch(setHeaderTitle(""))
		}
	}, [dispatch])

	return (
		<div>
			<Head>
				<title>Connect - Sai Rohan Jayaprakash</title>
				<link
					rel="icon"
					href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📄</text></svg>"
				/>
				<meta name="description" content="Connect" />
			</Head>
			<div className="flex min-h-screen items-center justify-center px-4">
				<div className="w-full max-w-md text-center">
					<div className="rounded-lg border border-gray-200 bg-white p-8 shadow-xs transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600">
						<div className="mb-6">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
								<span className="text-3xl">✉️</span>
							</div>
							<h2 className="font-medium text-xl text-black dark:text-white">
								Get in Touch
							</h2>
							<p className="mt-2 text-gray-600 text-sm dark:text-gray-400">
								Feel free to reach out via email
							</p>
						</div>
						<a
							href="mailto:srohanjp@gmail.com"
							className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg bg-gray-500 px-6 py-3 font-medium text-white transition-all hover:bg-gray-600 hover:shadow-md dark:bg-gray-600 dark:hover:bg-gray-700">
							<span className="text-lg">📧</span>
							<span>Email Me</span>
						</a>
						<p className="mt-4 text-gray-500 text-xs dark:text-gray-500">
							srohanjp@gmail.com
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {},
	}
}

BlogPage.layout = contentLayout

export default BlogPage
