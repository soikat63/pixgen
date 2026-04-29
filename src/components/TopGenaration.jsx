import PhotoCard from "./PhotoCard";

const TopGenaration = async () => {
  const res = await fetch("https://pixgen-dun.vercel.app/data.json");
  const photos = await res.json();
  const topPhotos = photos.slice(0, 8);
//   console.log(topPhotos);

  return (
    <div>
      <h1 className=" text-2xl font-bold my-5  "> Top generation Photo</h1>

      <div className=" grid grid-cols-4 gap-2">
        {topPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} ></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default TopGenaration;
