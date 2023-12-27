import { CatModel } from '../../../components/models/cat';
import { NextResponse } from 'next/server';

const URL = 'https://api.thecatapi.com/v1/images/search?limit=20';

export async function GET(request: Request) {
  const res = await fetch(URL, {
    headers: {
      'x-api-key': process.env.DATA_API_KEY,
    },
  });
  const data: CatModel[] = await res.json();

  return NextResponse.json(data);
}
