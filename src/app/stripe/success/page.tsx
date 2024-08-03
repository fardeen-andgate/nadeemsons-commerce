import { CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SuccessStripe = () => {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h2 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h2>
          <p className="text-gray-600 my-2">
            Thank you for your purchase, We hope you enjoy it.
          </p>
          <p>Have a great day!</p>

          
            <Button asChild className="mt-5">
                <Link href={"/"}>
              Go Back
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessStripe;
