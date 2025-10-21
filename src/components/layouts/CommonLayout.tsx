import type { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 bg-background z-50">
        <Navbar />
      </div>
      <div className="grow-1 mt-5 container mx-auto">{children}</div>
      <Footer />
    </div>
  );
}
