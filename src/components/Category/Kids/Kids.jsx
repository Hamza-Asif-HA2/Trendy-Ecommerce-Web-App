/* eslint-disable react/no-unescaped-entities */
import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import { Outlet } from "react-router-dom";



function Kids() {



  return (
    <section className="Kids-Category flex justify-center flex-col items-center  ">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Kids's Fashion
      </div>

      <div className="sm:hidden row-category-btn m-4  flex gap-x-2 overflow-x-auto">
        <CateButton btnText={"T-Shirts"} toPage={"kids/tshirts"} />
        <CateButton btnText={"Shirts"} toPage={"kids/shirts"} />
        <CateButton btnText={"Trousers"} toPage={"kids/trousers"} />
        <CateButton btnText={"Watches"} toPage={"kids/watches"} />
      </div>
      <div className="hidden sm:grid text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-2 mx-2">
        <CategoryCard
          title={"T-Shirts"}
          category={"kids/tshirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1502451885777-16c98b07834a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGtpZHMlMjBUJTIwc2hpcnRzfGVufDB8fDB8fHww"
          }
          description={"Best T-Shirts For Kids"}
        />

        <CategoryCard
          title={"Trousers"}
          category={"kids/trousers"}
          imageUrl={
            "https://plus.unsplash.com/premium_photo-1707816501152-97b0dccbdbdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMFRyb3VzZXJzfGVufDB8fDB8fHww"
          }
          description={"Discover The Best Trousers for Kids"}
        />

        <CategoryCard
          title={"Shirts"}
          category={"kids/shirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1518463231256-578cfa07d614?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGtpZHMlMjBzaGlydHN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Discover The Best Shirts for Kids"}
        />

        <CategoryCard
          title={"Watches"}
          category={"kids/watches"}
          imageUrl={
            "https://images.unsplash.com/photo-1675001849511-509a2351ff69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Luxurious Wathces"}
        />
      </div>

         <Outlet />
     
    </section>
  );
}

export default Kids;
