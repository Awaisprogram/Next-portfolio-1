import About from "./about/page";
import Intro from "./home/page";
import Services from "./services/page";
import Line from './components/Line';


export default function Home() {
  return (
   <>
   <Intro/>
   <About/>
   <Services/>
   <Line />
   </>
  );
}