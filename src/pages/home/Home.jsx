import { useNavigate } from "react-router-dom";
import useApiHooks from "../../hooks/apiHooks";

export default function Home() {
  const nav = useNavigate();

  const [data, err, load] = useApiHooks(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (load) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-700">Loading.......</h1>
      </div>
    );
  }
  console.log(data);
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between mb-5">
        <button
          className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors font-medium cursor-pointer"
          onClick={() => nav("/random-meal")}
        >
          Get Random Meal
        </button>
        <button
          className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow-md hover:bg-amber-600 transition-colors font-medium cursor-pointer"
          onClick={() => nav("/posts")}
        >
          Posts
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-center">Meal Categories</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        {data &&
          data.categories.map((cata) => (
            <div
              onClick={() => nav(`/category-items/${cata.strCategory}`)}
              key={cata.idCategory}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img
                src={cata.strCategoryThumb}
                alt={cata.strCategory}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2">{cata.strCategory}</h2>
                <p className="text-gray-600 text-sm">
                  {cata.strCategoryDescription.substring(0, 100)}...
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
