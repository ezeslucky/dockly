"use client";
import clsx from "clsx";

import { cn } from "@/lib/utils";
import { IconInfoCircle } from "@tabler/icons-react";
import {
	ArrowRight,
	MinusIcon,
	PlusCircleIcon,
	PlusIcon,
	X,
	XCircleIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "./ui/button";
import HeroVideoDialog from "./ui/hero-video-dialog";
import { NumberInput } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";

function SwirlyDoodle(props: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 281 40"
			preserveAspectRatio="none"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
			/>
		</svg>
	);
}

function CheckIcon({
	className,
	...props
}: React.ComponentPropsWithoutRef<"svg">) {
	return (
		<svg
			aria-hidden="true"
			className={clsx(
				"h-6 w-6 flex-none fill-current stroke-current",
				className,
			)}
			{...props}
		>
			<path
				d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
				strokeWidth={0}
			/>
			<circle
				cx={12}
				cy={12}
				r={8.25}
				fill="none"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
export const calculatePrice = (count: number, isAnnual = false) => {
	if (isAnnual) {
		if (count <= 1) return 45.9;
		return 35.7 * count;
	}
	if (count <= 1) return 4.5;
	return count * 3.5;
};

export function Pricing() {
	const router = useRouter();
	const t = useTranslations("Pricing");
	const [isAnnual, setIsAnnual] = useState(false);
	const [serverQuantity, setServerQuantity] = useState(1);
	const featured = true;

	const [openVideo, setOpenVideo] = useState(false);
	return (
		<section
			id="pricing"
			aria-label="Pricing"
			className="border-t border-border/30 bg-black py-20 sm:py-32"
		>
			<div className="absolute inset-0">
				<svg viewBox="0 0 2000 1000" xmlns="http://www.w3.org/2000/svg">
					<mask id="b" x="0" y="0" width="2000" height="1000">
						<path fill="url(#a)" d="M0 0h2000v1000H0z" />
					</mask>
					<path d="M0 0h2000v1000H0z" />
					<g stroke="#22222233" strokeWidth=".4" fill="none" mask="url(#b)">
						<path d="M0 0h50v50H0zM50 0h50v50H50zM100 0h50v50h-50zM150 0h50v50h-50zM200 0h50v50h-50zM250 0h50v50h-50zM300 0h50v50h-50zM350 0h50v50h-50zM400 0h50v50h-50zM450 0h50v50h-50zM500 0h50v50h-50zM550 0h50v50h-50zM600 0h50v50h-50zM650 0h50v50h-50zM700 0h50v50h-50zM750 0h50v50h-50zM800 0h50v50h-50zM850 0h50v50h-50zM900 0h50v50h-50zM950 0h50v50h-50zM1000 0h50v50h-50zM1050 0h50v50h-50zM1100 0h50v50h-50zM1150 0h50v50h-50zM1200 0h50v50h-50zM1250 0h50v50h-50zM1300 0h50v50h-50zM1350 0h50v50h-50zM1400 0h50v50h-50zM1450 0h50v50h-50zM1500 0h50v50h-50zM1550 0h50v50h-50zM1600 0h50v50h-50zM1650 0h50v50h-50zM1700 0h50v50h-50zM1750 0h50v50h-50zM1800 0h50v50h-50zM1850 0h50v50h-50zM1900 0h50v50h-50zM1950 0h50v50h-50zM0 50h50v50H0zM50 50h50v50H50zM100 50h50v50h-50zM150 50h50v50h-50zM200 50h50v50h-50zM250 50h50v50h-50zM300 50h50v50h-50zM350 50h50v50h-50zM400 50h50v50h-50zM450 50h50v50h-50zM500 50h50v50h-50zM550 50h50v50h-50zM600 50h50v50h-50zM650 50h50v50h-50zM700 50h50v50h-50zM750 50h50v50h-50zM800 50h50v50h-50zM850 50h50v50h-50zM900 50h50v50h-50zM950 50h50v50h-50zM1000 50h50v50h-50zM1050 50h50v50h-50zM1100 50h50v50h-50zM1150 50h50v50h-50zM1200 50h50v50h-50zM1250 50h50v50h-50zM1300 50h50v50h-50zM1350 50h50v50h-50zM1400 50h50v50h-50zM1450 50h50v50h-50zM1500 50h50v50h-50zM1550 50h50v50h-50zM1600 50h50v50h-50zM1650 50h50v50h-50zM1700 50h50v50h-50zM1750 50h50v50h-50zM1800 50h50v50h-50zM1850 50h50v50h-50zM1900 50h50v50h-50zM1950 50h50v50h-50zM0 100h50v50H0zM50 100h50v50H50zM100 100h50v50h-50zM150 100h50v50h-50zM200 100h50v50h-50zM250 100h50v50h-50zM300 100h50v50h-50zM350 100h50v50h-50zM400 100h50v50h-50zM450 100h50v50h-50zM500 100h50v50h-50zM550 100h50v50h-50zM600 100h50v50h-50zM650 100h50v50h-50zM700 100h50v50h-50zM750 100h50v50h-50zM800 100h50v50h-50zM850 100h50v50h-50zM900 100h50v50h-50zM950 100h50v50h-50zM1000 100h50v50h-50zM1050 100h50v50h-50zM1100 100h50v50h-50zM1150 100h50v50h-50zM1200 100h50v50h-50zM1250 100h50v50h-50zM1300 100h50v50h-50zM1350 100h50v50h-50zM1400 100h50v50h-50zM1450 100h50v50h-50zM1500 100h50v50h-50zM1550 100h50v50h-50zM1600 100h50v50h-50zM1650 100h50v50h-50zM1700 100h50v50h-50zM1750 100h50v50h-50zM1800 100h50v50h-50zM1850 100h50v50h-50zM1900 100h50v50h-50zM1950 100h50v50h-50zM0 150h50v50H0zM50 150h50v50H50zM100 150h50v50h-50zM150 150h50v50h-50zM200 150h50v50h-50zM250 150h50v50h-50zM300 150h50v50h-50zM350 150h50v50h-50zM400 150h50v50h-50zM450 150h50v50h-50zM500 150h50v50h-50zM550 150h50v50h-50zM600 150h50v50h-50zM650 150h50v50h-50zM700 150h50v50h-50zM750 150h50v50h-50zM800 150h50v50h-50zM850 150h50v50h-50zM900 150h50v50h-50zM950 150h50v50h-50zM1000 150h50v50h-50zM1050 150h50v50h-50zM1100 150h50v50h-50zM1150 150h50v50h-50zM1200 150h50v50h-50zM1250 150h50v50h-50zM1300 150h50v50h-50zM1350 150h50v50h-50zM1400 150h50v50h-50zM1450 150h50v50h-50zM1500 150h50v50h-50zM1550 150h50v50h-50zM1600 150h50v50h-50zM1650 150h50v50h-50zM1700 150h50v50h-50zM1750 150h50v50h-50zM1800 150h50v50h-50zM1850 150h50v50h-50zM1900 150h50v50h-50zM1950 150h50v50h-50zM0 200h50v50H0zM50 200h50v50H50zM100 200h50v50h-50zM150 200h50v50h-50zM200 200h50v50h-50zM250 200h50v50h-50zM300 200h50v50h-50zM350 200h50v50h-50zM400 200h50v50h-50zM450 200h50v50h-50zM500 200h50v50h-50zM550 200h50v50h-50zM600 200h50v50h-50zM650 200h50v50h-50zM700 200h50v50h-50zM750 200h50v50h-50zM800 200h50v50h-50zM850 200h50v50h-50zM900 200h50v50h-50zM950 200h50v50h-50zM1000 200h50v50h-50zM1050 200h50v50h-50zM1100 200h50v50h-50zM1150 200h50v50h-50zM1200 200h50v50h-50zM1250 200h50v50h-50zM1300 200h50v50h-50zM1350 200h50v50h-50zM1400 200h50v50h-50zM1450 200h50v50h-50zM1500 200h50v50h-50zM1550 200h50v50h-50zM1600 200h50v50h-50zM1650 200h50v50h-50zM1700 200h50v50h-50zM1750 200h50v50h-50zM1800 200h50v50h-50zM1850 200h50v50h-50zM1900 200h50v50h-50zM1950 200h50v50h-50zM0 250h50v50H0zM50 250h50v50H50zM100 250h50v50h-50zM150 250h50v50h-50zM200 250h50v50h-50zM250 250h50v50h-50zM300 250h50v50h-50zM350 250h50v50h-50zM400 250h50v50h-50zM450 250h50v50h-50zM500 250h50v50h-50zM550 250h50v50h-50zM600 250h50v50h-50zM650 250h50v50h-50zM700 250h50v50h-50zM750 250h50v50h-50zM800 250h50v50h-50zM850 250h50v50h-50zM900 250h50v50h-50zM950 250h50v50h-50zM1000 250h50v50h-50zM1050 250h50v50h-50zM1100 250h50v50h-50zM1150 250h50v50h-50zM1200 250h50v50h-50zM1250 250h50v50h-50zM1300 250h50v50h-50zM1350 250h50v50h-50zM1400 250h50v50h-50zM1450 250h50v50h-50zM1500 250h50v50h-50zM1550 250h50v50h-50zM1600 250h50v50h-50zM1650 250h50v50h-50zM1700 250h50v50h-50zM1750 250h50v50h-50zM1800 250h50v50h-50zM1850 250h50v50h-50zM1900 250h50v50h-50zM1950 250h50v50h-50zM0 300h50v50H0zM50 300h50v50H50zM100 300h50v50h-50zM150 300h50v50h-50zM200 300h50v50h-50zM250 300h50v50h-50zM300 300h50v50h-50zM350 300h50v50h-50zM400 300h50v50h-50zM450 300h50v50h-50zM500 300h50v50h-50zM550 300h50v50h-50zM600 300h50v50h-50zM650 300h50v50h-50zM700 300h50v50h-50zM750 300h50v50h-50zM800 300h50v50h-50zM850 300h50v50h-50zM900 300h50v50h-50zM950 300h50v50h-50zM1000 300h50v50h-50zM1050 300h50v50h-50zM1100 300h50v50h-50zM1150 300h50v50h-50zM1200 300h50v50h-50zM1250 300h50v50h-50zM1300 300h50v50h-50zM1350 300h50v50h-50zM1400 300h50v50h-50zM1450 300h50v50h-50zM1500 300h50v50h-50zM1550 300h50v50h-50zM1600 300h50v50h-50zM1650 300h50v50h-50zM1700 300h50v50h-50zM1750 300h50v50h-50zM1800 300h50v50h-50zM1850 300h50v50h-50zM1900 300h50v50h-50zM1950 300h50v50h-50zM0 350h50v50H0zM50 350h50v50H50zM100 350h50v50h-50zM150 350h50v50h-50zM200 350h50v50h-50zM250 350h50v50h-50zM300 350h50v50h-50zM350 350h50v50h-50zM400 350h50v50h-50zM450 350h50v50h-50zM500 350h50v50h-50zM550 350h50v50h-50zM600 350h50v50h-50zM650 350h50v50h-50zM700 350h50v50h-50zM750 350h50v50h-50zM800 350h50v50h-50zM850 350h50v50h-50zM900 350h50v50h-50zM950 350h50v50h-50zM1000 350h50v50h-50zM1050 350h50v50h-50zM1100 350h50v50h-50zM1150 350h50v50h-50zM1200 350h50v50h-50zM1250 350h50v50h-50zM1300 350h50v50h-50zM1350 350h50v50h-50zM1400 350h50v50h-50zM1450 350h50v50h-50zM1500 350h50v50h-50zM1550 350h50v50h-50zM1600 350h50v50h-50zM1650 350h50v50h-50zM1700 350h50v50h-50zM1750 350h50v50h-50zM1800 350h50v50h-50zM1850 350h50v50h-50zM1900 350h50v50h-50zM1950 350h50v50h-50zM0 400h50v50H0zM50 400h50v50H50zM100 400h50v50h-50zM150 400h50v50h-50zM200 400h50v50h-50zM250 400h50v50h-50zM300 400h50v50h-50zM350 400h50v50h-50zM400 400h50v50h-50zM450 400h50v50h-50zM500 400h50v50h-50zM550 400h50v50h-50zM600 400h50v50h-50zM650 400h50v50h-50zM700 400h50v50h-50zM750 400h50v50h-50zM800 400h50v50h-50zM850 400h50v50h-50zM900 400h50v50h-50zM950 400h50v50h-50zM1000 400h50v50h-50zM1050 400h50v50h-50zM1100 400h50v50h-50zM1150 400h50v50h-50zM1200 400h50v50h-50zM1250 400h50v50h-50zM1300 400h50v50h-50zM1350 400h50v50h-50zM1400 400h50v50h-50zM1450 400h50v50h-50zM1500 400h50v50h-50zM1550 400h50v50h-50zM1600 400h50v50h-50zM1650 400h50v50h-50zM1700 400h50v50h-50zM1750 400h50v50h-50zM1800 400h50v50h-50zM1850 400h50v50h-50zM1900 400h50v50h-50zM1950 400h50v50h-50zM0 450h50v50H0zM50 450h50v50H50zM100 450h50v50h-50zM150 450h50v50h-50zM200 450h50v50h-50zM250 450h50v50h-50zM300 450h50v50h-50zM350 450h50v50h-50zM400 450h50v50h-50zM450 450h50v50h-50zM500 450h50v50h-50zM550 450h50v50h-50zM600 450h50v50h-50zM650 450h50v50h-50zM700 450h50v50h-50zM750 450h50v50h-50zM800 450h50v50h-50zM850 450h50v50h-50zM900 450h50v50h-50zM950 450h50v50h-50zM1000 450h50v50h-50zM1050 450h50v50h-50zM1100 450h50v50h-50zM1150 450h50v50h-50zM1200 450h50v50h-50zM1250 450h50v50h-50zM1300 450h50v50h-50zM1350 450h50v50h-50zM1400 450h50v50h-50zM1450 450h50v50h-50zM1500 450h50v50h-50zM1550 450h50v50h-50zM1600 450h50v50h-50zM1650 450h50v50h-50zM1700 450h50v50h-50zM1750 450h50v50h-50zM1800 450h50v50h-50zM1850 450h50v50h-50zM1900 450h50v50h-50zM1950 450h50v50h-50zM0 500h50v50H0zM50 500h50v50H50zM100 500h50v50h-50zM150 500h50v50h-50zM200 500h50v50h-50zM250 500h50v50h-50zM300 500h50v50h-50zM350 500h50v50h-50zM400 500h50v50h-50zM450 500h50v50h-50zM500 500h50v50h-50zM550 500h50v50h-50zM600 500h50v50h-50zM650 500h50v50h-50zM700 500h50v50h-50zM750 500h50v50h-50zM800 500h50v50h-50zM850 500h50v50h-50zM900 500h50v50h-50zM950 500h50v50h-50zM1000 500h50v50h-50zM1050 500h50v50h-50zM1100 500h50v50h-50zM1150 500h50v50h-50zM1200 500h50v50h-50zM1250 500h50v50h-50zM1300 500h50v50h-50zM1350 500h50v50h-50zM1400 500h50v50h-50zM1450 500h50v50h-50zM1500 500h50v50h-50zM1550 500h50v50h-50zM1600 500h50v50h-50zM1650 500h50v50h-50zM1700 500h50v50h-50zM1750 500h50v50h-50zM1800 500h50v50h-50zM1850 500h50v50h-50zM1900 500h50v50h-50zM1950 500h50v50h-50zM0 550h50v50H0zM50 550h50v50H50zM100 550h50v50h-50zM150 550h50v50h-50zM200 550h50v50h-50zM250 550h50v50h-50zM300 550h50v50h-50zM350 550h50v50h-50zM400 550h50v50h-50zM450 550h50v50h-50zM500 550h50v50h-50zM550 550h50v50h-50zM600 550h50v50h-50zM650 550h50v50h-50zM700 550h50v50h-50zM750 550h50v50h-50zM800 550h50v50h-50zM850 550h50v50h-50zM900 550h50v50h-50zM950 550h50v50h-50zM1000 550h50v50h-50zM1050 550h50v50h-50zM1100 550h50v50h-50zM1150 550h50v50h-50zM1200 550h50v50h-50zM1250 550h50v50h-50zM1300 550h50v50h-50zM1350 550h50v50h-50zM1400 550h50v50h-50zM1450 550h50v50h-50zM1500 550h50v50h-50zM1550 550h50v50h-50zM1600 550h50v50h-50zM1650 550h50v50h-50zM1700 550h50v50h-50zM1750 550h50v50h-50zM1800 550h50v50h-50zM1850 550h50v50h-50zM1900 550h50v50h-50zM1950 550h50v50h-50zM0 600h50v50H0zM50 600h50v50H50zM100 600h50v50h-50zM150 600h50v50h-50zM200 600h50v50h-50zM250 600h50v50h-50zM300 600h50v50h-50zM350 600h50v50h-50zM400 600h50v50h-50zM450 600h50v50h-50zM500 600h50v50h-50zM550 600h50v50h-50zM600 600h50v50h-50zM650 600h50v50h-50zM700 600h50v50h-50zM750 600h50v50h-50zM800 600h50v50h-50zM850 600h50v50h-50zM900 600h50v50h-50zM950 600h50v50h-50zM1000 600h50v50h-50zM1050 600h50v50h-50zM1100 600h50v50h-50zM1150 600h50v50h-50zM1200 600h50v50h-50zM1250 600h50v50h-50zM1300 600h50v50h-50zM1350 600h50v50h-50zM1400 600h50v50h-50zM1450 600h50v50h-50zM1500 600h50v50h-50zM1550 600h50v50h-50zM1600 600h50v50h-50zM1650 600h50v50h-50zM1700 600h50v50h-50zM1750 600h50v50h-50zM1800 600h50v50h-50zM1850 600h50v50h-50zM1900 600h50v50h-50zM1950 600h50v50h-50zM0 650h50v50H0zM50 650h50v50H50zM100 650h50v50h-50zM150 650h50v50h-50zM200 650h50v50h-50zM250 650h50v50h-50zM300 650h50v50h-50zM350 650h50v50h-50zM400 650h50v50h-50zM450 650h50v50h-50zM500 650h50v50h-50zM550 650h50v50h-50zM600 650h50v50h-50zM650 650h50v50h-50zM700 650h50v50h-50zM750 650h50v50h-50zM800 650h50v50h-50zM850 650h50v50h-50zM900 650h50v50h-50zM950 650h50v50h-50zM1000 650h50v50h-50zM1050 650h50v50h-50zM1100 650h50v50h-50zM1150 650h50v50h-50zM1200 650h50v50h-50zM1250 650h50v50h-50zM1300 650h50v50h-50zM1350 650h50v50h-50zM1400 650h50v50h-50zM1450 650h50v50h-50zM1500 650h50v50h-50zM1550 650h50v50h-50zM1600 650h50v50h-50zM1650 650h50v50h-50zM1700 650h50v50h-50zM1750 650h50v50h-50zM1800 650h50v50h-50zM1850 650h50v50h-50zM1900 650h50v50h-50zM1950 650h50v50h-50zM0 700h50v50H0zM50 700h50v50H50zM100 700h50v50h-50zM150 700h50v50h-50zM200 700h50v50h-50zM250 700h50v50h-50zM300 700h50v50h-50zM350 700h50v50h-50zM400 700h50v50h-50zM450 700h50v50h-50zM500 700h50v50h-50zM550 700h50v50h-50zM600 700h50v50h-50zM650 700h50v50h-50zM700 700h50v50h-50zM750 700h50v50h-50zM800 700h50v50h-50zM850 700h50v50h-50zM900 700h50v50h-50zM950 700h50v50h-50zM1000 700h50v50h-50zM1050 700h50v50h-50zM1100 700h50v50h-50zM1150 700h50v50h-50zM1200 700h50v50h-50zM1250 700h50v50h-50zM1300 700h50v50h-50zM1350 700h50v50h-50zM1400 700h50v50h-50zM1450 700h50v50h-50zM1500 700h50v50h-50zM1550 700h50v50h-50zM1600 700h50v50h-50zM1650 700h50v50h-50zM1700 700h50v50h-50zM1750 700h50v50h-50zM1800 700h50v50h-50zM1850 700h50v50h-50zM1900 700h50v50h-50zM1950 700h50v50h-50zM0 750h50v50H0zM50 750h50v50H50zM100 750h50v50h-50zM150 750h50v50h-50zM200 750h50v50h-50zM250 750h50v50h-50zM300 750h50v50h-50zM350 750h50v50h-50zM400 750h50v50h-50zM450 750h50v50h-50zM500 750h50v50h-50zM550 750h50v50h-50zM600 750h50v50h-50zM650 750h50v50h-50zM700 750h50v50h-50zM750 750h50v50h-50zM800 750h50v50h-50zM850 750h50v50h-50zM900 750h50v50h-50zM950 750h50v50h-50zM1000 750h50v50h-50zM1050 750h50v50h-50zM1100 750h50v50h-50zM1150 750h50v50h-50zM1200 750h50v50h-50zM1250 750h50v50h-50zM1300 750h50v50h-50zM1350 750h50v50h-50zM1400 750h50v50h-50zM1450 750h50v50h-50zM1500 750h50v50h-50zM1550 750h50v50h-50zM1600 750h50v50h-50zM1650 750h50v50h-50zM1700 750h50v50h-50zM1750 750h50v50h-50zM1800 750h50v50h-50zM1850 750h50v50h-50zM1900 750h50v50h-50zM1950 750h50v50h-50zM0 800h50v50H0zM50 800h50v50H50zM100 800h50v50h-50zM150 800h50v50h-50zM200 800h50v50h-50zM250 800h50v50h-50zM300 800h50v50h-50zM350 800h50v50h-50zM400 800h50v50h-50zM450 800h50v50h-50zM500 800h50v50h-50zM550 800h50v50h-50zM600 800h50v50h-50zM650 800h50v50h-50zM700 800h50v50h-50zM750 800h50v50h-50zM800 800h50v50h-50zM850 800h50v50h-50zM900 800h50v50h-50zM950 800h50v50h-50zM1000 800h50v50h-50zM1050 800h50v50h-50zM1100 800h50v50h-50zM1150 800h50v50h-50zM1200 800h50v50h-50zM1250 800h50v50h-50zM1300 800h50v50h-50zM1350 800h50v50h-50zM1400 800h50v50h-50zM1450 800h50v50h-50zM1500 800h50v50h-50zM1550 800h50v50h-50zM1600 800h50v50h-50zM1650 800h50v50h-50zM1700 800h50v50h-50zM1750 800h50v50h-50zM1800 800h50v50h-50zM1850 800h50v50h-50zM1900 800h50v50h-50zM1950 800h50v50h-50zM0 850h50v50H0zM50 850h50v50H50zM100 850h50v50h-50zM150 850h50v50h-50zM200 850h50v50h-50zM250 850h50v50h-50zM300 850h50v50h-50zM350 850h50v50h-50zM400 850h50v50h-50zM450 850h50v50h-50zM500 850h50v50h-50zM550 850h50v50h-50zM600 850h50v50h-50zM650 850h50v50h-50zM700 850h50v50h-50zM750 850h50v50h-50zM800 850h50v50h-50zM850 850h50v50h-50zM900 850h50v50h-50zM950 850h50v50h-50zM1000 850h50v50h-50zM1050 850h50v50h-50zM1100 850h50v50h-50zM1150 850h50v50h-50zM1200 850h50v50h-50zM1250 850h50v50h-50zM1300 850h50v50h-50zM1350 850h50v50h-50zM1400 850h50v50h-50zM1450 850h50v50h-50zM1500 850h50v50h-50zM1550 850h50v50h-50zM1600 850h50v50h-50zM1650 850h50v50h-50zM1700 850h50v50h-50zM1750 850h50v50h-50zM1800 850h50v50h-50zM1850 850h50v50h-50zM1900 850h50v50h-50zM1950 850h50v50h-50zM0 900h50v50H0zM50 900h50v50H50zM100 900h50v50h-50zM150 900h50v50h-50zM200 900h50v50h-50zM250 900h50v50h-50zM300 900h50v50h-50zM350 900h50v50h-50zM400 900h50v50h-50zM450 900h50v50h-50zM500 900h50v50h-50zM550 900h50v50h-50zM600 900h50v50h-50zM650 900h50v50h-50zM700 900h50v50h-50zM750 900h50v50h-50zM800 900h50v50h-50zM850 900h50v50h-50zM900 900h50v50h-50zM950 900h50v50h-50zM1000 900h50v50h-50zM1050 900h50v50h-50zM1100 900h50v50h-50zM1150 900h50v50h-50zM1200 900h50v50h-50zM1250 900h50v50h-50zM1300 900h50v50h-50zM1350 900h50v50h-50zM1400 900h50v50h-50zM1450 900h50v50h-50zM1500 900h50v50h-50zM1550 900h50v50h-50zM1600 900h50v50h-50zM1650 900h50v50h-50zM1700 900h50v50h-50zM1750 900h50v50h-50zM1800 900h50v50h-50zM1850 900h50v50h-50zM1900 900h50v50h-50zM1950 900h50v50h-50zM0 950h50v50H0zM50 950h50v50H50zM100 950h50v50h-50zM150 950h50v50h-50zM200 950h50v50h-50zM250 950h50v50h-50zM300 950h50v50h-50zM350 950h50v50h-50zM400 950h50v50h-50zM450 950h50v50h-50zM500 950h50v50h-50zM550 950h50v50h-50zM600 950h50v50h-50zM650 950h50v50h-50zM700 950h50v50h-50zM750 950h50v50h-50zM800 950h50v50h-50zM850 950h50v50h-50zM900 950h50v50h-50zM950 950h50v50h-50zM1000 950h50v50h-50zM1050 950h50v50h-50zM1100 950h50v50h-50zM1150 950h50v50h-50zM1200 950h50v50h-50zM1250 950h50v50h-50zM1300 950h50v50h-50zM1350 950h50v50h-50zM1400 950h50v50h-50zM1450 950h50v50h-50zM1500 950h50v50h-50zM1550 950h50v50h-50zM1600 950h50v50h-50zM1650 950h50v50h-50zM1700 950h50v50h-50zM1750 950h50v50h-50zM1800 950h50v50h-50zM1850 950h50v50h-50zM1900 950h50v50h-50zM1950 950h50v50h-50z" />
					</g>
					<defs>
						<radialGradient id="a">
							<stop offset="50%" stopColor="#fff" stopOpacity="0" />
							<stop offset="1" stopColor="#fff" stopOpacity="1" />
						</radialGradient>
					</defs>
				</svg>
			</div>
			<Container className="relative">
				<div className="text-center">
					<h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
						<span className="relative whitespace-nowrap">
							<SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-muted-foreground" />
							<span className="relative">{t("swirlyDoodleTitle")}</span>
						</span>{" "}
						{t("restTitle")}
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						{t("description")}
					</p>
				</div>

				<div className=" mx-auto mt-10">
					<div className="mx-auto mt-16 flex w-full flex-col items-center justify-center gap-10 lg:-mx-8 xl:mx-0 xl:gap-x-8">
						<Tabs
							defaultValue="monthly"
							value={isAnnual ? "annual" : "monthly"}
							onValueChange={(e) => setIsAnnual(e === "annual")}
						>
							<TabsList>
								<TabsTrigger value="monthly">
									{t("billingCycle.monthly")}
								</TabsTrigger>
								<TabsTrigger value="annual">
									{t("billingCycle.annual")}
								</TabsTrigger>
							</TabsList>
						</Tabs>
						<div className="mx-auto flex max-w-4xl gap-4 max-sm:flex-wrap-reverse max-sm:justify-center sm:flex-row-reverse">
							<section
								className={clsx(
									"flex max-w-sm flex-col  rounded-3xl border-2 border-dashed border-muted px-4",
									featured
										? "order-first border bg-black py-8 lg:order-none"
										: "lg:py-8",
								)}
							>
								<div className="flex flex-row items-center gap-2">
									<p className=" text-2xl font-semibold tracking-tight text-primary ">
										{t("plan.free.title")}
									</p>
									|
									<p className=" text-base font-semibold tracking-tight text-muted-foreground">
										{t("plan.free.subTitle")}
									</p>
								</div>

								<h3 className="mt-5 text-lg font-medium text-white">
									{t("plan.free.section.title")}
								</h3>
								<p
									className={clsx(
										"text-sm",
										featured ? "text-white" : "text-slate-400",
									)}
								>
									{t("plan.free.section.description")}
								</p>

								<ul
									role="list"
									className={clsx(
										" mt-4 flex flex-col gap-y-2 text-sm",
										featured ? "text-white" : "text-slate-200",
									)}
								>
									{[
										t("plan.free.features.f1"),
										t("plan.free.features.f2"),
										t("plan.free.features.f3"),
										t("plan.free.features.f4"),
										t("plan.free.features.f5"),
									].map((feature) => (
										<li key={feature} className="flex text-muted-foreground">
											<CheckIcon />
											<span className="ml-2">{feature}</span>
										</li>
									))}
									<li className="flex text-muted-foreground">
										<XCircleIcon className="size-5 self-center text-destructive" />
										<span className="ml-3 text-destructive">
											Remote Servers Monitoring
										</span>
									</li>
								</ul>
								<div className="mt-4 flex flex-col gap-2">
									<div className="flex flex-col items-center justify-center gap-2">
										<span className="text-sm text-muted-foreground">
											{t("plan.free.features.f9")}
										</span>
										<Link
											href="https://docs.dokploy.com/docs/core/installation#docker"
											target="_blank"
											className="flex items-start text-sm text-primary"
										>
											{t("plan.free.go")}{" "}
											<ArrowRight className="ml-2 size-4 self-center" />
										</Link>
									</div>
								</div>
							</section>
							<section
								className={clsx(
									"flex max-w-sm flex-col  rounded-3xl  border-2 border-dashed px-4",
									featured
										? "order-first border bg-black py-8 lg:order-none"
										: "lg:py-8",
								)}
							>
								{isAnnual && (
									<div className="mb-4 flex flex-row items-center gap-2">
										<Badge>{t("plan.cloud.title")} 🚀</Badge>
									</div>
								)}

								{isAnnual ? (
									<div className="flex flex-row items-center gap-2">
										<p className=" text-2xl font-semibold tracking-tight text-primary ">
											$ {calculatePrice(serverQuantity, isAnnual).toFixed(2)}{" "}
											USD
										</p>
										|
										<p className=" text-base font-semibold tracking-tight text-muted-foreground">
											${" "}
											{(calculatePrice(serverQuantity, isAnnual) / 12).toFixed(
												2,
											)}{" "}
											/ Month USD
										</p>
									</div>
								) : (
									<p className=" text-2xl font-semibold tracking-tight text-primary">
										$ {calculatePrice(serverQuantity, isAnnual).toFixed(2)} USD
									</p>
								)}
								<h3 className="mt-5 text-lg font-medium text-white">
									{t("plan.cloud.section.title")}
								</h3>
								<p
									className={clsx(
										"text-sm",
										featured ? "text-white" : "text-slate-400",
									)}
								>
									{t("plan.cloud.section.description")}
								</p>

								<ul
									role="list"
									className={clsx(
										" mt-4 flex flex-col gap-y-2 text-sm",
										featured ? "text-white" : "text-slate-200",
									)}
								>
									{[
										t("plan.cloud.features.f1"),
										t("plan.cloud.features.f2"),
										t("plan.cloud.features.f3"),
										t("plan.cloud.features.f4"),
										t("plan.cloud.features.f5"),
										t("plan.cloud.features.f6"),
										t("plan.cloud.features.f7"),
									].map((feature, index) => (
										<li
											key={`${feature}-${index}`}
											className="flex text-muted-foreground"
										>
											<CheckIcon />
											<span className="ml-2">{feature}</span>
										</li>
									))}
								</ul>
								<div className="mt-4 flex flex-col gap-2">
									<div className="flex items-center justify-center gap-2">
										<span className="text-sm text-muted-foreground">
											{t("plan.cloud.servers", {
												serverQuantity,
											})}
										</span>
										<TooltipProvider>
											<Tooltip open={openVideo}>
												<TooltipTrigger onClick={() => setOpenVideo(true)}>
													<IconInfoCircle className="size-5 text-muted-foreground hover:text-primary transition-colors " />
												</TooltipTrigger>
												<TooltipContent className=" rounded-lg text-center w-[400px] z-[200] text-white font-semibold">
													<div className="text-muted-foreground hover:text-primary transition-colors flex justify-end self-end w-full mb-2">
														<X
															onClick={() => setOpenVideo(false)}
															className="text-muted-foreground hover:text-primary transition-colors flex self-end size-4 cursor-pointer"
														/>
													</div>
													<p className="text-primary mb-2 text-left">
														We Recommend to watch the video to understand the
														benefits of Dokploy Cloud
													</p>

													<HeroVideoDialog
														className="block w-full max-w-md rounded-xl z-20"
														animationStyle="top-in-bottom-out"
														videoSrc="https://www.youtube.com/embed/x2s_Y5ON-ms?si=i6gntgMmyPDLuPih"
														thumbnailSrc="https://dokploy.com/banner.png"
														thumbnailAlt="Hero Video"
													/>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>

									<div className="flex items-center space-x-2">
										<Button
											disabled={serverQuantity <= 1}
											variant="outline"
											onClick={() => {
												if (serverQuantity <= 1) return;

												setServerQuantity(serverQuantity - 1);
											}}
										>
											<MinusIcon className="h-4 w-4" />
										</Button>
										<NumberInput
											value={serverQuantity}
											onChange={(e) => {
												setServerQuantity(e.target.value as unknown as number);
											}}
										/>

										<Button
											variant="outline"
											onClick={() => {
												setServerQuantity(serverQuantity + 1);
											}}
										>
											<PlusIcon className="h-4 w-4" />
										</Button>
									</div>
									<div
										className={cn(
											"justify-between",
											"mt-4 flex  flex-row items-center gap-2",
										)}
									>
										<div className="w-full justify-end">
											<Link
												href="https://app.dokploy.com/register"
												target="_blank"
												className={buttonVariants({
													className: "w-full",
												})}
											>
												{t("plan.cloud.go")}
											</Link>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
