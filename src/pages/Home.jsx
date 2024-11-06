
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import NewsLetterBox from '../components/NewsLetterBox';
import OurPolicies from '../components/OurPolicies';
import BestSeller from '../components/BestSeller'


const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
     <BestSeller /> 
      <OurPolicies />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
