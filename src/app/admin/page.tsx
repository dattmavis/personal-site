'use client';
import S3SettingsForm from './components/S3SettingsForm';
import PostEditor from './components/PostEditor';
import PhotoManager from './components/PhotoManager';

export default function Admin() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage your blog posts and photos here.</p>
      <S3SettingsForm />
      <PostEditor />
      <PhotoManager />
    </div>
  );
}
