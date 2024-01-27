import Navbar from "./navbar";
import Name from "./name";

export default function Header() {
    return (
        <div className="header-container">
            <Name />
            <Navbar />
        </div>
    )
}