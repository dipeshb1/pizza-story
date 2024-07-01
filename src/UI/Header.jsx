import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "./Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 shadow-md sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
        <Link to="/" className="font-bold uppercase tracking-widest">
          Pizza Story
        </Link>
        <div className="flex items-center gap-4">
          <SearchOrder />
          <Username />
        </div>
      </div>
    </header>
  );
}

export default Header;
