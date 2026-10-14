import { useState } from 'react';
function LikeButton({ initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}
export default LikeButton;