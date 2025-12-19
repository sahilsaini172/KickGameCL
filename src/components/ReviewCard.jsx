import { BadgeCheck, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";

export default function ReviewCard({
  stars = 0,
  title = "title",
  review = "No issues",
  user = "john doe",
  verified = true,
  days = 2,
}) {
  const initials = user
    .split(" ")
    .map((part) => part[0])
    .join(""); // "JD"

  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  function handleLike() {
    if (like === 1) {
      // Already liked, so reset
      setLike(0);
    } else {
      // Not liked yet, so like and remove dislike
      setLike(1);
      setDislike(0);
    }
  }

  function handleDislike() {
    if (dislike === 1) {
      // Already disliked, so reset
      setDislike(0);
    } else {
      // Not disliked yet, so dislike and remove like
      setDislike(1);
      setLike(0);
    }
  }

  return (
    <article className="flex flex-col shrink-0 h-80 bg-surface rounded-sm p-4 w-full gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: stars || 0 }).map((_, i) => (
            <Star fill="bg-secondary" />
          ))}
        </div>
        <span className="text-secondary/50 text-xs">{days} days ago</span>
      </div>
      <h2 className="font-bold">{title}</h2>
      <p className="grow">{review}</p>
      <div className="flex items-center border-t border-t-secondary/25 gap-2">
        <div className="size-12 bg-primary my-2 rounded-full flex items-center justify-center uppercase text-sm font-bold">
          {initials}
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <p>{user}</p>
          <p className="flex items-center gap-1">
            {verified && (
              <span className="flex items-center">
                Verified Buyer <BadgeCheck size={16} />
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center text-secondary/50 text-sm w-full justify-end gap-2">
        Was this helpful?
        <ThumbsUp
          onClick={handleLike}
          fill="bg-secondary/50"
          size={16}
          className="text-surface"
        />
        {like}
        <ThumbsDown
          onClick={handleDislike}
          fill="bg-secondary/50"
          size={16}
          className="text-surface"
        />
        {dislike}
      </div>
    </article>
  );
}
