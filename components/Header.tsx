import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex-items-start">
      <div className="flex flex-row items-center">
        {/* Social Icon */}
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
        Get in Touch
      </p>
    </header>
  );
};

export default Header;
