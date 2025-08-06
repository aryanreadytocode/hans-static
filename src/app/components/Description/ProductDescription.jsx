
export default function ProductDescription({description}) {
console.log("Description: ", description);
  return (
    <div>
      <h1 className="text-md md:text-lg lg:text-xl font-semibold mb-2 mt-5">Description</h1>
      {
        <div className="text-md">
          {description}
        </div>
      }
    </div>
  );
}
