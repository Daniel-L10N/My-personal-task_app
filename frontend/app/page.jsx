import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";


export default function HomePage() {
  return (
    <div>
      <h1>Task App</h1>
      <FormTask />
      <ListTask />
    </div>
  );
}
