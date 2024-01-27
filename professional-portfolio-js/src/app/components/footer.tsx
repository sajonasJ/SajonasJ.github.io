import Link from "next/link"
export default function Footer() {
    return (
        <div className="footer-container"><h3>
            Find me here |
            <Link href="/"> LinkedIn</Link> |
            <Link href="/"> Github</Link> |
            <Link href="/"> Github Repo</Link> |
            <Link href="/"> @Jonas Sajonas 2024</Link></h3>
        </div>
    )
}