import { useState } from 'react';

function StatusBadge({ initialStatus = 'Offline' }) {
  const [status, setStatus] = useState(initialStatus);

  const toggleStatus = () => {
    setStatus((prev) => (prev === 'Online' ? 'Offline' : 'Online'));
  };

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}

export default StatusBadge;