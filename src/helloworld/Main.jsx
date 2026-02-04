import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "../container/Container";
import Card from "../card/Card";
import Table from "../table/Table";
import AllertButton from "../button/AllertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHello from "../form/SayHello";
import Counter from "../form/Counter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Container>
      <Counter />
      <SayHello />
      <SearchForm />
      {/* <Toolbar
        onClick={(e) => {
          e.stopPropagation();
          alert("toolbar clicked");
        }}
      />
      <MyButton text="klik saya" onSmash={() => alert("hallllooooo")} />
      <AllertButton text="hallo" kata="selamat jalan" />
      <Table /> */}
      <Card />
    </Container>
  </StrictMode>,
);
