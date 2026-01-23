
"use client";

import { RecoilRoot } from "recoil";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
