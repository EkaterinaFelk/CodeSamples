'use server';

const url = process.env.NEXT_PUBLIC_LOCALHOST_URL;

export async function fetchCats(page = 0) {
  const res = await fetch(`${url}/api/cats/?page=${page}`);
  return await res.json();
}

export async function fetchCatDetails(id: string) {
  const res = await fetch(`${url}/api/cats/${id}`);
  return await res.json();
}
