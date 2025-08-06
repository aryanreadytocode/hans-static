export default function ProductFeatures({ features }) {
    console.log("Features: ", features);
  return (
    <div>
      <div className="text-md md:text-lg lg:text-xl font-semibold mb-2 mt-5">Features: </div>
      {features.map((feature, index) =>
        feature.split(" - ").map((item, i) => {
          if (i === 0) {
            return (
              <p className="text-md font-bold" key={index}>
                {item} -{" "}
              </p>
            );
          } else {
            return (
              <p className="text-md" key={index+1}>
                {item}
              </p>
            );
          }
        })
      )}
    </div>
  );
}
