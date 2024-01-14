import { API_URL } from '@/constants/routes';
import { CatModel } from '@/models/cat';
import { NextResponse } from 'next/server';

type URLParams = { page?: string | null; limit?: string | null };

const getURL = ({ page, limit }: URLParams) => {
  const baseURL = API_URL;
  const defaultLimit = 8;
  const limitQuery = `limit=${limit || defaultLimit}&`;
  const pageQuery = page ? `page=${page}` : '';

  return `${baseURL}/search?${limitQuery}${pageQuery}`;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page');
  const limit = searchParams.get('limit');

  const res = await fetch(getURL({ page, limit }), {
    cache: 'force-cache',
    headers: {
      'x-api-key': process.env.DATA_API_KEY,
    },
  });
  const data: CatModel[] = await res.json();

  return NextResponse.json(data);
}
