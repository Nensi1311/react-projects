import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="medium"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check Out
    </Button>
  );
}

export default CheckoutButton;
