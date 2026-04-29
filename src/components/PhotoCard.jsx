import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { PiDownloadSimple } from "react-icons/pi";

const PhotoCard = ({ photo }) => {
  console.log(photo);

  return (
    <Card className="border rounded-xl ">
      <div className=" relative w-full aspect-square">
        <Image
          src={photo.imageUrl}
          fill
          sizes=" (max-width: 768px) 100vw , (max-width: 1200px) 50vw, 33vw"
          alt={photo.title}
          className=" rounded-xl object-cover "
        />

        <Chip size="sm" className=" absolute right-2 top-2  ">
          {photo.category}
        </Chip>
      </div>
      <div>
        <h2 className=" font-medium ">{photo.title}</h2>
      </div>

      <div className=" flex items-center justify-between">
        <div className=" flex gap-2 items-center">
          <p>
            <FaHeart />
          </p>
          <p>{photo.likes}</p>
        </div>
        <div className=" flex gap-2 items-center">
          <p>
            <PiDownloadSimple />
          </p>
          <p>{photo.downloads}</p>
        </div>
      </div>

      <Button variant="outline" className="w-full">
        view
      </Button>
    </Card>
  );
};

export default PhotoCard;
