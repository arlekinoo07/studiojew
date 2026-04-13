// import './globals.css';
// import { AuthProvider } from '../context/AuthProvider'; // путь к твоему AuthProvider
// import { Kodchasan } from 'next/font/google';

// const kodchasan = Kodchasan({
//   subsets: ['latin'],
//   weight: ['200', '300', '400', '500', '600', '700'],
// });


// export const metadata = {
//   title: 'My Auth App',
//   description: 'Приложение с регистрацией и входом',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <AuthProvider>
//           {children}
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

import './globals.css';
import { AuthProvider } from '../context/AuthProvider';

export const metadata = {
  title: 'My Auth App',
  description: 'Приложение с регистрацией и входом',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
