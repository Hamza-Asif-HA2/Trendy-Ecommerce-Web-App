import React from "react";
import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import Card from "../../Card/Card";
import { useProducts } from "../../Firebase/Fetch";

function Women() {
  const { products, loading } = useProducts(["Women"]);

  return (
    <section className="Women-Category flex justify-center flex-col items-center  ">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Women's Fashion
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
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
          }
          description={"Best T-Shirts For Women"}
        />

        <CategoryCard
          title={"Trousers"}
          category={"trousers"}
          imageUrl={
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Discover The Best Trousers for Women"}
        />

        <CategoryCard
          title={"Shirts"}
          category={"shirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1668191032118-50ed3e741b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww"
          }
          description={"Discover The Best Shirts for Women"}
        />

        <CategoryCard
          title={"Watches"}
          category={"watches"}
          imageUrl={
"https://images.unsplash.com/photo-1655693489257-d23029e47a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"          }
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

export default Women;
