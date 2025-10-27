import type React from "react";

interface Props {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement | null>;
  logoRef: React.RefObject<HTMLHeadingElement | null>;
}

export default function AboutNavigationLink({
  children,
  containerRef,
  logoRef,
}: Props) {
  const handleClick = () => {
    console.log("bosildi")
    logoRef.current?.classList.add("about-navigation-link");
  };

  return (
    <div
      onClick={handleClick}
      className="text-sm cursor-pointer text-gray-200 hover:text-blue-50 transition-colors"
    >
      {children}
    </div>
  );
}
