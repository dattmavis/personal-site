'use client';
import { useParams } from 'next/navigation';

export default function SharePage() {
  const params = useParams();
  const token = params.token as string;
  return (
    <div>
      <h1>Shared Photo</h1>
      <p>This is a placeholder page for token: {token}</p>
    </div>
  );
}
