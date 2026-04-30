const PhotoDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://pixgen-dun.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  console.log(photo);

    return <div>PhotoDetails
      
        
        <h3>{ photo.title}</h3>
        <p>{ photo.prompt}</p>
  </div>;
};

export default PhotoDetails;
