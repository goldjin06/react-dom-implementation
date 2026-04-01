// Router.tsx
import { useMemo, type MouseEvent } from 'react';


interface LinkProps {
    to: string
    children: string
}

const getCurrentPath = ():string => window.location.pathname

const navigateTo = (to:string) => {
    window.history.pushState({},'ㅋㅋ',to)
}

export const Link = ({ to, children }: LinkProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (getCurrentPath() === to) return;
    navigateTo(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

