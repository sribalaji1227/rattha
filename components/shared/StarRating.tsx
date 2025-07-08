import { yellowStarIcon, halfStarIcon, emptyStarIcon } from "@/constants/assets";
import { StarRatingProps } from "@/types/common";
import Image from "next/image";
import { useState } from "react";

const StarRating = (props: StarRatingProps) => {
    const { rating } = props;

    const [hover, setHover] = useState<number | null>(null);
    
    const getStarIcon = (index: number): string => {
        const starValue = index + 1;
        if (hover !== null) {
            return hover >= starValue ? yellowStarIcon : emptyStarIcon;
        } else {
            if (rating >= starValue) {
                return yellowStarIcon;
            } else if (rating >= starValue - 0.5) {
                return halfStarIcon;
            } else {
                return emptyStarIcon;
            }
        }
    };

    return (
        <p className="flex items-center text-black mb-[15px]">
            {rating.toFixed(1)}&nbsp;
            {Array.from({ length: 5 }).map((_, i) => (
                <Image
                    key={i}
                    src={getStarIcon(i)}
                    width={16}
                    height={16}
                    alt="star"
                    onMouseEnter={() => setHover(i + 1)}
                    onMouseLeave={() => setHover(null)}
                />
            ))}
        </p>
    )

}

export default StarRating;