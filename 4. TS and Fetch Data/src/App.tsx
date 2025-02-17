import { type ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import { get } from "./assets/util/http";
import fetchingImg from "./assets/data-fetching.png";

type RawDataBlogpost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPost() {
      const data = (await get(
        "https://jsonplaceholder.typicode.com/posts"
      )) as RawDataBlogpost[];

      const blogPosts: BlogPost[] = data.map((rowPost) => {
        return {
          id: rowPost.id,
          title: rowPost.title,
          text: rowPost.body,
        };
      });

      setFetchedPosts(blogPosts);
    }

    fetchPost();
  }, []);

  let content: ReactNode = fetchedPosts ? (
    <BlogPosts posts={fetchedPosts} />
  ) : (
    <p>spiner</p>
  );

  return (
    <main>
      <img src={fetchingImg} alt="Abstract image" />
      {content}
    </main>
  );
}

export default App;
