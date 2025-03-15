"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import usePayment from "@/hooks/usePayment";
import Swal from "sweetalert2";

const PaymentForm = () => {
  // Add loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { payments } = usePayment();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [bookingId, setBookingId] = useState("");
  const [amount, setAmount] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("payment_method", paymentMethod);
    formData.append("trans_id", transactionId);
    formData.append("booking_id", bookingId);
    formData.append("amount", amount);
    formData.append("document", file);

    try {
      const response = await fetch("https://api.turagwaterfrontresort.com/api/make-payment/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        let errorMessage = "Payment submission failed";
        
        if (data) {
          errorMessage = Object.entries(data)
            .map(([key, value]) => `${key}: ${value.join(", ")}`)
            .join("\n");
        }

        Swal.fire({
          icon: "error",
          title: "Error",
          text: errorMessage,
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Payment submitted successfully!",
      });
      
      // Reset form
      setPaymentMethod("");
      setTransactionId("");
      setBookingId("");
      setAmount("");
      setFile(null);
      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred. Please try again.",
      });
      console.error("Error submitting payment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="paymentMethod">Payment Method</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent>
                {payments?.map((payment) => (
                  <SelectItem key={payment.id} value={payment.method_name.toLowerCase()}>
                    {payment.method_name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="transactionId">Transaction ID</Label>
            <Input
              id="transactionId"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter transaction ID"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bookingId">Booking ID</Label>
            <Input
              id="bookingId"
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              placeholder="Enter booking ID"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="file">Upload Document</Label>
          <Input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="cursor-pointer"
          />
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Payment"}
        </Button>
      </form>
    </Card>
  );
};

export default PaymentForm;
