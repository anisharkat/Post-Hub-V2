import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";


const Home = () => {
  return (
    <main className="container mx-auto">
      <Navbar/>
      <div className="h-auto w-96 block justify-center items-center mx-auto my-auto">
      <Posts />
      </div>
    </main>
  );
};

export default Home;