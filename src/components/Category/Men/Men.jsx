/* eslint-disable react/no-unescaped-entities */

import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import { Outlet } from "react-router-dom";

function Men() {
  



  return (
    <section className="Men-Category flex justify-center flex-col items-center  ">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Men's Fashion
      </div>

      <div className="sm:hidden row-category-btn m-4  flex gap-x-2 overflow-x-auto">
        <CateButton btnText={"T-Shirts"} toPage={"men/tshirts"} />
        <CateButton btnText={"Shirts"} toPage={"men/shirts"} />
        <CateButton btnText={"Trousers"} toPage={"men/trousers"} />
        <CateButton btnText={"Watches"} toPage={"men/watches"} />
      </div>
      <div className="hidden sm:grid text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-2 mx-2">
        <CategoryCard
          title={"T-Shirts"}
          category={"men/tshirts"}
          imageUrl={
            "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VCUyMFNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best T-Shirts For Men"}
        />

        <CategoryCard
          title={"Trousers"}
          category={"men/trousers"}
          imageUrl={
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Discover The Best Trousers for Men"}
        />

        <CategoryCard
          title={"Shirts"}
          category={"men/shirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Discover The Best Shirts for Men"}
        />

        <CategoryCard
          title={"Watches"}
          category={"men/watches"}
          imageUrl={
            "https://images.unsplash.com/photo-1535346256685-0527f1dfd658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Luxurious Wathces"}
          
        />
      </div>

          <Outlet />
      
    </section>
  );
  
}

export default Men;
