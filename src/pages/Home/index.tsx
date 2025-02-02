import { PostCard } from "./components/PostCard";
import { Profile } from "./components/Profile";
import { SearchIssues } from "./components/SearchIssues";

const Home = () => {
  return (
    <>
      <Profile />
      <SearchIssues />
      <PostCard />
    </>
  );
};

export default Home;
