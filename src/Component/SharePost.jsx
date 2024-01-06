// Post.js

import React from 'react';
import { useParams } from "react-router-dom";
const Post = ({ post }) => {
  const params = useParams();

const sharePost = async (post) => {
  let id =params.id?'': "/"+post.id;
    try {
      if (navigator.share) {
        await navigator.share({
          url: window.location.href + id ,
        });
      } else {
        // Handle sharing through other methods if the Web Share API is not available
        alert('Web Share API is not supported in your browser.');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
  return (
    <div className="ms-auto"> 
      {/* Add a "Share" button */}
      <button style={{border:"none"}} onClick={() => sharePost(post)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
</svg></button>
    </div>
  );
};

export default Post;

