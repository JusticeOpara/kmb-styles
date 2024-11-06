import { assets } from "../assets/asset";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

       
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are a men&apos;s fashion brand committed to crafting timeless pieces
            that blend contemporary style with classic elegance. Our brand is
            built on the principles of quality craftsmanship, attention to
            detail, and sophistication.
          </p>
          <p>
            With over 5 years of experience in the fashion industry, we have
            continuously refined our skills and vision to create garments that
            resonate with the modern man.
          </p>
          <div>
          <b className="text-gray-800">Collection Name</b>
          <p>
            The collection, <b>KMB Styles</b>, reflects a fusion of stylish
            aesthetics with luxurious elements. Drawing inspiration from the
            dynamic energy of metropolitan life, this collection translates that
            inspiration into sleek designs exuding confidence and refinement.
          </p>
          </div>
          

          <div>
          <b className="text-gray-800">Inspiration for Wears</b>
          <p>
            Inspired by the modern urban landscape, our designs blend sleek
            cityscapes with elements of luxury and sophistication. We aim to
            create garments that empower individuals to express their unique
            style while navigating the bustling streets of the city.
          </p>
          </div>
         

          <div>
            <b className="text-gray-800">Material Sourcing</b>
            <p>
              We prioritize high-quality materials sourced from reputable
              suppliers who share our commitment to sustainability and ethical
              practices. Our materials undergo rigorous quality checks to ensure
              every garment meets our standards of excellence.
            </p>
          </div>

          <div>
            <b className="text-gray-800">Future Plans</b>
            <p>
              Looking ahead, we aspire to expand our global brand presence,
              reaching fashion-forward individuals who appreciate the
              intersection of style, quality, and sophistication. We are
              committed to integrating sustainable practices into our production
              processes and exploring innovative design concepts and
              collaborations to continually elevate our brand.
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in offering only the highest quality products that
            meet our stringent standards for durability, performance, and value.{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Our user-friendly website and mobile app make it easy to browse,
            compare, and purchase products on the go.{" "}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Services</b>
          <p className="text-gray-600">
            Our dedicated team of customer service representatives is available
            around the clock to assist you with any queries or concerns you may
            have.{" "}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
