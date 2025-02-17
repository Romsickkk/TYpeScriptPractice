import { type ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}
function Header({ image, children }: HeaderProps): JSX.Element {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}

export default Header;
