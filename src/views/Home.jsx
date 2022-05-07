import React, { useEffect, useState } from 'react';
import { createEntry, fetchEntries } from '../utils/entries';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');
  const handleSubmit = async () => {
    const { data } = await createEntry(entry);
    setEntries((prev) => [...prev, data]);
  };
  useEffect(() => {
    fetchEntries()
      .then((results) => setEntries(results))
      .finally(setLoading(false));
  }, []);
  return (
    <div>
      Home
      <h2>Entries</h2>
      <label htmlFor="entrybox">
        Entry:{' '}
        <input
          id="entrybox"
          type="text"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          {' '}
          ADD
        </button>
      </label>
      {loading ? (
        <p>loading..</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>{entry.content}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
