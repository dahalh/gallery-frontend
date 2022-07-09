import React from "react";
import { UserSidebar } from "../../components/user-sidebar/UserSidebar";
import { Footer } from "./Footer";
import { Header } from "./Header";

const UserLayout = ({ children }) => {
  return (
    <div>
      <div>
        {/* header */}
        <Header />

        <UserSidebar />
        {/* main */}
        <main className="main">{children}</main>

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
