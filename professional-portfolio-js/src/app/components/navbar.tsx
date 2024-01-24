import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
        <h1><Link href="/">About Jonas</Link></h1>
        <Link href="/js-dev">Developer</Link>
        <Link href="/js-nursing">Nursing</Link>
        <Link href="/js-info">Info</Link>
      </nav>
    )
}