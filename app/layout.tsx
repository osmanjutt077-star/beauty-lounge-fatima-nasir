import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "Beauty Lounge by Fatima Nasir | Multan",
 description: "Discover Beauty Lounge by Fatima Nasir in Gulgasht Colony, Multan. Enquire about hair and beauty appointments by WhatsApp or phone.",
 openGraph: { title: "Beauty Lounge by Fatima Nasir", description: "A little time for yourself. Hair and beauty in Multan.", type: "website" }
};
export default function Layout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
