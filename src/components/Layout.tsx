import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./UI/Socials";
import NewsBar from "./UI/NewsBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NewsBar />
      <div className="container flex flex-col justify-center">
        <Header />
        <div className="mb-5 mt-36">{children}</div>
        <Footer />
        <Socials />
      </div>
    </>
  );
}
