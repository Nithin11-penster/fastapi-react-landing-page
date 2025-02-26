import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Features = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["features"], 
    queryFn: async () => {
      const response = await axios.get("http://127.0.0.1:8000/features");
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {data.map((feature, index) => (
          <div key={index} className="p-6 border rounded shadow text-center">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
