import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* header section */}
      <Header />

      {/* main content */}
      <main className="main">{children}</main>

      {/* footer section */}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
