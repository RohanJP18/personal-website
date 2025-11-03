import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import { type MutableRefObject, useRef } from "react"
import { useDispatch, useSelector } from "~/hooks"
import useAnalytics from "~/hooks/analytics"
import { selectGeneral } from "~/store/general/selectors"
import {
	activateKbar,
	updateKbarSearchQuery,
	updateKbarToSearch,
} from "~/store/kbar/actions"
import Kbar, { type KbarListItem } from "../Kbar"
import { HeaderTransition, OffsetTransition } from "../Motion"
import ScrollWrapper from "../Motion/scroll"
import Tabs from "../Tabs"

interface HeaderSearchBarComponentProps {
	activateKbar: () => void
}

const HeaderSearchBarComponent = ({
	activateKbar,
}: HeaderSearchBarComponentProps) => {
	return (
		<div className="effect-pressing hidden lg:flex lg:w-[65%] xl:w-[620px]">
			<div
				aria-label="Command + K to open the command palette"
				className="absolute top-[6px] left-3 z-10 cursor-not-allowed rounded-md border bg-gray-50 px-1.5 py-0.5 text-gray-400 text-xs dark:border-gray-600 dark:bg-transparent">
				⌘+K
			</div>
			<input
				type="text"
				className="w-full rounded-md border border-gray-200 bg-white/90 px-3 py-2 pl-[54px] text-sm outline-hidden transition-shadow hover:bg-neutral-50 dark:border-gray-700 dark:bg-gray-800/50 dark:shadow-xs dark:hover:border-gray-700 dark:hover:bg-gray-800"
				placeholder="Type your command or search..."
				onFocus={activateKbar}
				data-oa="click-activateKbar"
				data-cy="cmdkbutton"
			/>
		</div>
	)
}

const HeaderTitleComponent = () => {
	const { headerTitle } = useSelector(selectGeneral)

	if (!headerTitle) return null

	return (
		<div className="mx-auto hidden items-center justify-center space-x-3 overflow-hidden lg:flex">
			<h3 className="overflow-hidden text-ellipsis whitespace-nowrap font-medium">
				{headerTitle}
			</h3>
		</div>
	)
}

interface HeaderComponentProps {
	headerRef: MutableRefObject<HTMLDivElement>
}

const HeaderComponent = ({ headerRef }: HeaderComponentProps) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { trackEvent } = useAnalytics()

	const { setTheme, resolvedTheme } = useTheme()
	const titleRef = useRef<HTMLDivElement>(null)

	const nonHomePage = router.pathname.split("/").length > 2

	const leftTabItems = [
		{
			label: "Avatar",
			hoverable: false,
			component: (
				<div className="group mx-auto flex cursor-pointer items-center justify-center space-x-3 px-5">
					<div className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-gray-300 dark:border-gray-500">
						<span className="font-medium text-xs text-gray-700 dark:text-gray-400">
							s
						</span>
					</div>
					<div className="font-medium text-3 text-black">
						<Link href="/" passHref>
							<h3 className="text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
								Sai Rohan Jayaprakash
							</h3>
						</Link>
					</div>
				</div>
			),
		},
	]

	const rightTabItems = [
		{
			label: "Home",
			className: "hidden lg:block",
			icon: "home",
			bgColor: "bg-pink-100",
			bgDark: "dark:bg-pink-900",
			link: {
				internal: "/",
			},
		},
		{
			label: "Connect",
			className: "hidden lg:block",
			bgColor: "bg-pink-100",
			bgDark: "dark:bg-pink-900",
			icon: "chat",
			link: {
				internal: "/page/765",
			},
		},
		{
			label: "Projects",
			icon: "pages",
			bgColor: "bg-pink-100",
			bgDark: "dark:bg-pink-900",
			link: {
				internal: "/pages",
			},
		},
		{
			label: "Experiences",
			icon: "suitcase",
			bgColor: "bg-pink-100",
			bgDark: "dark:bg-pink-900",
			link: {
				internal: "/experiences",
			},
		},
		// {
		// 	label: "About",
		// 	icon: "me",
		// 	link: {
		// 		internal: "/post/126",
		// 	},
		// },
	]

	const kbarItems: KbarListItem[] = [
		{
			label: "Navigation",
			id: "navigation-divider",
			hoverable: false,
		},
		{
			label: "Go Back",
			id: "back",
			icon: "left",
			shortcut: ["b"],
			action: () => router.back(),
			description: "Command",
		},
		{
			label: "Home",
			id: "home",
			icon: "home",
			shortcut: ["h"],
			description: "Command",
			link: {
				internal: "/",
			},
		},
		{
			label: "Appearance",
			id: "appearance-divider",
			hoverable: false,
		},
		{
			label: "Themes",
			id: "themes",
			icon: resolvedTheme === "light" ? "sun" : "moon",
			description: "Choices",
			shortcut: ["t"],
			singleton: false,
			sublist: {
				key: "themes",
				list: [
					resolvedTheme === "light"
						? {
								label: "Dark",
								id: "darktheme",
								shortcut: ["d"],
								description: "Command",
								icon: "moon",
								action: () => setTheme("dark"),
							}
						: {
								label: "Light",
								id: "lighttheme",
								shortcut: ["l"],
								description: "Command",
								icon: "sun",
								action: () => setTheme("light"),
							},
					{
						label: "Same as system",
						id: "systemtheme",
						shortcut: ["y"],
						description: "Command",
						icon: "monitor",
						action: () => setTheme("system"),
					},
				],
				placeholder: "Set theme to...",
			},
		},
		{
			label: "Social",
			id: "social-divider",
			hoverable: false,
		},
		{
			label: "GitHub",
			id: "github",
			description: "Link",
			icon: "github",
			link: {
				external: "https://github.com/RohanJP18",
			},
		},
		{
			label: "LinkedIn",
			id: "linkedin",
			description: "Link",
			icon: "briefCase",
			link: {
				external: "https://www.linkedin.com/in/rohanjp/",
			},
		},
	]

	const scrollHandler = (position: number) => {
		if (!headerRef?.current) return

		headerRef.current.style.transform = `translateY(${15 - position || 0}%)`
	}

	return (
		<ScrollWrapper handler={scrollHandler} startPosition={0} endPosition={15}>
			<header
				ref={headerRef}
				id="header"
				className="header fixed top-0 z-50 grid h-auto w-full grid-cols-8 border-gray-200 border-b px-1 py-2 leading-14 duration-300 lg:border-0 lg:bg-transparent lg:px-5 lg:py-4 dark:border-b-transparent dark:backdrop-blur-lg">
				<div className="col-start-1 col-end-3 flex items-center lg:items-baseline lg:space-x-2">
					<Tabs items={leftTabItems} />
				</div>
				<OffsetTransition disabled={!nonHomePage} componentRef={titleRef}>
					<div
						ref={titleRef}
						className="col-start-3 col-end-7 flex items-center justify-center">
						{nonHomePage ? (
							<HeaderTitleComponent />
						) : (
							<HeaderSearchBarComponent
								activateKbar={() => dispatch(activateKbar(kbarItems))}
							/>
						)}
					</div>
				</OffsetTransition>
				<div className="col-start-7 col-end-9 flex justify-end space-x-2">
					<Tabs items={rightTabItems} />
				</div>
				<Kbar list={kbarItems} />
			</header>
		</ScrollWrapper>
	)
}

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null)

	return (
		<HeaderTransition componentRef={headerRef}>
			<HeaderComponent headerRef={headerRef} />
		</HeaderTransition>
	)
}

export default Header
