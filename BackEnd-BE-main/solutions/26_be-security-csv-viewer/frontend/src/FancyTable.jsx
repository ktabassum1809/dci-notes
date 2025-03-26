import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export function FancyTable({ data }) {
  if (!data) {
    return null;
  }

  // Grab first object and hope it represents the rest of the data well
  const first = data[0];

  // Each key of the object will be a column
  // For `{ name: "Pepper", age: 52 }` the columns will be "name" and "age"

  const cols = Object.keys(first).map((key) => {
    return <Column sortable field={key} header={key} />;
  });

  return (
    <DataTable paginator rows={5} value={data}>
      {cols}
    </DataTable>
  );
}
