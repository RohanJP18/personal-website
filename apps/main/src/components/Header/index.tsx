import { Icon } from "@twilight-toolkit/ui"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import { useMemo } from "react"
import { useSelector } from "~/hooks"
import { selectGeneral } from "~/store/general/selectors"

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Experiences", href: "/experiences" },
	{ label: "Projects", href: "/pages" },
	{ label: "Connect", href: "/page/765" },
]

const Header = () => {
	const router = useRouter()
	const { resolvedTheme, setTheme } = useTheme()
	const { headerTitle } = useSelector(selectGeneral)

	const activeRoute = useMemo(() => router.asPath, [router.asPath])

	return (
		<header className="fixed top-0 z-40 w-full border-b border-white/60 bg-white/80 shadow-lg backdrop-blur-md transition-colors duration-300 dark:border-neutral-800/60 dark:bg-neutral-900/75 dark:shadow-none">
			<div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
				<Link href="/" className="flex items-center gap-3 text-sm font-semibold text-gray-800 dark:text-gray-200">
					<span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs uppercase text-gray-600 dark:border-gray-600 dark:text-gray-300">
						{headerTitle ? headerTitle.charAt(0).toUpperCase() : "S"}
					</span>
					<span className="hidden sm:block truncate text-ellipsis">
						{headerTitle || "Sai Rohan Jayaprakash"}
					</span>
				</Link>

				<nav className="hidden items-center gap-5 text-sm font-medium text-gray-500 transition-colors dark:text-gray-400 md:flex">
					{navLinks.map(({ label, href }) => {
						const isActive =
							href === "/"
								? activeRoute === "/"
								: activeRoute.startsWith(href)
						return (
							<Link
								key={label}
								href={href}
								className={`inline-flex items-center gap-1 transition-colors ${
									isActive
										? "text-indigo-500 dark:text-indigo-300"
										: "hover:text-indigo-500 dark:hover:text-indigo-300"
								}`}>
								{label === "Home" && <Icon name="home" />}
								{label === "Experiences" && <Icon name="suitcase" />}
								{label === "Projects" && <Icon name="pages" />}
								{label === "Connect" && <Icon name="chat" />}
								<span>{label}</span>
							</Link>
						)
					})}
				</nav>

				<div className="flex items-center gap-2">
					<button
						aria-label="Toggle theme"
						onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
						className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/70 text-gray-600 transition hover:border-indigo-200 hover:text-indigo-500 dark:border-white/10 dark:bg-transparent dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-300">
						<Icon name={resolvedTheme === "dark" ? "sun" : "moon"} />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
