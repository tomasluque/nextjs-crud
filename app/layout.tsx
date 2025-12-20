import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head></head>
            <body>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/notes">Notes</Link>
                </nav>
                {children}
            </body>
        </html>
    );
}
