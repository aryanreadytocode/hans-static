export default function HyperLink(props) {
  return (
    <div>
      <a
        className="text-[0.4rem] sm:text-sm md:text-base lg:text-base xl:text-l 2xl:text-xl text-blue-600"
        href={props.link}
      >
        {props.data}
      </a>
    </div>
  );
}
