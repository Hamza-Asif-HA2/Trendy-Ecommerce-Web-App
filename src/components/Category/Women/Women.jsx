import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import { Outlet } from "react-router-dom";


function Women() {

  return (
    <section className="Women-Category flex justify-center flex-col items-center  ">
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Women's Fashion
      </div>

      <div className="sm:hidden row-category-btn m-4  flex gap-x-2 overflow-x-auto">
        <CateButton btnText={"T-Shirts"} toPage={"women/tshirts"} />
        <CateButton btnText={"Shirts"} toPage={"women/shirts"} />
        <CateButton btnText={"Trousers"} toPage={"women/trousers"} />
        <CateButton btnText={"Watches"} toPage={"women/watches"} />
      </div>
      <div className="hidden sm:grid text-center  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-2 mx-2">
        <CategoryCard
          title={"T-Shirts"}
          category={"women/tshirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwdCUyMHNoaXJ0fGVufDB8fDB8fHww"
          }
          description={"Best T-Shirts For Women"}
        />

        <CategoryCard
          title={"Trousers"}
          category={"women/trousers"}
          imageUrl={
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVuJTIwdHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"
          }
          description={"Discover The Best Trousers for Women"}
        />

        <CategoryCard
          title={"Shirts"}
          category={"women/shirts"}
          imageUrl={
            "https://images.unsplash.com/photo-1668191032118-50ed3e741b2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWVuJTIwc2hpcnRzfGVufDB8fDB8fHww"
          }
          description={"Discover The Best Shirts for Women"}
        />

        <CategoryCard
          title={"Watches"}
          category={"women/watches"}
          imageUrl={
"https://images.unsplash.com/photo-1655693489257-d23029e47a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"          }
          description={"Luxurious Wathces"}
        />
      </div>

            <Outlet />
      
    </section>
  );
}

export default Women;
