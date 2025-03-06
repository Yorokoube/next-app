export async function getCountries() {
    const res = await fetch("https://countries.trevorblades.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            countries {
              code
              name
              continent { name }
              currency
              phone
            }
            continents {
              name
            }
          }
        `,
      }),
      next: { revalidate: false },
    });
  
    const { data } = await res.json();
  
    // Dapetin daftar benua dari API
    const uniqueContinents = data.continents.map((c: { name: string }) => c.name);
  
    return { countries: data.countries, continents: uniqueContinents };
}