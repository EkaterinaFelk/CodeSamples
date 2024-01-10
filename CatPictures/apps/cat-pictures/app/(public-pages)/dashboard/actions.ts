'use server';

const url = process.env.NEXT_PUBLIC_LOCALHOST_URL;

export async function fetchCatsImages(page = 0) {
  const res = await fetch(`${url}/api/cats/?page=${page}`);
  return await res.json();
}
