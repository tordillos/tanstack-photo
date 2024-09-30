// app/routes/index.tsx
import { Button } from "@/components/button";
import { useTheme } from "@/components/theme-provider";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { setTheme, theme } = useTheme();

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <p>Hello world!</p>
      <Button onClick={changeTheme}>Change theme</Button>
    </>
  );
}
