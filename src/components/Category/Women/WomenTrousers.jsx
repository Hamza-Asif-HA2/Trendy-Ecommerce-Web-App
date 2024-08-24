import Card from "../../Card/Card";
import { useProducts } from "../../Firebase/Fetch";
function WomenTrousers() {
    const { products, loading } = useProducts(["Women"], ['Trousers']);

  return (
    <section className="Products flex items-center justify-center flex-col">
        <div className="section-title text-2xl md:text-3xl font-bold text-center mt-4">
          All Products
        </div>

        {loading ? (
        <div className="flex items-center justify-center my-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-gray-900"></div>
        </div>
      ) : products.length !== 0 ? (
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
      ) : (
        <div className="font-mono text-lg sm:text-3xl m-2 text-center">
          No Products Available in this Category
        </div>
      )}
      </section>
  )
}

export default WomenTrousers