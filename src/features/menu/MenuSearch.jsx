function MenuSearch({ setSearchKey }) {
  return (
    <div className="mt-2 flex items-center justify-center px-4">
      <input
        type="text"
        placeholder="Search menu..."
        onChange={(e) => setSearchKey(e.target.value)}
        className="m-auto mt-2 w-full rounded-md px-2 py-2 text-sm shadow-md outline-none focus:outline-yellow-400"
      />
    </div>
  );
}

export default MenuSearch;
