import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const defaultUrl = process.env.VERCEL_URL!
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata: Metadata = {
	metadataBase: new URL(defaultUrl),
	title: "beerd",
	description: "An independent app for beer lovers.",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} antialiased`}>
				<Header />
				<main className='mx-auto max-w-screen-lg px-4 md:px-6'>{children}</main>
				<script src='https://accounts.google.com/gsi/client' async></script>
			</body>
		</html>
	);
}
