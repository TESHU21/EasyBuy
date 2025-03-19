import React, { useState } from "react";
import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import CartItem from "./CartItem";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  // Toggle individual item selection
  const handleSelectItem = (itemId) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId) // Remove if already selected
        : [...prev, itemId] // Add if not selected
    );
  };

  // Toggle select all
  const handleSelectAll = (checked) => {
    setSelectedItems(checked ? cartItems.map((item) => item.id) : []);
  };

  // Calculate total price of selected items
  const totalPrice = cartItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Proceed to checkout
  const handleCheckout = () => {
    const selectedCartItems = cartItems.filter((item) =>
      selectedItems.includes(item.id)
    );

    if (selectedCartItems.length === 0) {
      alert("Please select at least one item to proceed!");
      return;
    }

    navigate("/billing", { state: { cart: selectedCartItems } });
  };

  return (
    <div className="flex flex-col pb-4">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb Navigation">
        <Breadcrumb className="flex justify-center">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" aria-label="Go to homepage">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage aria-current="page">Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <h1 className="text-center font-prata font-semibold py-10">Your Cart</h1>

      <div className="flex flex-col justify-center">
        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 font-inter">
            Your cart is empty
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 gap-4 md:gap-10">
            {/* Cart Items List */}
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                isSelected={selectedItems.includes(item.id)}
                onSelect={handleSelectItem}
              />
            ))}

            {/* Checkout Summary */}
            <Card>
              <CardHeader className="text-lg font-semibold text-center">
                Order Summary
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6 py-6">
                {/* Select All Checkbox */}
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="selectAllCheckbox"
                    checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                    onCheckedChange={(checked) => handleSelectAll(checked)}
                  />
                  <label
                    htmlFor="selectAllCheckbox"
                    className="text-sm font-medium"
                  >
                    Select All
                  </label>
                </div>

                {/* Total Price */}
                <p className="font-semibold text-gray-600 text-lg">
                  Total Price: ${totalPrice.toLocaleString()}
                </p>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  aria-label="Proceed to checkout"
                  className="bg-amber-500 px-6 py-2 rounded-lg text-white"
                >
                  Checkout
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
