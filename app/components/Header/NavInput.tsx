"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function NavInput() {
  const [input, setInput] = useState<string>("");
  const route = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("Нажата энтер", input);
      setInput("");
      route.push(`/${input}`);
    }
  };
  return (
    <input
      value={input}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      type="text"
      placeholder="Search"
      className="input input-bordered w-[250px] md:w-auto"
    />
  );
}

export default NavInput;
