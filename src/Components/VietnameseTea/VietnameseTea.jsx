import React from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";
import BookForm from "../BookForm/BookForm";
import Footer from "../Footer/Footer";

function VietnameseTea() {
  return (
    <>
      <Navbar />
      <ProductCard
        cardImg="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/08/output-onlinepngtools-1.png"
        titleHead="VIETNAMESE TEA CEREMONY (ĐÁM HỎI)"
        detailBody="A Vietnamese tea ceremony, commonly known as ‘Đám Hỏi’, is a profound blend of tradition and symbolism, celebrating not only the union of two souls but also the coming together of two families."
        detailBody2="*Effective July 1st, prices for select tea ceremony items will increase. Event orders placed before July 1st will be honored at the current prices."
        ProductCardBtn="VIEW VIETNAMESE TEA CEREMONY MENU"
      />
      <BookForm />
      <Footer />
    </>
  );
}

export default VietnameseTea;
