import { Link } from 'react-router-dom';
import { assets } from '../assets/asset';
import NewsLetterBox from '../components/NewsLetterBox';
import Title from '../components/Title';

const Contact = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth',
  //   });
  // };
  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">Our Store</p>
          <p className="text-gray-500">
            NO.46
            <br />
        ONUMUONU/AJOKU STREET OWERRI, OWERRI MUNICPAL,IMO.
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+234 8037643747</span>
          </p>
          <p className=" text-gray-800">
            Email: <span className="text-gray-500">admin@kmb.com</span>
          </p>
          <p className="text-gray-500">
            Explore our social media page
          </p>
       
          <Link to="https://www.instagram.com/_kmb_styles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw" target='_blank' rel='noopener noreferrer'>   
        
         
         <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 15 15">
         <path fill="none" stroke="currentColor" d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/></svg>
     
          </Link>
      
         
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
