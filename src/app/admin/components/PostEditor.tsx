'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface Post {
  id: number;
  title: string;
  content: string;
  project: boolean;
}

export default function PostEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [project, setProject] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('posts');
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  const save = () => {
    const next: Post = { id: Date.now(), title, content, project };
    const all = [...posts, next];
    setPosts(all);
    localStorage.setItem('posts', JSON.stringify(all));
    setTitle('');
    setContent('');
    setProject(false);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>New Post</h2>
      <div>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={project}
            onChange={e => setProject(e.target.checked)}
          />
          Show in Projects
        </label>
      </div>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={save}>Save Post</button>

      <h3>Existing Posts</h3>
      <ul>
        {posts.map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
