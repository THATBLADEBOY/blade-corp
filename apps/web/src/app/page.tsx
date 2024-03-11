import { HeroCentredWithImage } from "@repo/ui/marketing";
import { DarkModeToggle } from "@repo/ui/darkModeToggle";

export default function Page(): JSX.Element {
  return (
    <main className="">
      <DarkModeToggle />
      <HeroCentredWithImage />
    </main>
  );
}
