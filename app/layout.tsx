import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Arland Lda",
	description: "Site oficial da Arlanda Lda ",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-PT">
			<body>{children}</body>
		</html>
	);
}
