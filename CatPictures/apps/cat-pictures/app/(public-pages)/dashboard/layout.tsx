import { ReactNode } from 'react';
import { Welcome } from '@/pages/dashboard/welcome/welcome';

type LayoutProps = {
  children: ReactNode;
  modal: ReactNode;
  content: ReactNode;
};

export default function Layout({ modal, content, children }: LayoutProps) {
  return (
    <>
      <Welcome />
      {children}
      {modal}
      {content}
    </>
  );
}
