import React from "react";
import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import Card from "../../Card/Card";
import { useProducts } from "../../Firebase/Fetch";

function Watches() {
  const { products, loading } = useProducts(
    ["Men", "Women", "Kids"],
    ["Watches"]
  );

  return (
    <section className="Watches-Category flex justify-center flex-col items-center  ">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Watches
      </div>

      <div className="sm:hidden row-category-btn m-4  flex gap-x-2 overflow-x-auto">
        <CateButton btnText={"Men"} toPage={"men/watches"} />
        <CateButton btnText={"Women"} toPage={"women/watches"} />
        <CateButton btnText={"Kids"} toPage={"kids/watches"} />
      </div>
      <div class="hidden sm:grid text-center sm:w-10/12 grid-cols-2 md:w-10/12  md:grid-cols-2 lg:grid-cols-3 gap-6 my-2  lg:w-8/12 bg-red-500">
        <CategoryCard
          title={"Men"}
          category={"men/watches"}
          imageUrl={
            "https://images.unsplash.com/photo-1714356590155-f896e15d21c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best Watches For Men"}
        />

        <CategoryCard
          title={"Women"}
          category={"women/watches"}
          imageUrl={
            "https://images.unsplash.com/photo-1655693489257-d23029e47a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best Watches For Women"}
        />

<CategoryCard
          title={"Kids"}
          category={"kids/watches"}
          imageUrl={
            "https://images.unsplash.com/photo-1640374472612-cbc508ad9265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95JTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best Watches For Kids"}
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
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-2 my-3">
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

export default Watches;
