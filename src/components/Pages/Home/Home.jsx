import CategoryCard from "../../Card/CategoryCard";
import Card from "../../Card/Card";
import { useProducts } from "../../Firebase/Fetch";

export default function Home() {
  const { products, loading } = useProducts();

  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-6 mx-2 sm:py-8">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-18 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-8 sm:text-left">
            <div className="max-w-2xl mt-8 sm:mt-1 space-y-8 text-center sm:text-left">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl uppercase">
                Welcome To Trendy
                <span className="block text-xl font-normal m-2 normal-case">
                  Style that Speaks. Comfort that Lasts.
                </span>
              </h2>
            </div>

            <div className="w-auto sm:mt-0 mt-8">
              <img
                className="w-96"
                src="https://i.ibb.co/5BCcDYB/Remote2.png"
                alt="image1"
              />
            </div>
          </div>
        </div>
      </aside>

      <section className="Category flex justify-center flex-col">
        <div className="section-title text-2xl md:text-3xl font-bold text-center">
          Our Categories
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 my-4">
          <CategoryCard
            title={"Men"}
            category={"men/products"}
            imageUrl={
              "https://plus.unsplash.com/premium_photo-1669703777695-f8052a432411?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVsfGVufDB8fDB8fHww"
            }
            description={"Best Clothing Brand For Men"}
          />

          <CategoryCard
            title={"Women"}
            category={"women/products"}
            imageUrl={
              "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D"
            }
            description={"Discover The Best Fashion"}
          />

          <CategoryCard
            title={"Kids"}
            category={"kids/products"}
            imageUrl={
              "https://images.unsplash.com/photo-1541580620-23a640b30338?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGtpZCUyMG1vZGVsfGVufDB8fDB8fHww"
            }
            description={"Clothes reflect the pure soul of Kids"}
          />

          <CategoryCard
            title={"Watches"}
            category={"watches/all"}
            imageUrl={
              "https://images.unsplash.com/photo-1535346256685-0527f1dfd658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fFdhdGNoZXN8ZW58MHx8MHx8fDA%3D"
            }
            description={"Luxurious Watches"}
          />
        </div>
      </section>

      <section className="Products flex items-center justify-center flex-col m-2">
        <div className="section-title text-2xl md:text-3xl font-bold text-center">
          Our Products
        </div>

        {loading ? (
          <div className="flex items-center justify-center my-6">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mx-2 my-3">
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
    </div>
  );
}
