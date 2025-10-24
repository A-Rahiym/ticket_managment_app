import { Navbar } from "./components/Navbar";
import { Toaster } from "sonner";
import { AppRouter } from "./router/AppRouter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AppRouter />
      <Toaster position="top-right" />
    </div>
  );
}