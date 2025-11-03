import Head from "next/head"
import { pageLayout } from "~/components/Page"
import type { NextPageWithLayout } from "~/pages/_app"

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Sai Rohan Jayaprakash</title>
			</Head>
			<section className="flex min-h-screen items-center justify-center">
				<div className="flex flex-col items-center gap-y-2.5 text-center">
					<h1 className="flex items-center whitespace-nowrap break-words font-medium text-3xl text-black tracking-wide lg:text-[1.8rem] dark:text-white">
						<span className="mr-2 inline-block animate-wave-hand cursor-pointer hover:animate-wave-hand-again">
							👋
						</span>
						Sai Rohan Jayaprakash
					</h1>
					<div className="flex flex-col gap-y-1.5 break-words font-light text-4 text-gray-500 leading-relaxed tracking-wider lg:text-2 dark:text-gray-300">
						<p>
							I love to design, build, and scale products.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

Home.layout = pageLayout

export default Home
