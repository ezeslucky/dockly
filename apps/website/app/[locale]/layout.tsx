import { Inter, Lexend } from "next/font/google";
import "@/styles/tailwind.css";
import "react-photo-view/dist/react-photo-view.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
	metadataBase: new URL(""),
	title: {
		default: "Dockly - Effortless Deployment Solutions",
		template: " Simplify Your DevOps",
	},
	icons: {
		icon: "icon.svg",
		apple: "apple-touch-icon.png",
	},
	alternates: {
		canonical: "",
		languages: {
			en: "",
		},
	},
	description:
		"Streamline your deployment process with Dockly. Effortlessly manage applications and databases on any VPS using Docker and Traefik for improved performance and security.",
	applicationName: "Dockly",
	keywords: [
		"Dockly",
		"Docker",
		"Traefik",
		"deployment",
		"VPS",
		"application management",
		"database management",
		"DevOps",
		"cloud infrastructure",
		"UI Self hosted",
	],
	referrer: "origin",
	robots: "index, follow",
	openGraph: {
		type: "website",
		url: "",
		title: "Dockly - Effortless Deployment Solutions",
		description:
			"Simplify your DevOps with Dockly. Deploy applications and manage databases efficiently on any VPS.",
		siteName: "Dockly",
		images: [
			{
				url: "/og.png",
			},
			{
				url: "/icon.svg",
				width: 24,
				height: 24,
				alt: "Dockly Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@ezeslucky",
		creator: "@ezeslucky",
		title: " Simplify Your DevOps",
		description:
			"Deploy applications and manage databases with ease using Dockly. Learn how our platform can elevate your infrastructure management.",
		images: "/og.png",
	},
};

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return (
		<div className="flex h-full flex-col">
			<Header />
			{children}
			<Footer />
		</div>
	);
}