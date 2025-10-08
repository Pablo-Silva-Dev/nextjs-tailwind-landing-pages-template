import { avatarImagePlaceholder } from "@/mocks/index";
import clsx from "clsx";

interface AvatarImageProps {
  className?: string;
  imageUrl?: string;
}

const AvatarImage = ({ className, imageUrl }: AvatarImageProps) => {
  return (
    <img
      src={imageUrl || avatarImagePlaceholder}
      alt="Avatar"
      className={clsx(
        "w-full h-full object-cover rounded-full aspect-square",
        className
      )}
    />
  );
};

export default AvatarImage;
