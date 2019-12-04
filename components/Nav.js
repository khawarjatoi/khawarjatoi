import Link from "next/link";
import StyledNav from "./styles/Sidebar/StyledNav";

const Nav = () => (
  <StyledNav>
    <div className="image-outer">
      <Link href="/">
        <img className="round-image" src="pp.jpg" height="100%" />
      </Link>
    </div>
    <Link href="/about">
      <a>About</a>
    </Link>
    <a href="https://registry.jsonresume.org/khawarjatoi" target="_blank">
      Resume
    </a>
    <Link href="/blog">
      <a>Blog</a>
    </Link>
  </StyledNav>
);

export default Nav;
