import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Github, GlobeIcon, HeartIcon, Rss } from "lucide-react";
import Link from "next/link";
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const Logo = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 559 446"
			className="!size-8 lg:!size-10"
		>
			<path
				className="fill-primary stroke-primary"
				d="M390 56v12c.1 2.3.5 4 1 6a73 73 0 0 0 12 24c2 2.3 5.7 4 7 7 4 3.4 9.6 6.8 14 9 1.7.6 5.7 1.1 7 2 1.9 1.3 2.9 2.3 0 4v1c-.6 1.8-1.9 3.5-3 5q-3 4-7 7c-4.3 3.2-9.5 6.8-15 7h-1q-2 1.6-5 2h-4c-5.2.7-12.9 2.2-18 0h-6c-1.6 0-3-.8-4-1h-3a17 17 0 0 1-6-2h-1c-2.5-.1-4-1.2-6-2l-4-1c-8.4-2-20.3-6.6-27-12h-1c-4.6-1-9.5-4.3-13.7-6.3s-10.5-3-13.3-6.7h-1c-4-1-8.9-3.5-12-6h-1c-6.8-1.6-13.6-6-20-9-6.5-2.8-14.6-5.7-20-10h-1c-7-1.2-15.4-4-22-6h-97c-5.3 4.3-13.7 4.3-18.7 10.3S90.8 101 88 108c-.4 1.5-.8 2.3-1 4-.2 1.6-.8 4-1 5v51c.2 1.2.8 3.2 1 5 .2 2 .5 3.2 1 5a79 79 0 0 0 6 12c.8.7 1.4 2.2 2 3 1.8 2 4.9 3.4 6 6 9.5 8.3 23.5 10.3 33 18h1c5.1 1.2 12 4.8 16 8h1c4 1 8.9 3.5 12 6h1q4.6 1.2 8 4h1c2 .1 2.6 1.3 4 2 1.6.8 2.7.7 4 2h1q2.5.3 4 2h1c3 .7 6.7 2 9 4h1c4.7.8 13.4 3.1 17 6h1c2.5.1 4 1.3 6 2 1.8.4 3 .8 5 1q3 .4 5 1c1.6-.2 2 0 3 1h1q2.5-.5 4 1h1q2.5-.5 4 1h1c2.2-.2 4.5-.3 6 1h1q4-.4 7 1h45c1.2-.2 3.1-1 5-1h6c1.5-.6 2.9-1.3 5-1h1q1.5-1.4 4-1h1q1.5-1.4 4-1h1c2.4-1.3 5-1.6 8-2l5-1c2-.7 3.6-1.6 6-2 4-.7 7.2-1.7 11-3 2.3-1 4.2-2.5 7-3h1q1.5-1.7 4-2h1c1.9-1.5 3.9-2 6-3q2.9-1.6 6-3a95 95 0 0 0 11-5c4.4-2.8 8.9-6 14-8 0 0 .6.2 1 0 1.8-2.8 7-4.8 10-6 0 0 .6.2 1 0 1.5-2.4 5.3-4 8-5 0 0 .6.2 1 0 1.5-2.4 5.3-4 8-5 0 0 .6.2 1 0 1.3-2 3.8-3.1 6-4 0 0 .6.2 1 0 2-3 7.7-5.6 11-7l5-2c6.3-3.8 11.8-9.6 18-14v-1c0-1.9-.4-4.2 0-6-1-4.5-3.9-5.5-7-8h-1c-1.2 0-2.8-.2-4 0-8.9 1.7-16.5 11.3-25.2 14.8-8.8 3.4-16.9 10.7-25.8 14.2h-1c-10.9 10.6-29.2 16-42.7 23.3S343.7 234.6 328 235h-1q-1.5 1.4-4 1h-1q-1.5 1.4-4 1h-1c-1.5 1.3-3.9 1.2-6 1h-1c-1.7 1.3-4.6 1.2-7 1-1 .2-2.4 1-4 1h-5c-6.6 0-13.4.4-20 0-1.9-.1-2.7.3-4-1h-8c-2.8-.2-5.7-1.3-8-2h-2q-5.7.4-10-2h-1q-4.5 0-8-2h-1a10 10 0 0 1-6-2h-1c-5.9-.2-12-3.8-17-6l-4-1c-1.7-.5-2.8-.7-4-2h-1q-2.5-.2-4-2h-1q-3.4-.9-6-3h-1c-3.5-.8-7.3-2.9-10-5h-1c-1.7 0-2.2-.7-3-2h-1c-11.6-2.7-23.2-11.5-34.2-15.8-11-4.2-25.9-9.2-29.8-21.2h4c16.2 0 32.8-1 49 0 1.7.1 3 .8 4 1 2.1.4 3.4-.5 5 1h1c3.6.1 8.4 1.8 11 4h1a45 45 0 0 1 18 8h1q4.6 1.2 8 4h1c4.2 1 8.3 3.4 12 5q3.4 1.2 7 2c5.7 1.3 13 2.3 18 5h1c3.7-.2 7 1.1 10 2h9c1.6 0 3 .8 4 1h32c2.2-1.6 6-1 9-1h1a63 63 0 0 1 22-4 22 22 0 0 1 8-2c1.7-1.4 3.7-1.6 6-2a81 81 0 0 0 12-3c2.3-1 4.2-2.5 7-3h1q1.5-1.7 4-2h1c1.9-1.5 3.6-2.2 6-3l3-1c4.1-2.3 8.4-5.2 13-7 0 0 .6.2 1 0 1.5-2.4 6.3-5 9-6 0 0 .6.2 1 0 5.3-8.1 17.6-12.5 24.8-20.2C439.9 144 445 133 452 126v-1a12 12 0 0 1 2-5c2.1-2.2 8.9-1 12-1q2 .2 4 0c1-.2 2.3-1.2 4-1h1q2.1-1.5 5-2h1q2.1-1.9 5-3s.6.2 1 0c9-9.3 18-15.4 23-28 1.1-2.8 3.5-6.4 4-9 .2-1 .2-3 0-4-1.5-6-12.3-2.4-15.7 2.3S484.7 80 479 80h-7c-7.8 4.3-19.3 5.7-23 16a37 37 0 0 0-22-24c-1.5-.5-2.5-.7-4-1-2.1-.5-3.6-.2-5-2h-1a22 22 0 0 1-12-8c-2-2.9-3.4-6.5-6-9h-1c-3.9-.6-6.1 1-8 4m-181 45h1c2.2-.2 4.5-.3 6 1h1q2.5-.5 4 1h1a33 33 0 0 1 17 7h1c4.4 1 8.2 4.1 12 6 2.1 1 4.1 1.5 6 3h1c4 1 8.9 3.5 12 6h1c4 1 8.9 3.5 12 6h1c4 1 8.9 3.5 12 6h1a61 61 0 0 1 21 10h1c3.5.8 7.3 2.9 10 5h1c6.1 1.4 12.3 5 18 7 1.8.4 3 .8 5 1 1.8.2 3.7.8 5 1q2.5-.5 4 1h6c2.5 0 4 .3 6 1h3q-.7 2.1-3 2a46 46 0 0 1-16 7l-10 3c-2 .8-3.4 1.9-6 2h-1c-2.6 2.1-7.5 3-11 3h-1c-3.1 2.5-10.7 3.5-15 3h-1c-1.5 1.3-3.9 1.2-6 1-1 .2-2.4 1-4 1h-11c-3.8.4-8.3.4-12 0h-9c-2.3 0-4.3-.7-6-1h-3c-1.8 0-2.9-.7-4-1-3.5-.8-7-.7-10-2h-1c-4.1-.7-9.8-1.4-13-4h-1q-4-.6-7-3h-1q-2.5-.2-4-2h-1q-3.4-.9-6-3h-1c-7.2-1.7-13.3-5.9-20.2-8.8-7-2.8-16.2-4.3-22.8-7.2h-11c-14 0-28.9.3-42-1-2.3 0-4.8.3-7 0a6 6 0 0 1-5-5c-1.8-4.8-.4-10.4 0-15 0-4.3-.4-8.7 0-13 .2-3.2 2.2-7.3 4-10q2-3 5-5c2.1-2 5.4-2.3 8-3 15.6-3.9 36.3-1 53-1 5.2 0 12-.5 17 0s12.2-1.8 16 1Z"
			/>

			<path
				className="fill-primary stroke-primary"
				d="M162 132v1c1.8 2.9 4.5 5.3 8 6 .3-.2 3.7-.2 4 0 7-1.4 9.2-8.8 7-15v-1a14 14 0 0 0-7-4c-.3.2-3.7.2-4 0-6.5 1.3-8.6 6.8-8 13Z"
			/>

			<path
				className="fill-primary stroke-primary"
				d="M465 211h-1c-18.2 14.6-41.2 24.6-60 39-19 14.2-42.7 29.3-66 34l-4 1c-2.4 1-4 2-7 2h-1q-3.5 2-8 2h-1c-1.3 1.2-3 1.1-5 1h-2q-2.6 1.1-6 1h-2c-3 1.2-6.5 1-10 1-6.3.6-13.8.6-20 0-3.4 0-8.4.9-11-1h-1c-2.2.2-4.5.3-6-1h-1c-2 .2-3.7.2-5-1h-1c-7.6.5-16.5-3.4-23-6l-4-1a129 129 0 0 1-36.2-15.8c-10.4-6.6-23.2-12.8-32.5-20.5-9.2-7.7-23.8-12.8-30.3-22.7h-1c-2.3-1.4-4.5-2.7-6-5h-1c-4-2.5-8.5-5.2-12-8h-9a9 9 0 0 0-6 7c.3 3.3 0 6.7 0 10v9c.2 1.6 1 3.8 1 6v3c.2 1 1.2 2.2 1 4v1c1.2 1.2.8 2.2 1 4 .8 6.7 3 12.6 5 19 1.7 4.3 4.2 9.1 5 14v1q1.8 1.5 2 4v1a36 36 0 0 1 5 10c.7 2 1 3 2 5 8 12.7 15.7 25.5 25.8 37.3 10 11.7 20.8 20.6 32.4 30.4 11.7 9.9 28.3 14 39.8 23.3h1q2.5.3 4 2h1c2.8.4 4.8 2 7 3l7 2c5.7 1.3 13 2.3 18 5h1c2.1-.3 3.6.8 5 1h3c2.8.2 5.8 1 8 2h8c2.1 0 4.6.8 6 1h21c1.2-.2 3.2-1 5-1h9c3.3-1 7-2.4 11-2h1c2.7-2.2 7.4-2.4 11-3a55 55 0 0 0 8-2c6.5-2.6 13.9-6.3 21-8h1c8.5-6.8 20.6-9.7 29.2-16.8 8.7-7 18.3-12.8 26.8-20.2 4.4-3.8 9-9 13-13 14.8-14.8 20.7-34.6 33-50v-1q.9-3.4 3-6v-1q.3-2.5 2-4v-1c.5-3.3 2-8.6 4-11v-1q0-3.5 2-6v-1c1.1-6.7 2.4-15 5-21v-1c-.2-2-.2-3.7 1-5v-8c0-5.3-.5-10.8 0-16a14 14 0 0 0-4-6c-1-.5-1.1-.4-2-1h-6q-2.1 1.5-5 2m-6 38c-2.1 13.4-21.2 20.3-31 30-10 9.5-23.7 19-35 27-11.5 8-25.1 19.7-39 23h-1a22 22 0 0 1-10 4h-1a25 25 0 0 1-12 4h-1q-3.5 2-8 2h-1c-1.1 1.1-2.3 1-4 1h-2c-1.2.4-2.2 1-4 1h-2c-1.8.7-3.6 1.3-6 1h-1c-1.2 1.2-2.3 1-4 1h-5c-5.7.6-12.3.8-18 0h-4c-1.9 0-2.7-.6-4-1h-6c-1.9 0-2.7.3-4-1h-1q-2.5.5-4-1h-1c-8.1.5-16.8-3.6-24.2-5.8S210 329.8 204 325h-1c-12.8-5-27.1-15.6-37.7-24.3S138.8 284.2 131 273c-.3-.2-1 0-1 0-5.7-4.4-16.6-10-19-17-.9-2.6-1-5.4-2-8-.8-2.2-2.5-5-2-8a667 667 0 0 0 88 56h1q3.4.9 6 3h1c2.8.4 4.8 2 7 3q5 1.8 10 3l6 2q2.9.6 6 1 3 .4 5 1c1.6-.2 2 0 3 1h1c2-.2 3.7-.2 5 1h1c2.2-.3 3.4.4 5 1h8c1.6 0 3 .9 4 1h40c1.8-1.3 4.6-1.2 7-1h1c1.2-1.2 3.2-1.2 5-1h1c1.2-1.2 3.2-1.2 5-1h1c1.1-1.1 2.3-1 4-1h2c3.5-1.7 6.9-2.3 11-3l4-1c3.4-1.4 7.1-3 11-4 1.5-.4 2.5-.5 4-1 1.4-.7 2-1.9 4-2h1q2.6-2.1 6-3h1c2.5-2 6-3.8 9-5l3-1c1.4-.9 2-2.5 4-3h1q1.4-2.2 4-3h1c7.3-7.7 19-13.2 27.7-19.3 8.8-6.1 18.2-15 28.3-18.7.4-.2 1 0 1 0q3.8-3.9 9-6c1.3 2.5-.5 6.7-1 10m-20 55c-.2.4 0 1 0 1-3.4 9.6-12.7 19-19 27a88 88 0 0 1-12 12 214 214 0 0 1-26.7 20.3c-9.5 5.8-20 14.8-31.3 16.7h-1a22 22 0 0 1-10 4h-1c-3.2 2.6-8.9 3.3-13 4h-1q-1.5 1.4-4 1h-1q-1.5 1.4-4 1h-1c-4.9 2.3-10.5 1-16 2-1 .2-2.5 1-4 1-6.2.4-12.8.3-19 0-1.8 0-3.8-.8-5-1h-4c-1.6 0-3-.9-4-1h-4c-3.9-.3-8.8-1.3-12-3h-1c-3.3-.5-7.5-1-10-3h-1c-3.6-.1-8.4-1.8-11-4h-1c-3.9-.6-8-2.6-11-5h-1c-16.1-3.8-32.2-18.9-45-29a200 200 0 0 1-40-51c17.7 11.5 35 25.5 52 38h1c4 1.6 12.8 5.4 15 9h1c4.6 1 10.4 4.1 14 7h1q2.5.3 4 2h1c3.3.5 8.6 2 11 4h1q3.5 0 6 2h1q2.5-.5 4 1h1q2.5-.5 4 1h1c3.8-.2 7.9 1 11 2h9c1.6 0 3 .8 4 1h32c1.2-.2 3.2-1 5-1h8a139 139 0 0 1 20-4l5-1c2-.7 3.7-1.5 6-2l4-1c1.5-.6 3-1.7 5-2h1q3-2.4 7-3h1q2.6-2.1 6-3h1c11.7-9.4 27.6-14.6 39-25 11.6-10.3 25-18.5 37-28a15 15 0 0 1-5 10Z"
			/>
		</svg>
	);
};

export const baseOptions: BaseLayoutProps = {
	nav: {
		// title: "Dokploy",
		children: (
			<Link href="/docs/core" className="flex items-center gap-2">
				<Logo />
				<span className="text-foreground font-semibold">Dokploy</span>
			</Link>
		),
	},
	links: [
		{
			text: "Website",
			url: "https://dokploy.com",
			active: "nested-url",
			icon: <GlobeIcon />,
		},
		{
			text: "Discord",
			url: "https://discord.com/invite/2tBnJ3jDJc",
			active: "nested-url",
			icon: (
				<>
					<svg
						role="img"
						className="size-6 "
						fill="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
					</svg>
				</>
			),
		},
		{
			text: "Support",
			url: "https://opencollective.com/dokploy",
			active: "nested-url",
			icon: (
				<>
					<HeartIcon fill="currentColor" />
				</>
			),
		},
		{
			text: "Github",
			url: "https://github.com/dokploy/dokploy",
			active: "nested-url",
			icon: (
				<>
					<Github fill="currentColor" />
				</>
			),
		},
		{
			text: "Blog",
			url: "https://dokploy.com/blog",
			active: "nested-url",
			icon: (
				<>
					<Rss />
				</>
			),
		},
	],
};
