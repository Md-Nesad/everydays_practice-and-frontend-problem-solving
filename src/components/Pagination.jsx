import { useState } from "react";

export default function Pagination({ posts }) {
  const [page, setPage] = useState(1);
  const totalPage = posts.length / 10;

  return (
    <div>
      {posts.slice((page - 1) * 10, page * 10).map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

      <footer
        style={{ display: "flex", justifyContent: "center", gap: "10px" }}
      >
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Prev
        </button>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button key={index} onClick={() => setPage(index + 1)}>
              {index + 1}
            </button>
          );
        })}
        <button
          disabled={page === totalPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </footer>
    </div>
  );
}
