import type { Metadata } from "next";
import { Albert_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    "https://awoele.github.io/yxy-loopit-cases/",
);
const socialImageUrl = new URL("og.png", siteUrl).toString();
const title = "AI 创意互动实验｜Loopit Cases";
const description =
  "三个可直接试玩的 Loopit 创意互动 Case：策略、滑动选择与音乐卡点。";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "AI 创意互动实验：三个并排的可玩 Case 窗口",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${albertSans.variable} ${spaceMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
