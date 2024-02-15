import { useEffect, useState } from "react";
import { fetchComments } from "../../API/fetchComments";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const json = await fetchComments(postId);
      if (!ignore) {
        setComments(json);
      }
    };
    startFetching();
    return () => {
      ignore = true;
    };
  }, [postId]);
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
};

export default Comments;
