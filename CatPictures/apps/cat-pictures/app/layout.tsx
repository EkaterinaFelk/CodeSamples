import { Header } from '../components/header/header';
import { StyledComponentsRegistry } from './registry';
import './global.css';

export const metadata = {
  title: 'Welcome Cat Pictures',
  description: 'Cat pictures for everyone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <div id="modal-root" />
      </body>
    </html>
  );
}
