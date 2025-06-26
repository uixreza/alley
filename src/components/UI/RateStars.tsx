import { RatingStar } from "rating-star";

export default function RateStars({ rate }: { rate: string }) {
  // const [rating, setRating] = useState(rate);

  // const onRatingChange = (score) => {
  //   setRating(score);
  // };

  return (
    <RatingStar
      clickable
      maxScore={5}
      id="123"
      rating={Number(rate)}
      size={20}
      // onRatingChange={onRatingChange}
    />
  );
}
