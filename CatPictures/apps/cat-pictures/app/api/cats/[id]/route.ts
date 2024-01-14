import { API_URL } from '@/constants/routes';
import { CatModel } from '@/models/cat';
import { NextResponse } from 'next/server';

/* this getById impelemnted in learning puprose,
 * the api source allow us to get all information in the all-cat-list request
 */

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const res = await fetch(`${API_URL}/${params.id}`, {
    cache: 'force-cache',
    headers: {
      'x-api-key': process.env.DATA_API_KEY,
    },
  });
  const data: CatModel = await res.json();

  return NextResponse.json(data);
}
