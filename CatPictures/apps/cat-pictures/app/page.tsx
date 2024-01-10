import { redirect } from 'next/navigation';
import { Routes } from '@/constants/routes';

export default async function Page() {
  redirect(Routes.dashboard);
}
