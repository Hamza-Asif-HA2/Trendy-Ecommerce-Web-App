import React from "react";
import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import Card from "../../Card/Card";
import { useProducts } from "../../Firebase/Fetch";


function Kids() {
  const { products, loading } = useProducts(['Kids']);



  return (
    <section className="Kids-Category flex justify-center flex-col items-center  ">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Kids's Fashion
      </div>

      <div className="sm:hidden row-category-btn m-4  flex gap-x-2 overflow-x-auto">
        <CateButton btnText={"T-Shirts"} toPage={"tshirts"} />
        <CateButton btnText={"Shirts"} toPage={"shirts"} />
        <CateButton btnText={"Trousers"} toPage={"trousers"} />
        <CateButton btnText={"Watches"} toPage={"watches"} />
      </div>
      <div class="hidden sm:grid text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-2 mx-2">
        <CategoryCard
          title={"T-Shirts"}
          category={"tshirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1502451885777-16c98b07834a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGtpZHMlMjBUJTIwc2hpcnRzfGVufDB8fDB8fHww"
          }
          description={"Best T-Shirts For Kids"}
        />

        <CategoryCard
          title={"Trousers"}
          category={"trousers"}
          imageUrl={
            "https://plus.unsplash.com/premium_photo-1707816501152-97b0dccbdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMFRyb3VzZXJzfGVufDB8fDB8fHww"
          }
          description={"Discover The Best Trousers for Kids"}
        />

        <CategoryCard
          title={"Shirts"}
          category={"shirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1518463231256-578cfa07d614?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Discover The Best Shirts for Kids"}
        />

        <CategoryCard
          title={"Watches"}
          category={"watches"}
          imageUrl={
            "https://images.unsplash.com/photo-1675001849511-509a2351ff69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Luxurious Wathces"}
        />
      </div>

    
      <section className="Products flex items-center justify-center flex-col">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        All Products
      </div>

        {loading ? (
          <div className="flex items-center justify-center my-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 my-3">
            {products.map((product) => (
              <Card
                key={product.id}
                productTitle={product.title}
                productPrice={product.price}
                productDesc={product.description}
                productSizes={product.sizes} // Assuming product.sizes is an array of available sizes
                productImageUrl={product.imageUrl}
              />
            ))}
          </div>
        )}
      </section>
    </section>
  );
}

export default Kids;
