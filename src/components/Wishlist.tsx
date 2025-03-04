// app/components/Wishlist.tsx
interface WishlistProps {
  wishlist: { 
    code: string; 
    name: string; 
    continent: { name: string }; 
    currency: string; 
    phone: string 
  }[];
  removeFromWishlist: (code: string) => void;
}
  
export default function Wishlist({ wishlist, removeFromWishlist }: WishlistProps) {
  return (
    <div>
      <div className="max-w-8xl mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h1 className="text-xl font-bold mb-4">Whistlist</h1>
            
          <div className="h-96 overflow-y-auto border rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {wishlist.map((country) => (
                <div key={country.code} className="border p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold">{country.name} ({country.code})</h2>
                  <p><strong>Continent:</strong> {country.continent.name}</p>
                  <p><strong>Currency:</strong> {country.currency}</p>
                  <p><strong>Phone:</strong>  +{country.phone}</p>
                  <button 
                    className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => removeFromWishlist(country.code)}
                  >
                    Hapus
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  