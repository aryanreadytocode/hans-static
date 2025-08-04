export default function ProductApply({howToUse}) {
  console.log("How to use: ", howToUse)
  return (
    <div>
      <h1>How to apply: </h1>
      <ol>
        {howToUse.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}
