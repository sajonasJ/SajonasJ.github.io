import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navlink" href="/"><h2>Home</h2></Link>
      <Link className="navlink" href="/js-dev"><h2>Developer</h2></Link>
      <Link className="navlink" href="/js-nur"><h2>Nursing</h2></Link>
      <div className="nav-split"><Link className="navlink" href="/js-con"><h2>Contact</h2></Link></div>
    </nav>
  )
}