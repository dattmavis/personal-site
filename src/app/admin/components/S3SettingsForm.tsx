'use client';
import { useState, useEffect } from 'react';

export default function S3SettingsForm() {
  const [bucket, setBucket] = useState('');
  const [region, setRegion] = useState('');
  const [accessKeyId, setAccessKeyId] = useState('');
  const [secretAccessKey, setSecretAccessKey] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('s3');
    if (saved) {
      const cfg = JSON.parse(saved);
      setBucket(cfg.bucket || '');
      setRegion(cfg.region || '');
      setAccessKeyId(cfg.accessKeyId || '');
      setSecretAccessKey(cfg.secretAccessKey || '');
    }
  }, []);

  const save = () => {
    localStorage.setItem(
      's3',
      JSON.stringify({ bucket, region, accessKeyId, secretAccessKey })
    );
    alert('Saved S3 settings');
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>S3 Settings</h2>
      <div>
        <label>Bucket:</label>
        <input value={bucket} onChange={e => setBucket(e.target.value)} />
      </div>
      <div>
        <label>Region:</label>
        <input value={region} onChange={e => setRegion(e.target.value)} />
      </div>
      <div>
        <label>Access Key ID:</label>
        <input
          value={accessKeyId}
          onChange={e => setAccessKeyId(e.target.value)}
        />
      </div>
      <div>
        <label>Secret Access Key:</label>
        <input
          type="password"
          value={secretAccessKey}
          onChange={e => setSecretAccessKey(e.target.value)}
        />
      </div>
      <button onClick={save}>Save</button>
    </div>
  );
}
