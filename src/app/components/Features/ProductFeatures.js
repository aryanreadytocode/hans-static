export default function ProductFeatures({ features }) {
    console.log("Features: ", features);
  return (
    <div>
      <h1>features: </h1>
      {features.map((feature, index) =>
        feature.split(" - ").map((item, i) => {
          if (i === 0) {
            return (
              <p className="text-lg font-bold" key={index}>
                {item} -{" "}
              </p>
            );
          } else {
            return (
              <p className="text-md" key={index}>
                {item}
              </p>
            );
          }
        })
      )}
    </div>
  );
}
