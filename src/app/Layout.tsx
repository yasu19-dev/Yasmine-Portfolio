import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#1A1F2B] text-[#E0E6ED] font-sans antialiased">
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
