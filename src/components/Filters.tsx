interface FiltersProps {
  search: { continent: string; currency: string; phone: string };
  setSearch: (search: { continent: string; currency: string; phone: string }) => void;
  continents: string[];
}

export default function Filters({ search, setSearch, continents }: FiltersProps) {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-4 shadow-md rounded-lg"></div> dsektop view
    <div className="flex flex-col gap-4 bg-white p-4 shadow-md rounded-lg max-w-md mx-auto">
      
      {/* Dropdown untuk filter berdasarkan benua */}
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">Continent:</label>
        <select 
          value={search.continent} 
          onChange={(e) => setSearch({ ...search, continent: e.target.value })} 
          className="w-full p-2 border rounded-md bg-gray-100 focus:ring focus:ring-blue-300"
        >
          <option value="">Semua</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>{continent}</option>
          ))}
        </select>
      </div>

      {/* Input untuk mata uang */}
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">Currency:</label>
        <input 
          type="text" 
          value={search.currency} 
          onChange={(e) => setSearch({ ...search, currency: e.target.value })} 
          className="w-full p-2 border rounded-md bg-gray-100 focus:ring focus:ring-blue-300"
          placeholder="Masukkan mata uang"
        />
      </div>

      {/* Input untuk kode telepon */}
      <div>
        <label className="block text-sm font-semibold text-gray-600 mb-1">Phone Code:</label>
        <input 
          type="number" 
          value={search.phone} 
          onChange={(e) => setSearch({ ...search, phone: e.target.value })} 
          className="w-full p-2 border rounded-md bg-gray-100 focus:ring focus:ring-blue-300"
          placeholder="Masukkan kode telepon"
        />
      </div>

    </div>
  );
}
