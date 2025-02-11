import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface GiftCard {
  id: string;
  name: string;
  price: number;
}

interface CheckoutFormProps {
  giftCard: GiftCard;
}

export default function CheckoutForm({ giftCard }: CheckoutFormProps) {
  const [deliveryOption, setDeliveryOption] = useState("virtual");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implement checkout logic using Medusa and GiftUp! APIs
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Gift Card: {giftCard.name}
        </h2>
        <p>Price: {giftCard.price} SEK</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">Delivery Options</h3>
        <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="virtual" id="virtual" />
            <Label htmlFor="virtual">Virtual (Email)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="physical" id="physical" />
            <Label htmlFor="physical">Physical (Mail)</Label>
          </div>
        </RadioGroup>
      </div>
      {deliveryOption === "physical" && (
        <div className="space-y-2">
          <Input placeholder="Full Name" required />
          <Input placeholder="Address" required />
          <Input placeholder="City" required />
          <Input placeholder="Postal Code" required />
        </div>
      )}
      <Input placeholder="Email" type="email" required />
      <Button type="submit">Complete Purchase</Button>
    </form>
  );
}
