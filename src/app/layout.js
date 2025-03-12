import Navbar from "./Components/Navbar/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <header className="p-4 bg-blue-500 text-white"></header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2024 My Static Site
        </footer>
      </body>
    </html>
  );
}
