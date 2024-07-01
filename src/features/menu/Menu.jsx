import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import MenuSearch from "./MenuSearch";
import { useState } from "react";

function Menu() {
  const data = useLoaderData();
  const [searchKey, setSearchKey] = useState("");
  const menu = searchKey
    ? data.filter((item) =>
        `${item.name} ${item.ingredients.join("")}`
          .toLocaleLowerCase()
          .includes(searchKey.toLocaleLowerCase()),
      )
    : data;
  return (
    <div>
      <MenuSearch setSearchKey={setSearchKey} />
      <ul className="divide-y divide-stone-200 px-4 py-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;

export async function loader() {
  const data = await getMenu();
  return data;
}
