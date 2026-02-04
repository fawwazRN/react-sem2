import { useImmer } from "use-immer";

export default function ContactForm() {
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  function handleNameChange(e) {
    setContact((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((draft) => {
      draft.message = e.target.value;
    });
  }
  return (
    <div>
      <h1>contact form</h1>
      <form>
        <input
          type="text"
          placeholder="masukkan nama"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <input
          type="text"
          placeholder="masukkan pesan"
          value={contact.message}
          onChange={handleMessageChange}
        />
      </form>
      <br />
      <h1>contact info</h1>
      <h3>name: {contact.name}</h3>
      <p>message: {contact.message}</p>
    </div>
  );
}
