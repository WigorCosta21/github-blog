import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

const Home = () => {
  return (
    <>
      <Profile />
      <Search />
      <PostCard />
    </>
  );
};

export default Home;
