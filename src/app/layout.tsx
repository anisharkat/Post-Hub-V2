import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/ThemeProvider/ThemeProvider";


export const metadata: Metadata = {
  title: "Post Hub",
  description: "Share what you're into with the people who get you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" type="png"/>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
