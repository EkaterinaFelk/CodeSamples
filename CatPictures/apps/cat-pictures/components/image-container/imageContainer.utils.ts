import axios from "axios";
import { CatModel } from "../models/cat";

const url = process.env.NEXT_PUBLIC_LOCALHOST_URL;

export const fetchCatsImages = (page: number) =>
  async function () {
    const res = await axios.request({
      timeout: 5000,
      url: `${url}/api/cats/?page=${page}`,
    });
    return await res.data;
  };

const fetchMap = new Map<string, Promise<CatModel[]>>();
export function queryClient(page: string, query: () => Promise<CatModel[]>) {
  if (!fetchMap.has(page)) {
    fetchMap.set(page, query());
  }
  return fetchMap.get(page)!;
}