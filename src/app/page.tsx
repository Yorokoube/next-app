// app/page.tsx (Server Component)
import CountryList from "../components/CountryList";
import { getCountries } from "../lib/api";

export default async function Home() {
  const { countries, continents } = await getCountries();

  return <CountryList initialCountries={countries} continents={continents} />;
}
