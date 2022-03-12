import fetcher from "@helpers/fetcher";
import useSWR from "swr";

export default function useLocation(address: string) {
  const url = import.meta.env.VITE_GEOCODING_URL as string;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;
  const fullUrl = `${url}?address=${address}&key=${apiKey}`;
  return useSWR(fullUrl, fetcher);
}
