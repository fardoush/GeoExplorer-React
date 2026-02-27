import React from "react";
import {
  FaLandmark,
  FaMap,
  FaMapMarkerAlt,
  FaRegHeart,
  FaUsers,
} from "react-icons/fa";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-slate-700 overflow-hidden transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={country.flags.flags.png}
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <button className=" bg-white/80 backdrop-blur-sm rounded-full p-2 text-gray-400 hover:text-red-500 transition shadow-sm">
            <FaRegHeart className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
            {country.name.common}
          </h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <p className="flex justify-between items-center">
              <span className="flex justify-between items-center gap-2">
                <FaUsers />
                Population:
              </span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {country.population.population}
              </span>
            </p>
            <p className="flex justify-between items-center">
              <span className="flex justify-between items-center gap-2">
                <FaMapMarkerAlt />
                Region:
              </span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {country.region.region}
              </span>
            </p>
            <p className="flex justify-between items-center">
              <span className="flex justify-between items-center gap-2">
                <FaLandmark />
                Capital:
              </span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {country.capital.capital}
              </span>
            </p>
            <p className="flex justify-between items-center">
              <span className="flex justify-between items-center gap-2">
                <FaMap />
                Area:
              </span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {country.area.area} ({
                    country.area.area > 300000 ? 'Big Country' : 'Small Country'
                })
              </span>
            </p>
          </div>
          <button className="w-full mt-6 py-3 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-200 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Country;
