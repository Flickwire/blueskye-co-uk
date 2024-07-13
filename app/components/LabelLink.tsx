import { ReactNode } from "react";

export default function LabelLink({href, title, children}: {href: string, title: string, children: ReactNode}) {
  return <a href={href} title={title} target="_blank" rel="noreferrer" 
    className="
    bg-neutral-200
    px-1
    py-0
    inline-block
    leading-6
    hover:relative
    hover:top-[-0.075rem]
    hover:left-[-0.075rem]
    hover:shadow-neutral-500
    hover:shadow-[0.15rem_0.15rem_0_0]
    " 
  >
    {children}
  </a>;
}