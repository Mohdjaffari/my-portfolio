import './App.css';
import Blogs from './PotfoCompFirst/Blogs';
import Experience from './PotfoCompFirst/Experience';
import Navbar from './PotfoCompFirst/Navbar';
import Projects from './PotfoCompFirst/Projects';
import Service from './PotfoCompFirst/Service';
import SliderPort from './PotfoCompFirst/SliderPort';
import SpecialSkill from './PotfoCompFirst/SpecialSkill';
import Testimonial from './PotfoCompFirst/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SliderPort/>
      <Service/>
      <SpecialSkill/>
      <Experience/>
      <Projects/>
      <Testimonial/>
      <Blogs/>
    </div>
  );
}

export default App;
