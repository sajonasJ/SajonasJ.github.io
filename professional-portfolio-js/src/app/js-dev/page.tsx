import Exp from "../components/exp";
import Edu from "../components/edu";
import Certificate from "../components/certificate";
import Commend from "../components/commend";
import Course from "../components/course";
import Awards from "../components/awards";

export default function Page() {
  return <div className="dev-page">Developer Page
    <Exp />
    <Edu />
    <Course />
    <Certificate />
    <Awards />
    <Commend />
  </div>;
}