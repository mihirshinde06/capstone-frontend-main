import CarouselHero from "./Carousel/CarouselHero";
import Brands from "./Brands/Brands";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import Newsletter from "./Newsletter/Newsletter";
import TopCategories from "./TopCategories/TopCategories";
import TrendingProduct from "./TrendingProduct/TrendingProduct";
import WhatComfyDecorOffers from "./WhatComfyDecorOffers/WhatComfyDecorOffers";

const Home = () => {
  return (
    <>
      <CarouselHero />
      <FeaturedProducts />
      <WhatComfyDecorOffers />
      <TrendingProduct />
      <TopCategories />
      <Newsletter />
      <Brands />
    </>
  );
};

export default Home;
