import { Avatar, Card, IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../app/mainApi";
import { setToCart } from "./cartSlice";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
const TABLE_HEAD = ["Items", "Price", "Quantity", "Total"];

export default function CartPage() {
  const { carts } = useSelector((state) => state.cartSlice);
  // console.log(carts);
  return (
    <div className="p-5">
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {carts.map(({ title, image, price, qty, _id }, index) => {
              const isLast = index === carts.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Avatar src={`${baseUrl}${image}`} />
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <UpdateToCart product={{ title, image, price, qty, _id }} />
                  </td>
                  <td className={classes}>
                    <div>
                      <Typography>Rs. {price * qty}</Typography>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

function UpdateToCart({ product }) {
  const dispatch = useDispatch();
  // console.log(product);
  const handleCart = (isAdd) => {
    /*In JavaScript, when you use the spread operator (...product), it copies all the fields first, including qty.

Then, if you explicitly define a field again after the spread, like:{ ...product, qty: newValue }
The last occurrence wins — it overwrites the original qty.
 */
    dispatch(
      setToCart({ ...product, qty: isAdd ? product.qty + 1 : product.qty - 1 })
    );
  };
  return (
    <div className="flex gap-4">
      <IconButton
        onClick={() => handleCart(false)}
        disabled={product.qty === 1}
        size="sm"
      >
        <MinusIcon className="h-5 w-5" />
      </IconButton>

      <h1>{product.qty}</h1>
      <IconButton onClick={() => handleCart(true)} size="sm">
        <PlusIcon className="h-5 w-5" />
      </IconButton>
    </div>
  );
}
