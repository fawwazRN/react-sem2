import Todo from "./Todo";

export default function TodoList() {
  const data = [
    {
      id: 0,
      text: "learn react",
      isCompleted: false,
    },
    {
      id: 1,
      text: "learn js",
      isCompleted: false,
    },
    {
      id: 2,
      text: "learn html",
      isCompleted: true,
    },
    {
      id: 3,
      text: "learn css",
      isCompleted: true,
    },
  ];

  return (
    <ul>
      {data.map((datas) => (
        <Todo key={datas.id} {...datas} />
      ))}
    </ul>
  );
}
