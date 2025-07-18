import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-white">
        Welcome to My Next.js App!
      </h1>
      <Button className="text-white">Home</Button>
    </main>
  );
}
