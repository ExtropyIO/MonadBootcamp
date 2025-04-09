// src/app/layout.tsx

// additional import
import { Providers } from "@/provider";

// other code in the file ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            // Wrap provider around children
            <Providers>{children}</Providers>
        </body>
    </html>
  );
}