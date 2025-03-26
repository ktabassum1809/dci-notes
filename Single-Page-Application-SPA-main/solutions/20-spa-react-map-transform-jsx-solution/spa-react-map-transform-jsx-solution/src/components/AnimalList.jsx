import AnimalListItem from "./AnimalListItem.jsx";

export default function AnimalList({ animals }) {
  return (
    <ul>
      {animals.map((animal) => (
        <AnimalListItem key={animal.id} name={animal.name} />
      ))}
    </ul>
  );
}
