import React from "react";
import Nav from "./Nav";

// icon library: https://react-icons.github.io/react-icons/search?q=cart
// import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState();
  return (
    <header className="flex justify-between items-center py-8 px-6 shadow-md">
      <a href="" className="flex items-center gap-4">
        <div className="logo text-4xl">projet</div>
      </a>

      <Nav isOpen={isOpen} />

      <div className="flex gap-6">
        <a href="">
          <AiOutlineSearch className="h-8 w-8" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="h-8 w-8" />
        </a>
      </div>
    </header>
  );
}
