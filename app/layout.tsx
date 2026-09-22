import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rhayvene Oliveira — Arquitetura & Interiores",
  description: "Arquitetura e interiores pensados para a forma como você vive. Conheça o trabalho de Rhayvene Oliveira.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
