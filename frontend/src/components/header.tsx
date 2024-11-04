import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export function Header() {
  return (
    <header className="flex w-full justify-around bg-zinc-300 items-center">
      <Link to="/">
        <img src={Logo} alt="Logo da página" className="size-16" />
      </Link>
      <nav className="flex items-center gap-3">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}
