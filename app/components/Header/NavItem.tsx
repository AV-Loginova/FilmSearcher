import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  Icon: any;
  address: string;
}

function NavItem({ address, title, Icon }: Props) {
  return (
    <Link href={address}>
      <p className="uppercase hover:text-[#ff79c6] transition-all duration-600 bold sm:inline hidden ">
        {title}
      </p>
      <Icon className="inline sm:hidden" size={30} />
    </Link>
  );
}

export default NavItem;
