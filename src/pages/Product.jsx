import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ContextShop";
import { assets } from "../assets/asset";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductsData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductsData(product);
        setImage(product.image[0]);

        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productId, products]);

  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* ---------------------- Producsts Data ----------------------*/}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------------------- products images ---------------------- */}

        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          {/* ---------------------- List images ----------------------*/}
          <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="product"
                onClick={() => setImage(item)}
                className="cursor-pointer w-[24%]  sm:w-full sm:mb-3 flex-shrink-0  object-cover"
              />
            ))}
          </div>

          {/*---------------------- main img---------------------- */}
          <div className="w-full sm:w-[80%]">
            <img
              src={image}
              alt="product"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* ---------------------- products details ---------------------- */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />

            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productsData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`w-8 h-8 border bg-gray-100 flex items-center justify-center cursor-pointer
                  ${item === size ? "border-orange-500" : ""}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productsData._id, size)}
            className="bg-black text-white py-3 px-8 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="flex flex-col gap-1 mt-5 text-sm text-gray-500">
            <p>100% Original product </p>
            <p>Free delivery on order above £210</p>
            <p> Easy return and exchange policy within 7 days </p>
          </div>
        </div>
      </div>

      {/* ---------------------- Products Description and review section ----------------------*/}

      <div className="mt-10">
        {/* Tab Headers */}
        <div className="flex">
          <button
            className={`px-5 py-3 text-sm border ${
              activeTab === "description" ? "bg-gray-100 font-bold" : ""
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-5 py-3 text-sm border ${
              activeTab === "reviews" ? "bg-gray-100 font-bold" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (2)
          </button>
        </div>

        {/* Description Content */}
        {activeTab === "description" && (
          <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
            <p>
              KMB-commerce is an online platform dedicated to men&apos;s
              fashion, enabling seamless buying and selling of stylish garments.
              Our brand focuses on crafting timeless pieces that blend
              contemporary style with classic elegance, drawing on over five
              years of industry experience.
            </p>
            <p>
              Our collection, KMB Styles, combines sleek aesthetics with
              luxurious elements, inspired by the vibrant energy of urban life.
              Each product features detailed descriptions, images, and
              variations to enhance the shopping experience.
            </p>
            <p>
              We prioritize high-quality materials from ethical suppliers,
              ensuring every garment meets our rigorous standards. As we look to
              expand our global presence, we remain committed to sustainability
              and innovative design, catering to fashion-forward individuals who
              value style and quality.
            </p>
          </div>
        )}

        {/* Reviews Content */}
        {activeTab === "reviews" && (
          <div className="border px-6 py-6 text-sm text-gray-500">
            <div className="flex flex-col gap-4">
              <div className="border-b pb-4">
                <h3 className="font-bold mb-2">Customer Review (1)</h3>
                <p className="mb-2">
                  I love the KMB Styles collection! I bought a couple of shirts,
                  and they are not only stylish but also incredibly comfortable.
                  The attention to detail is evident, and I appreciate their
                  commitment to sustainability in sourcing materials. Shopping
                  on their website was easy, and I will definitely be back for
                  more!
                </p>
                <div className="flex space-x-2 items-center">
                  <img
                    src={assets.profile_pic}
                    className="w-8 h-8 rounded-full"
                    alt="customer"
                  />
                  <span className="font-sans text-black font-semibold">
                  Chinonso Felix
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Customer Review (2)</h3>
                <p className="mb-2">
                  I recently purchased a Vintage Shirt from KMB Styles, and I
                  couldn&apos;t be happier! The quality of the material is
                  outstanding, and the fit is perfect. It feels both modern and
                  classic, making it versatile for different occasions. The
                  online shopping experience was smooth, and my order arrived
                  promptly. Highly recommend for anyone looking to elevate their
                  wardrobe!
                </p>

                <div className="flex space-x-2 items-center">
                  <img
                    src={assets.customer_ref}
                    className="w-8 h-8 rounded-full"
                    alt="customer"
                  />
                  <span className="font-sans text-black font-semibold">
                    Justino Onyebuchi
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ----------------------  Display Products  Products ----------------------*/}

      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
