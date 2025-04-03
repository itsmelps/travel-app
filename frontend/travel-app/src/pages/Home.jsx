import FeatureCard from "../components/FeatureCard";

const categoryData = [
  {
    img: "https://plus.unsplash.com/premium_photo-1674940593973-f520ef5054bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    header: "Calculated Weather",
    subheader: "Built Wicket longer admire do barton vanity itself do in it",
  },
];

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold my-10">Welcome to the Home Page</h1>
      <FeatureCard category={categoryData} />
    </div>
  );
};