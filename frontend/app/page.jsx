import FormTask from "./components/FormTask";
import ListTask from "./components/ListTask";

export const dynamic = 'force-dynamic';
export default function HomePage() {
  dynamic;
  return (
    <div className="container  mx-auto px-10">
      <h1>Task App</h1>
      <div className="flex gap-x-10 ">
        <FormTask />
        <ListTask />
      </div>
    </div>
  );
}
