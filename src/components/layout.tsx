import { ReactNode } from "react";
import NavBar from "./navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout">
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
