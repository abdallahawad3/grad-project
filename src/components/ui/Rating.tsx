import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export function RatingComponent({
  isReadOnly,
  ratingVal,
}: {
  isReadOnly: boolean;
  ratingVal?: number;
}) {
  const [rating, setRating] = useState(ratingVal || 0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div className="flex">
      <Rating
        onClick={handleRating}
        initialValue={rating}
        SVGstyle={{ display: "inline-block", width: "20px", height: "20px" }}
        className="!flex !cursor-pointer"
        allowFraction={true}
        size={20}
        SVGclassName="!inline-block"
        readonly={isReadOnly}
        SVGstrokeColor="#FF8A00"
        fillColor="#FF8A00"
      />
    </div>
  );
}
