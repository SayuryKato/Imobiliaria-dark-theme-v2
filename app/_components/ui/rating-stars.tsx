import { Star } from "lucide-react";

type RatingStarsProps = {
  rating: number;
  totalStars?: number;
  showNumber?: boolean;
};

export const RatingStars = ({
  rating,
  totalStars = 5,
  showNumber = true,
}: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {/* Cheias */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className="text-primary fill-current stroke-0"
          />
        ))}

        {/* Meia */}
        {hasHalfStar && (
          <Star className="text-primary fill-current opacity-50 stroke-0" />
        )}

        {/* Vazias */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className="text-gray-300" />
        ))}
      </div>

      {showNumber && (
        <span className="text-sm text-gray-500">{rating.toFixed(1)}</span>
      )}
    </div>
  );
};
