import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GiftCard {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface GiftCardListProps {
  giftCards: GiftCard[];
}

export default function GiftCardList({ giftCards }: GiftCardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {giftCards.map((card) => (
        <Card key={card.id}>
          <CardHeader>
            <CardTitle>{card.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src={card.image || "/placeholder.svg"}
              alt={card.name}
              className="w-full h-48 object-cover"
            />
            <p className="mt-2">Price: {card.price} SEK</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <a href={`/gift-card/${card.id}`}>View Details</a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
