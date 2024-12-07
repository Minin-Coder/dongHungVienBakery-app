import React from "react";
import Navbar from "./../Navbar/Navbar";
import ProductCard from "./../ProductCard/ProductCard";
import Footer from "./../Footer/Footer";

function VeganProtien() {
  return (
    <>
      <Navbar />
      <ProductCard
        cardImg="https://cdn-ilaepaf.nitrocdn.com/pwFbLXPxMbrAwTCOpRzGGBkzFyfJNkyX/assets/images/optimized/rev-247fb8b/bunny-wp-pullzone-rdi2iqivr6.b-cdn.net/wp-content/uploads/2024/07/DHV-Landing-Page-Thumbnail-Vegan-Protein-To-Go-Box-800-x-800-px.png"
        titleHead=" VEGAN PROTEIN TO-GO"
        detailHead="Customize your meals at home with our vegan ingredients."
        detailBody="Your favorite vegan proteins are now available in convenient To-Go boxes for purchase, allowing you to create any meal you desire in the comfort of your home. Fully prepared & ready to be added to your favorite recipes. Options include:"
        detailSubHead1="Vegan Grilled Pork or Chicken:"
        listData1="8oz – $12"
        listData2="1lb – $24"
        detailSubHead2="Vegan Lemongrass Beef:"
        listData3="8oz – $15"
        listData4="1lb – $30"
        detailSubHead3="Vegan Meatloaf (Roll):"
        listData5="1lb – $12"
        listData6="2lb – $23"
        detailSubHead4="Vegan Pâté:"
        listData7="8oz – $12.50"
        listData8="1lb – $25"
        detailBody2="Perfect for sandwiches, salads, bowls or other creative dishes."
        ProductCardBtn="View All Vegan Bánh Mì"
      />
      <Footer />
    </>
  );
}

export default VeganProtien;
