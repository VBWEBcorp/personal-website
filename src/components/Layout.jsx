import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
