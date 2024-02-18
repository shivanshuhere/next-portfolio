import "./globals.css";
import Navbar from "@/components/Navbar";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-black">
                <div className="w-full flex  justify-center sticky top-10 z-50">
                    <Navbar />
                </div>
                {children}
            </body>
        </html>
    );
}
