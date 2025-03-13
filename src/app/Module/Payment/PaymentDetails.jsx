"use client";
import { Card } from "@/components/ui/card";
import usePayment from "@/hooks/usePayment";
import Image from "next/image";

const PaymentDetails = () => {
  const { payments, loading, error } = usePayment();
  return (
    <Card className="p-4">
      <h2 className="text-xl font-medium mb-3">Make Payment here:</h2>
      {loading && (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      {error && <p>Error: {error.detail}</p>}
      {payments &&
        payments.map((payment) => (
          <div key={payment.id} className="mt-3 border p-2 rounded-md">
            <div className="flex justify-center">
              <Image
                className=""
                width={100}
                height={40}
                alt={payment.method_name}
                src={`https://api.turagwaterfrontresort.com${payment?.banner}`}
              />
            </div>

            <div className="mt-3 bg-gray-100 p-1 md:p-3 rounded-md flex justify-between items-center gap-2 ">
              <div>
                <h3 className="text-[14px]">
                  <span className="font-semibold">Acount No :</span>{" "}
                  {payment?.account_no}
                </h3>
                <h3 className="text-[14px]">
                  <span className="font-semibold">Acount Name :</span>{" "}
                  {payment?.account_holder}
                </h3>
                <h3 className="text-[14px]">
                  <span className="font-semibold">Acount Type :</span>{" "}
                  {payment?.account_type}
                </h3>
                <h3 className="text-[14px]">
                  <span className="font-semibold">IFSC Code :</span>{" "}
                  {payment?.ifsc_code}
                </h3>
              </div>
              <Image
                className="max-h-max"
                width={100}
                height={100}
                alt={payment.method_name}
                src={`https://api.turagwaterfrontresort.com${payment?.qrcode}`}
              />
            </div>
          </div>
        ))}
    </Card>
  );
};

export default PaymentDetails;
