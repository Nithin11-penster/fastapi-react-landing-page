import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Hero = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["hero"], 
    queryFn: async () => {
      const response = await axios.get("http://127.0.0.1:8000/hero"); 
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="text-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-lg text-gray-700">{data.subtitle}</p>
      <a
        href={data.cta_link}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded inline-block"
      >
        {data.cta_text}
      </a>
    </section>
  );
};

export default Hero;
