// Components
import Navbar from "./components/navbar";
import Name from "./components/name";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div className="header-container">
        <Name />
        <Navbar />
        <h1>Home Page</h1>
        <div>Jonas Image</div>
        <div>Intro</div>
        <div>Career Objective</div>
        <div>Recent Projects</div>
        <div>Current Projects</div>
      </div>
      <Footer />
    </main>
  );
}
//This project is done by jSjonas for personal use.