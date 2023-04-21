'use client'

// import { useRouter, useSearchParams } from "next/navigation";
// import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
    icon: IconType,
    label: string;
    selected?: boolean;
  }

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon,label,selected
}) => {
    return (
        <div
            
        >

        </div>
    )
}

export default CategoryBox;