import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Changelog Stakeholder Notifier — Auto-notify teams of relevant updates",
  description: "Parses changelogs and automatically notifies relevant stakeholders based on keywords and impact areas. Built for product and engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ec46b3d8-0f34-4522-8925-fb2ccff38f69"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
