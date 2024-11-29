import { useState, useEffect } from 'react';

const SimpleDataFetch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then((res)=>res.json()).then(data => {
        setPosts(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      {posts.map(post => (
        <div className="border p-4 mb-4 rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}

    </div>
    // <>{posts}</>
  );
};

export default SimpleDataFetch;