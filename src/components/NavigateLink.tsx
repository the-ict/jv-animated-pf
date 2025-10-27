import React from "react";

interface Props {
  title: string;
  url: string;
  children: React.ReactNode;
}

export default function NavigateLink({ title, url, children }: Props) {
  return (
    <div
      onClick={() => {
        console.log(url, "url");
        console.log(title, "title");
        window.location.href = url;
      }}
    >
      {children}
    </div>
  );
}
