export default function ProductApply({ howToUse }) {
  console.log("How to use: ", howToUse)
  return (
    <div key={howToUse}>
      <div className="text-md md:text-lg lg:text-xl font-semibold mb-2 mt-5">How to apply: </div>
      {
        howToUse.map((item, index) => (
          console.log("Item: ", item.useFor),
          <div>
            {item.useFor && (<p className="text-md font-bold" key={index}>{item.useFor}</p>)}
            {item.howTo && (
              <ol className="list-decimal ml-5">
                {item.howTo.map((subItem, subIndex) => (
                  <li key={`${index}-${subIndex}`} className="text-md">
                    {subItem}
                  </li>
                ))}
              </ol>
            )}
          </div>

        ))
      }
    </div>
  );
}
