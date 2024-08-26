import Image from "next/image";
import FormTask from "./components/FormTask";
export default function HomePage() {
  return (
    <div>
      <h1>Task App</h1>
      <FormTask></FormTask>
    </div>
  );
}
