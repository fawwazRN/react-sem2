export default function SayHello() {
  return (
    <div>
      <form>
        <input type="text" id="name-input" />
        <button
          onClick={(e) => {
            e.preventDefault();
            const name = document.getElementById("name-input").value;
            document.getElementById("text_hello").innerText = `hello ${name}`;
          }}>
          Say hello
        </button>
      </form>
      <h1 id="text_hello">hello world</h1>
    </div>
  );
}
