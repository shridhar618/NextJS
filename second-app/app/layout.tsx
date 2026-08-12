export default function Rootlayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Second App</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}