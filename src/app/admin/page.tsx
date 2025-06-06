'use client';
import dynamic from 'next/dynamic';
import Editor from './Editor';

export default function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage your blog posts and photos here.</p>
      <Editor />
    </div>
  );
}
