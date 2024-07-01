import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "./Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 shadow-md sm:px-6">
      <Link to="/" className="font-bold uppercase tracking-widest">
        Pizza Story
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
