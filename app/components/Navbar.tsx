"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MainNavbar from "./MainNavbar";
import LinkNavbar from "./LinkNavbar";

const Navbar = () => {
  const path = usePathname();
  const [isShow, setIsShow] = useState<boolean>(true);
  useEffect(() => {
    if (path != "/checkout" && path!="/cart") {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [path]);
  return (
    <>
      {isShow && (
        <>
          <MainNavbar />
          <LinkNavbar />
        </>
      )}
    </>
  );
};

export default Navbar;
