import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };

    postList();
  }, []);
  return (
    <div>
      <h1>Otp component</h1>

      <Pagination posts={posts} />
    </div>
  );
}
