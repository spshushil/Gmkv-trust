import { Button } from "@/components/ui/button";

const DonateButton = ({ amount }: { amount: number }) => {

  const handleDonate = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY", // replace
      amount: amount * 100, // amount in paise
      currency: "INR",
      name: "GMKV Trust",
      description: "Donation",
      handler: function (response: any) {
        alert("Payment Successful 🙏");
        console.log(response);
      },
      theme: {
        color: "#f59e0b", // saffron color
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <Button onClick={handleDonate} className="bg-saffron text-white">
      Donate ₹{amount}
    </Button>
  );
};

export default DonateButton;