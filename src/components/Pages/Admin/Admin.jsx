import { Outlet, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div className="max-w-7xl mx-auto w-full m-2">
      <div className="bg-gray-300 p-4 rounded-2xl">
        <h1 className="text-center m-2 text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          Admin Dashboard
        </h1>
        <h6 className="text-center text-lg sm:text-xl text-gray-600 font-bold">
          Manage Products here
        </h6>
        <div className="m-8 row flex space-x-4 justify-center">
          <Link to={"products"}>
            <div className="p-4 border border-solid rounded-lg text-lg sm:text-xl  m-2 font-bold bg-orange-600 text-white">
              Products
            </div>
          </Link>
          <Link to={"orders"}>
            <div className="p-4 border border-solid rounded-lg text-lg  sm:text-xl m-2 font-bold bg-orange-600 text-white">
              Orders
            </div>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
