"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
} from "@/components/ui/select";
import { Link, useRouter } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import type { SVGProps } from "react";
import { Container } from "./Container";
import { NavLink } from "./NavLink";
import { Logo } from "./shared/Logo";
import { buttonVariants } from "./ui/button";

const I18nIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		fill="currentColor"
		stroke="currentColor"
		strokeWidth={0}
		viewBox="0 0 512 512"
		{...props}
	>
		<path
			stroke="none"
			d="m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362 368 281.65 401.17 362zm-66.99-19.08a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z"
		/>
	</svg>
);

export function Footer() {
	const router = useRouter();
	const locale = useLocale();
	const t = useTranslations("HomePage");
	const linkT = useTranslations("Link");

	return (
		<footer className="bg-black">
			<Container>
				<div className="py-16">
					<div className="flex flex-col items-center gap-2">
						<Logo className="mx-auto h-10 w-auto" />
						<span className="text-center text-sm font-medium text-primary">
							Dokploy
						</span>
					</div>

					<nav className="mt-10 text-sm" aria-label="quick links">
						<div className="-my-1 flex flex-wrap justify-center gap-6">
							<NavLink href="/#features">{t("navigation.features")}</NavLink>
							<NavLink href="/#faqs">{t("navigation.faqs")}</NavLink>
							<NavLink href={linkT("docs.intro")} target="_blank">
								{t("navigation.docs")}
							</NavLink>
						</div>
					</nav>
				</div>
				<div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
					<div className="flex gap-x-6 items-center">
						<Link
							href="https://x.com/getdokploy"
							className="group"
							aria-label="Dokploy on Twitter"
						>
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 512 512"
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 fill-muted-foreground group-hover:fill-muted-foreground/70"
							>
								<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
							</svg>
						</Link>
						<Link
							href="https://github.com/dokploy/dokploy"
							className="group"
							aria-label="Dokploy on GitHub"
						>
							<svg
								aria-hidden="true"
								className="h-6 w-6 fill-muted-foreground group-hover:fill-muted-foreground/70"
							>
								<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
							</svg>
						</Link>
						<Select
							onValueChange={(locale) => {
								router.replace("/", {
									locale: locale as "en" | "zh-Hans",
								});
							}}
							value={locale}
						>
							<SelectTrigger
								className={buttonVariants({
									variant: "outline",
									className:
										" flex items-center gap-2 !rounded-full visited:outline-none focus-within:outline-none focus:outline-none",
								})}
							>
								<I18nIcon width={20} height={20} />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="en">{t("navigation.i18nEn")}</SelectItem>
								<SelectItem value="fr">{t("navigation.i18nFr")}</SelectItem>
								<SelectItem value="zh-Hans">
									{t("navigation.i18nZh-Hans")}
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<p className="mt-6 text-sm text-muted-foreground sm:mt-0">
						{t("footer.copyright", {
							year: new Date().getFullYear(),
						})}
					</p>
				</div>
			</Container>
		</footer>
	);
}
