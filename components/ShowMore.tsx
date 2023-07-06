"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateFilterParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateFilterParams("limit", `${newLimit}`);

    router.push(newPathName);
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {!isNext && (
            <CustomButton 
                label="Show More"
                type="button"
                mainClass="bg-primary-blue rounded-full text-white px-5 py-2"
                handleOnClicked={handleNavigation}
            />
        )}
    </div>
  )
};

export default ShowMore;
