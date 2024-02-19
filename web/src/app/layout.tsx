import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TaskProvider } from "./context/tasksContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To do list - be organized",
  description:
    "Inspire productivity with our to-do list app – Be Organized, Transforming Your Tasks into Achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TaskProvider>{children}</TaskProvider>
      </body>
    </html>
  );
}
