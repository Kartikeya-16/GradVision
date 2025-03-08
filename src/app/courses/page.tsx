// import Nav from './navbar'
import Banner from './banner';
import Hero from './hero';
import Why from './whymba,pgdm';
import Hero2 from './hero2';
import Ph from './ph';
import Table from './table';
import AdmissionDetails from './addmission details';
import FAQSection from './faq';



export default function Home() {
  return (
    <div>
        {/* <Nav /> */}
        <Banner />
        <Hero/>
        <Why/>  
        <Hero2/>
        <Ph/>
        <Table/>
        <AdmissionDetails/>
        <FAQSection/>
      
    </div>
  );
}
