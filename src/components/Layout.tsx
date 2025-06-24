import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="container flex w-full justify-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
