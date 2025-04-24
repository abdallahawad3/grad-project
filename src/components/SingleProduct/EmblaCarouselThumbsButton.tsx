type ThumbProps = {
  index: number;
  selected: boolean;
  onClick: () => void;
  src: string;
};

export const Thumb = ({ index, selected, onClick, src }: ThumbProps) => {
  return (
    <button
      onClick={onClick}
      className={`embla-thumbs__slide ${selected ? "is-selected" : ""}`}
      type="button"
    >
      <img
        className="embla-thumbs__slide__img"
        src={src}
        alt={`Thumbnail ${index + 1}`}
      />
    </button>
  );
};
