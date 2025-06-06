'use client';
import { useEffect, useState } from 'react';

interface Post { id: number; title: string; content: string; project: boolean }

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('posts');
    if (saved) {
      const all: Post[] = JSON.parse(saved);
      setPosts(all.filter(p => p.project));
    }
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      {posts.length === 0 && <p>No project posts yet.</p>}
      {posts.map(p => (
        <article key={p.id} style={{ marginBottom: '2rem' }}>
          <h2>{p.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: p.content }} />
        </article>
      ))}
    </div>
  );
}
