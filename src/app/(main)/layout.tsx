import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar";
import React from "react";
type props = { children: React.ReactNode };

const Layout = (props: props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
