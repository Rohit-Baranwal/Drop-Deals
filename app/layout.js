import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Deal-Drop",
  description: "Track product prices across e-commerce sites and get alerts on price drops",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
