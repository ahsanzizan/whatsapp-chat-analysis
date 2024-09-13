import { Button } from "./components/button";
import { Display } from "./components/text";

export default function Home() {
  return (
    <main className="flex w-screen h-screen items-center justify-center">
      <Display>Lorem Ipsum</Display>
      <Button variant={"primary"}>Submit</Button>
    </main>
  );
}
