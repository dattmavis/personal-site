'use client';
import { useState, useEffect } from 'react';
import { readExif } from '@/utility/exif';

interface Photo {
  id: number;
  name: string;
  url: string;
  exif: any;
  hidden: boolean;
  shareUrl?: string;
}

export default function PhotoManager() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedExif, setSelectedExif] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('photos');
    if (saved) {
      setPhotos(JSON.parse(saved));
    }
  }, []);

  const onFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    const data = await readExif(f);
    setSelectedExif(data);
  };

  const upload = async () => {
    if (!file) return;
    // Normally we'd upload to S3 via the API, here we just create a local URL
    const url = URL.createObjectURL(file);
    const next: Photo = {
      id: Date.now(),
      name: file.name,
      url,
      exif: selectedExif,
      hidden,
    };
    const all = [...photos, next];
    setPhotos(all);
    localStorage.setItem('photos', JSON.stringify(all));
    setFile(null);
    setSelectedExif(null);
    setHidden(false);
  };

  const toggleHide = (id: number) => {
    const updated = photos.map(p =>
      p.id === id ? { ...p, hidden: !p.hidden } : p
    );
    setPhotos(updated);
    localStorage.setItem('photos', JSON.stringify(updated));
  };

  const createShare = async (id: number) => {
    const res = await fetch('/api/share', { method: 'POST' });
    const data = await res.json();
    const updated = photos.map(p =>
      p.id === id ? { ...p, shareUrl: data.url } : p
    );
    setPhotos(updated);
    localStorage.setItem('photos', JSON.stringify(updated));
  };

  return (
    <div>
      <h2>Photos</h2>
      <div>
        <input type="file" onChange={onFile} />
        {file && (
          <div>
            <pre style={{ maxHeight: 200, overflow: 'auto' }}>
              {JSON.stringify(selectedExif, null, 2)}
            </pre>
            <label>
              <input
                type="checkbox"
                checked={hidden}
                onChange={e => setHidden(e.target.checked)}
              />
              Hidden
            </label>
            <button onClick={upload}>Upload</button>
          </div>
        )}
      </div>

      <h3>Existing Photos</h3>
      <ul>
        {photos.map(p => (
          <li key={p.id}>
            <img src={p.url} alt={p.name} width={100} />
            <button onClick={() => toggleHide(p.id)}>
              {p.hidden ? 'Unhide' : 'Hide'}
            </button>
            <button onClick={() => createShare(p.id)}>Share</button>
            {p.shareUrl && (
              <a href={p.shareUrl} target="_blank" rel="noreferrer">
                Link
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
