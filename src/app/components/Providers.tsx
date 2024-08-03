"use client";
import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://nadeemsons-commerce-git-main-fardeens-projects.vercel.app/stripe/success"
      cancelUrl="https://nadeemsons-commerce-git-main-fardeens-projects.vercel.app//stripe/error"
      currency="SAR"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
