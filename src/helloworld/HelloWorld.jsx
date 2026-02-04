import TodoList from "../todo/TodoList";

function HelloWorld() {
  const data = {
    teks: "fawwaz",
    umur: 16,
    sekolah: "PTPA",
  };
  return (
    <>
      <Selamat />
      <Propss nama="andi" />
      <Propss2 />
      <Propss3 {...data} />
      <DataDiri1 nama="fawwaz" kota="bekasi" />
      <DataDiri2 />
      <DataDiri3 {...data} />
      <TodoList />
    </>
  );
}

export function Selamat() {
  const items = [];
  return <div> {items.length && <List items={items} />} </div>;
}

export function Propss(props) {
  return <h1>hallo, nama saya {props.nama}</h1>;
}

export function Propss2({ teks = "kosong" }) {
  return <h1>hallo, nama saya {teks}</h1>;
}

export function Propss3({ ...props }) {
  return (
    <h1>
      hallo, nama saya {props.teks}, umur saya {props.umur} tahun. sekolah di{" "}
      {props.sekolah}
    </h1>
  );
}

export function DataDiri1(props) {
  return (
    <>
      <h1>Nama saya</h1>
      <h2>{props.nama}</h2>
      <p>saya lahir di {props.kota}</p>
    </>
  );
}

export function DataDiri2({ data = "lupa dimasukin nih" }) {
  return (
    <>
      <h1>Nama saya</h1>
      <h2>{data}</h2>
    </>
  );
}
export function DataDiri3(...data) {
  return (
    <>
      <h1>Nama saya</h1>
      <h2>{data.teks}</h2>
      <p>saya lahir di {data.sekolah}</p>
    </>
  );
}

export default HelloWorld;
