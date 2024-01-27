import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navlink" href="/">Home</Link>
      <Link className="navlink" href="/js-dev">Developer</Link>
      <Link className="navlink" href="/js-nursing">Nursing</Link>
      <div className="nav-split"><Link className="navlink" href="/js-contact">Contact</Link></div>
    </nav>
  )
}