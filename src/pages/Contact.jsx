import { Link } from "react-router-dom";
import { assets } from "../assets/asset";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

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
        <Title text1={"CONTACT"} text2={"US"} />
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
          <p className="text-gray-500">Explore our social media page</p>

          <div className="flex gap-6">
            <Link
              to="https://www.instagram.com/_kmb_styles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M11 3.5h1M4.5.5h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-6a4 4 0 0 1 4-4Zm3 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"
                />
              </svg>
            </Link>

            <Link target="_blank" rel="noopener noreferrer" to="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g>
                    <path
                      fill="currentColor"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    />
                  </g>
                  <defs>
                    <clipPath id="primeTwitter0">
                      <path fill="#fff" d="M0 0h14v14H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
            </Link>

           <Link to='' target="_blank" rel="noopener noreferrer">
           <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 256 290"
            >
              <path
                fill="#ff004f"
                d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 
0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848
 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 
 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3
  40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"
              />
              <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" />
              <path
                fill="#00f2ea"
                d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"
              />
            </svg>
           </Link>
           
          </div>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;
