function Card({ name, date, review }) {
  return (
    <div className="mb-4 rounded-lg bg-white p-4 shadow-md">
      <p className="mb-2 text-gray-700">{review}</p>
      <div className="text-sm text-gray-500">
        <span className="font-semibold">{name}</span> - {date}
      </div>
    </div>
  );
}

export default Card;
