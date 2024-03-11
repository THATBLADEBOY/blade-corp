import { HeroCentredWithImage } from "@bladecorp/ui/marketing";
import { DarkModeToggle } from "@bladecorp/ui/darkModeToggle";

export default function Page(): JSX.Element {
  return (
    <main className="">
      <DarkModeToggle />
      <HeroCentredWithImage />
    </main>
  );
}
