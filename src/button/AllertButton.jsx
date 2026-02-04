export default function AllertButton({ text, kata }) {
  function handleClick(e) {
    console.info(e);
    alert(kata);
  }
  return <button onClick={handleClick}>{text}</button>;
}
