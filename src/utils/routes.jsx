import { Cart, HomePage, Products } from "../pages";

export const routes = [
  {
    id: "Home",
    path: "/home",
    component: <HomePage />,
  },
  {
    id: "Products",
    path: "/products",
    component: <Products />,
  },
  {
    id: "Cart",
    path: "/cart",
    component: <Cart />,
  },
];
