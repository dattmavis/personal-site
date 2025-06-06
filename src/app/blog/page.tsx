'use client';
import { useEffect, useState } from 'react';

interface Post { id: number; title: string; content: string; project: boolean }

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('posts');
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map(p => (
        <article key={p.id} style={{ marginBottom: '2rem' }}>
          <h2>{p.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: p.content }} />
        </article>
      ))}
    </div>
  );
}
