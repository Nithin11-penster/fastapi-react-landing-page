import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Testimonials = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["testimonials"], 
    queryFn: async () => {
      const response = await axios.get("http://127.0.0.1:8000/testimonials");
      return response.data;
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
      <div className="mt-6 space-y-4">
        {data.map((testimonial, index) => (
          <div key={index} className="p-4 border rounded shadow text-center">
            <p className="italic">&ldquo;{testimonial.feedback}&rdquo;</p>
            <p className="font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
