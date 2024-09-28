// app/routes/index.tsx
import { Button } from "@/components/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <p>Hello I am Paloma!</p>
      <Button>Click here</Button>
    </>
  );
}
