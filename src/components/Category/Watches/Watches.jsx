import { Outlet } from "react-router-dom";
import CategoryCard from "../../Card/CategoryCard";
import CateButton from "../../Buttons/CateButton";
import { Link } from "react-router-dom";

function Watches() {


  return (
   
    <section className="Watches-Category flex justify-center flex-col items-center">
       <Link to={'all'}>
      <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
        Watches
      </div>
      </Link>
      <div className="sm:hidden row-category-btn m-4  flex gap-x-2 overflow-x-auto">
        <CateButton btnText={"Men"} toPage={"watches/menwatch"} />
        <CateButton btnText={"Women"} toPage={"watches/womenwatch"} />
        <CateButton btnText={"Kids"} toPage={"watches/kidswatch"} />
      </div>

      <div className="hidden sm:grid text-center sm:w-10/12 grid-cols-2 md:w-10/12 md:grid-cols-2 lg:grid-cols-3 gap-6 my-2 lg:w-8/12">
        <CategoryCard
          title={"Men"}
          category={"watches/menwatch"}
          imageUrl={
            "https://images.unsplash.com/photo-1714356590155-f896e15d21c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best Watches For Men"}
        />

        <CategoryCard
          title={"Women"}
          category={"watches/womenwatch"}
          imageUrl={
            "https://images.unsplash.com/photo-1655693489257-d23029e47a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbWVuJTIwd2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best Watches For Women"}
        />

        <CategoryCard
          title={"Kids"}
          category={"watches/kidswatch"}
          imageUrl={
            "https://images.unsplash.com/photo-1640374472612-cbc508ad9265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95JTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D"
          }
          description={"Best Watches For Kids"}
        />
      </div>

      <Outlet />

      
    </section>

    
  );
}

export default Watches;
