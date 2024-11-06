import { assets } from "../assets/asset";
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] md:gap-14 my-10 mt-40 text-sm ">
        <div className="">
        <div className="flex items-center ">
        <Link to="/">
        <img src={assets.logo} alt="logo" className="mb-5 w-16 " />
        <p className="text-center text-xl font-bold">KMb Styles</p>
        </Link>
       
        
        </div>
         
          <p className="w-full sm:w-2/3 text-gray-600">
            Shop with   KMB and experience the convenience of online shopping
            like never before.
            
          </p>
          
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">COMPANY</p>

          <ul className="flex flex-col flex-1 text-gray-600 cursor-pointer">
            <li onClick={scrollToTop} className="mb-2">
          
              <Link to="/">Home</Link>
            </li>
          
            <li onClick={scrollToTop} className="mb-2">
            <Link to="/about">About Us</Link>
            </li>
   
            
   
            <li onClick={scrollToTop} className="mb-2">
            <Link to="/collection">Best Collections</Link>
            </li>
 
            
            <li onClick={scrollToTop} className="mb-2">
              Privacy policy
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col flex-1 text-gray-600">
            <li className="mb-2">+2348037643747</li>
            <li className="mb-2">contact@forevryou.com </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ KMB.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
