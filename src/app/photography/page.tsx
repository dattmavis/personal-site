'use client';
import { useEffect, useState } from 'react';

interface Photo { id: number; name: string; url: string; exif: any; hidden: boolean }

export default function Page() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const saved = localStorage.getItem('photos');
    if (saved) {
      const all: Photo[] = JSON.parse(saved);
      setPhotos(all.filter(p => !p.hidden));
    }
  }, []);

  return (
    <div>
      <h1>Photography</h1>
      {photos.length === 0 && <p>No photos uploaded.</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {photos.map(p => (
          <img key={p.id} src={p.url} alt={p.name} width={200} />
        ))}
      </div>
    </div>
  );
}
