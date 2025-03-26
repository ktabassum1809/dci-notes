export default function ({ name }) {
  const printName = name.split(",")[0];

  return <li>{printName}</li>;
}
