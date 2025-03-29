// import { ScrollArea } from "@/components/ui/scroll-area";

// Datos de ejemplo del changelog
const changelogEntries = [
	{
		date: "2023-11-01",
		title: "Versión 2.1.0",
		changes: [
			"Añadido soporte para modo oscuro en todas las páginas",
			"Mejorado el rendimiento para grandes conjuntos de datos",
			"Corregido error en el flujo de autenticación de usuarios",
		],
		image:
			"https://g-ndmbkfuhw2w.vusercontent.net/placeholder.svg?height=200&width=400",
	},
	{
		date: "2023-10-15",
		title: "Versión 2.0.1",
		changes: [
			"Corrección urgente para vulnerabilidad crítica de seguridad",
			"Actualizadas las dependencias a las últimas versiones",
		],
		image:
			"https://g-ndmbkfuhw2w.vusercontent.net/placeholder.svg?height=200&width=400",
	},
	{
		date: "2023-10-01",
		title: "Versión 2.0.0",
		changes: [
			"Rediseño completo de la UI para mejorar la experiencia de usuario",
			"Introducidas nuevas características en el panel de control",
			"Añadido soporte para temas personalizados",
			"Mejorada la accesibilidad en toda la aplicación",
		],
		image:
			"https://g-ndmbkfuhw2w.vusercontent.net/placeholder.svg?height=200&width=400",
	},
	{
		date: "2023-09-15",
		title: "Versión 1.9.5",
		changes: [
			"Optimización de rendimiento en la carga inicial",
			"Nuevas opciones de personalización para usuarios premium",
		],
		image:
			"https://g-ndmbkfuhw2w.vusercontent.net/placeholder.svg?height=200&width=400",
	},
	{
		date: "2023-08-01",
		title: "Versión 1.9.0",
		changes: [
			"Lanzamiento de la API pública para desarrolladores",
			"Mejoras en la sincronización de datos entre dispositivos",
		],
		image:
			"https://g-ndmbkfuhw2w.vusercontent.net/placeholder.svg?height=200&width=400",
	},
];

const Comp = () => {
	return (
		<div className="border-t border-border/30 bg-black py-20 sm:py-32">
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
			<div className="relative  max-w-5xl w-full mx-auto">
				<h1 className="text-3xl font-bold mb-8">Changelog</h1>
				<div className="space-y-12">
					{changelogEntries.map((entry, index) => (
						<div
							key={index}
							id={entry.date}
							className="flex flex-col md:flex-row gap-6 border-t border-gray-800 pt-8 first:border-t-0 first:pt-0"
						>
							<div className="md:w-1/4 flex flex-col items-start">
								<span className="text-lg font-semibold text-gray-400">
									{entry.date}
								</span>
								<h2 className="text-2xl font-bold mt-2">{entry.title}</h2>
							</div>
							<div className="md:w-3/4 space-y-4">
								<div>
									<img
										src={entry.image}
										alt={`Imagen para ${entry.title}`}
										className="w-full h-48 object-cover rounded-lg"
									/>
								</div>

								<ul className="list-disc list-inside space-y-2">
									{entry.changes.map((change, changeIndex) => (
										<li key={changeIndex} className="text-gray-300">
											{change}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default function Changelog() {
	return (
		<div className="border-t border-border/30 bg-black py-20 sm:py-32">
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
			<div className="relative  max-w-5xl w-full mx-auto">
				<h1 className="text-3xl font-bold mb-8">Changelog</h1>
				<div className="space-y-12">
					{changelogEntries.map((entry, index) => (
						<div
							key={index}
							id={entry.date}
							className="flex flex-col md:flex-row gap-6 border-t border-gray-800 pt-8 first:border-t-0 first:pt-0"
						>
							<div className="md:w-1/4 flex flex-col items-start">
								<span className="text-lg font-semibold text-gray-400">
									{entry.date}
								</span>
								<h2 className="text-2xl font-bold mt-2">{entry.title}</h2>
							</div>
							<div className="md:w-3/4 space-y-4">
								<div>
									<img
										src={entry.image}
										alt={`Imagen para ${entry.title}`}
										className="w-full h-48 object-cover rounded-lg"
									/>
								</div>

								<ul className="list-disc list-inside space-y-2">
									{entry.changes.map((change, changeIndex) => (
										<li key={changeIndex} className="text-gray-300">
											{change}
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
