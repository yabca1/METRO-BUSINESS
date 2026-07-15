import type { Metadata } from "next";
import { Urbanist, Orbitron, Protest_Strike, Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/features/_core/providers/QueryProvider";

const urbanistLight = Urbanist({
  variable: "--font-urbanist-light",
  subsets: ["latin"],
  weight: "300",
});

const urbanistRegular = Urbanist({
  variable: "--font-urbanist-regular",
  subsets: ["latin"],
  weight: "400",
});

const urbanistMedium = Urbanist({
  variable: "--font-urbanist-medium",
  subsets: ["latin"],
  weight: "500",
});

const urbanistSemiBold = Urbanist({
  variable: "--font-urbanist-semibold",
  subsets: ["latin"],
  weight: "600",
});

const urbanistBold = Urbanist({
  variable: "--font-urbanist-bold",
  subsets: ["latin"],
  weight: "700",
});

const urbanistExtraBold = Urbanist({
  variable: "--font-urbanist-extrabold",
  subsets: ["latin"],
  weight: "800",
});

const urbanistBlack = Urbanist({
  variable: "--font-urbanist-black",
  subsets: ["latin"],
  weight: "900",
});

const orbitronRegular = Orbitron({
  variable: "--font-orbitron-regular",
  subsets: ["latin"],
  weight: "400",
});

const orbitronBold = Orbitron({
  variable: "--font-orbitron-bold",
  subsets: ["latin"],
  weight: "700",
});

const protestStrike = Protest_Strike({
  variable: "--font-protest-strike",
  subsets: ["latin"],
  weight: "400",
});

const poppinsRegular = Poppins({
  variable: "--font-poppins-regular",
  subsets: ["latin"],
  weight: "400",
});

const poppinsMedium = Poppins({
  variable: "--font-poppins-medium",
  subsets: ["latin"],
  weight: "500",
});

const poppinsSemiBold = Poppins({
  variable: "--font-poppins-semibold",
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "Metro Business",
  description: "Advanced Corporate Financial Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontClasses = [
    urbanistLight.variable,
    urbanistRegular.variable,
    urbanistMedium.variable,
    urbanistSemiBold.variable,
    urbanistBold.variable,
    urbanistExtraBold.variable,
    urbanistBlack.variable,
    orbitronRegular.variable,
    orbitronBold.variable,
    protestStrike.variable,
    poppinsRegular.variable,
    poppinsMedium.variable,
    poppinsSemiBold.variable
  ].join(" ");

  return (
    <html lang="en" className={`${fontClasses} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
