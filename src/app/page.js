import { Hero, Home, Materi2 } from "../components";
import { twMerge } from "tailwind-merge";

export default function Homepage() {
  const additionalClasses = "h-screen"; // Contoh kelas tambahan
  return (
    <main className={twMerge("bg-[#EFD2C9]", additionalClasses)}>
      <Hero />
      <Home />
    </main>
  );
}
