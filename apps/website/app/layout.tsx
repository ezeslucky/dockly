import clsx from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Lexend } from "next/font/google";
import type { ReactNode } from "react";
type Props = {
	children: ReactNode;
};

// export const metadata: Metadata = {
// 	metadataBase: new URL("https://dokploy.com"),
// 	title: "Dokploy - Deploy your applications with ease",
// 	description: "Deploy your applications with ease using Dokploy",
// 	icons: {
// 		icon: "icon.svg",
// 		apple: "apple-touch-icon.png",
// 	},
// 	openGraph: {
// 		title: "Dokploy - Deploy your applications with ease",
// 		description: "Deploy your applications with ease using Dokploy",
// 		images: "favicon.ico",
// 		type: "website",
// 	},
// 	twitter: {
// 		card: "summary_large_image",
// 		title: "Dokploy - Deploy your applications with ease",
// 		description: "Deploy your applications with ease using Dokploy",
// 		images: ["/og.png"],
// 	},
// };
const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const lexend = Lexend({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-lexend",
});
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default async function RootLayout({
	children,
	params,
}: {
	children: ReactNode;
	params: { locale: string };
}) {
	const { locale } = params;
	const messages = await getMessages();
	return (
		<html
			lang={locale}
			className={clsx(
				"h-full scroll-smooth antialiased",
				inter.variable,
				lexend.variable,
			)}
		>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
