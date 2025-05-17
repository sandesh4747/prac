import {
  Avatar,
  Button,
  Card,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon, MinusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { baseUrl } from "../../app/mainApi";
import { clearCart, removeFromCart, setToCart } from "./cartSlice";
import { useAddOrderMutation } from "../orders/orderApi";
import toast from "react-hot-toast";
const TABLE_HEAD = ["Items", "Price", "Quantity", "Total"];

export default function CartPage() {
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const totalAmount = carts.reduce((a, b) => a + b.price * b.qty, 0);
  const dispatch = useDispatch();
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const handleOrder = async () => {
    try {
      await addOrder({
        token: user.token,
        body: {
          totalAmount,
          orderItems: carts,
        },
      }).unwrap();
      dispatch(clearCart());
      toast.success("Successfully added");
    } catch (err) {
      toast.error(err.data?.message || err.data);
    }
  };

  return (
    <div className="p-5">
      {carts.length === 0 && (
        <h1 className="text-center text-3xl">No Items in Cart</h1>
      )}
      {carts.length > 0 && (
        <div>
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
                    <tr key={index}>
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
                        <UpdateToCart
                          product={{ title, image, price, qty, _id }}
                        />
                      </td>
                      <td className={classes}>
                        <div className="flex items-center">
                          <Typography>Rs. {price * qty}</Typography>
                          <IconButton
                            onClick={() => dispatch(removeFromCart(_id))}
                            variant="text"
                          >
                            <XMarkIcon className="h-4 w-4" />
                          </IconButton>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
          <div className="mt-6 space-y-4 flex flex-col items-end ">
            <h1>Total Amount: ${totalAmount}</h1>
            <Button onClick={handleOrder} loading={isLoading}>
              Place An Order
            </Button>
          </div>
        </div>
      )}
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
    <div className="flex gap-4 items-center">
      <IconButton
        onClick={() => handleCart(false)}
        disabled={product.qty === 1}
        size="sm"
        variant="text"
      >
        <MinusIcon className="h-4 w-4" />
      </IconButton>

      <span>{product.qty}</span>
      <IconButton variant="text" onClick={() => handleCart(true)} size="sm">
        <PlusIcon className="h-4 w-4" />
      </IconButton>
    </div>
  );
}
