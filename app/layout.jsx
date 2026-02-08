import "./globals.css";
import Header from "./Components/Header";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className="font-serif box-border">{children}</body>
    </html>
  );
}
