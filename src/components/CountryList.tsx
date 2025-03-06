// app/components/CountryList.tsx
"use client";

import { useState, useEffect } from "react";
import Filters from "./Filters";
import Wishlist from "./Wishlist";

interface Country {
  code: string;
  name: string;
  continent: { name: string };
  currency: string;
  phone: string;
}

export default function CountryList({initialCountries, continents,}: {initialCountries: Country[]; continents: string[];}) {
  const [search, setSearch] = useState({ continent: "", currency: "", phone: "" });
  const [wishlist, setWishlist] = useState<Country[]>([]);

  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const filteredCountries = initialCountries.filter((country) =>
    (search.continent ? country.continent.name === search.continent : true) &&
    (search.currency ? country.currency?.toLowerCase().includes(search.currency?.toLowerCase()) : true) &&
    (search.phone ? country.phone.includes(search.phone) : true)
  );

  function addToWishlist(country: Country) {
    if (!wishlist.some((c) => c.code === country.code)) {
      setWishlist([...wishlist, country]);
    }
  }

  function removeFromWishlist(code: string) {
    setWishlist(wishlist.filter((c) => c.code !== code));
  }

  return (
    <div>

      {/* Filter Component */}
      <Filters search={search} setSearch={setSearch} continents={continents} />

      {/* Nampilin daftar negara yang dah difilter */}

      <div className="w-full max-w-md mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h1 className="text-xl font-bold mb-4">Daftar Negara</h1>

          {/* Scrollable List */}
          <div className="h-96 overflow-y-auto border rounded-lg p-4">
            <div className="flex flex-col gap-4">
              {filteredCountries.map((country) => (
                <div key={country.code} className="border p-4 rounded-lg shadow-md bg-gray-50">
                  <h2 className="text-lg font-semibold">{country.name} ({country.code})</h2>
                  <p><strong>Continent:</strong> {country.continent.name}</p>
                  <p><strong>Currency:</strong> {country.currency}</p>
                  <p><strong>Phone:</strong> +{country.phone}</p>
                  <button 
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => addToWishlist(country)}
                  >
                    Tambah ke Wishlist
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      {/* <div className="max-w-8xl mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h1 className="text-xl font-bold mb-4">Daftar Negara</h1>
          <div className="h-96 overflow-y-auto border rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredCountries.map((country) => (
                <div key={country.code} className="border p-4 rounded-lg shadow-md bg-gray-50">
                  <h2 className="text-lg font-semibold">{country.name}  ({country.code})</h2>
                  <p><strong>Continent:</strong> {country.continent.name}</p>
                  <p><strong>Currency:</strong> {country.currency}</p>
                  <p><strong>Phone:</strong> +{country.phone}</p>
                  <button 
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => addToWishlist(country)}
                  >
                    Tambah ke Wishlist
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}

      {/* Wishlist Component */}
      <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />
    </div>
  );
}
