import React from 'react'

interface Props {
  children: React.ReactNode;
  url: string;
}

export default function ProjectNavigationLink({ children, url }: Props) {
  return (
    <div onClick={() => (window.location.href = url)}>{children}</div>
  )
}
