function Card(link, title = "zhafran teman faiz", ...data) {
  return (
    <div className="card">
      <img src={link} alt="image" />
      <h2>{title}</h2>
      <p>{data.desc}</p>
      <button>{data.button}</button>
    </div>
  );
}

export default Card;
