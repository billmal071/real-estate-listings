import axios from "axios";

export default async function fetcher(url: string) {
  try {
    return await axios.get(url);
  } catch (err: any) {
    console.error(err.message);
  }
}
