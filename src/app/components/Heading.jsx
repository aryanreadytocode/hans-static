export default function Heading(props) {
  return (
    <h1
      className="text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold truncate"
    >
      {props.data}
    </h1>

  );
}
