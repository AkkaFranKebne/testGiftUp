import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchForm() {
  const [purchaseId, setPurchaseId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    window.location.href = `/purchase/${purchaseId}`;
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Enter Purchase ID"
          value={purchaseId}
          onChange={(e) => setPurchaseId(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
}
