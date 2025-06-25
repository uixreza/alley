import { type ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Socials from "./UI/Socials";
import NewsBar from "./UI/NewsBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <NewsBar />
      <Header />
      <div className="container w-fullflex flex-col items-center ">
        <div className=" mb-5 mt-36">{children}</div>
        <Footer />
        <Socials />
      </div>
    </div>
  );
}
