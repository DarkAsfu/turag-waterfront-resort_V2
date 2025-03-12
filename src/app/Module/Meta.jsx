'use client'
import useMetadata from "@/hooks/useMetadata";

const Meta = ({title, description = "A resort by nature"}) => {
  const metadata = useMetadata(title, description);
  return <div>{metadata}</div>;
};

export default Meta;
