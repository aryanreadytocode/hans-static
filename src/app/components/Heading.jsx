export default function Heading(props) {
  return (
    <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold">
      {props.data}
    </h1>
  );
}
