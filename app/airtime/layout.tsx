
// app/layout.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import Spinner from '@/spinner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Spinner />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
