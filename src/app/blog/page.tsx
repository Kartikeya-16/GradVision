import Hero from './hero';
import Banner from '../homepage/banner';
import Catchup from './catchup';
import FeaturedBlogs from './fb';
import Allbogs from './allblog';
import Signup from './signup';




export default function Home() {
  return (
    <div>
        <Banner />
        <Hero />
        <Catchup/>
        <FeaturedBlogs/>
        <Allbogs/>
        <Signup/>
        
      
    </div>
  );
}
