import Row from "./Row";

export default function Table() {
  return (
    <table border={1}>
      <tbody>
        <Row text="satuu" id="1" />
        <Row text="dua" id="2" />
        <Row text="tiga" id="3" />
      </tbody>
    </table>
  );
}
