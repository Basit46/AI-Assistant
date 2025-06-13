import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import MainContent from "./components/MainContent";

const ambit = localFont({
  src: [
    {
      path: "./fonts/Ambit Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Ambit SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Ambit Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "BotBuzz",
  description: "BotBuzz",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ambit.className} antialiased w-screen h-screen bg-background-dashboard text-main-white`}
      >
        <MainContent children={children} />
      </body>
    </html>
  );
}
