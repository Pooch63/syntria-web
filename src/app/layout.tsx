import Nav from "./nav";
import Footer from "./footer";
import "./globals.css";
import Chatbot from "@/components/chatbot";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-light-bg text-dark-bg font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />

        <Chatbot />
      </body>
    </html>
  );
}
