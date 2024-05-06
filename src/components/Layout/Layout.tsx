import Header from "./Header";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
