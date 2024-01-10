import { ReactNode } from 'react';
import { Welcome } from '@/pages/dashboard/welcome/welcome';

export default function Layout(props: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      <Welcome />
      {props.modal}
      {props.children}
    </>
  );
}
