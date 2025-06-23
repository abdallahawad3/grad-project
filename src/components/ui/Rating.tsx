import { Rating } from "react-simple-star-rating";

export function RatingComponent({
  isReadOnly,
  ratingVal,
  handleRating,
}: {
  isReadOnly: boolean;
  ratingVal: number;
  handleRating?: (rate: number) => void;
}) {
  return (
    <div className="flex">
      <Rating
        onClick={handleRating}
        initialValue={ratingVal}
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
