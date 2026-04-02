import { iconsDesign } from "../data/icons";

const Design = () => {
  return (
    <div className="h-57 font-medium flex flex-col justify-between md:h-72 md:mb-10">
      <p className="text-sm md:text-[22px]">Diseño UX/UI</p>
      <div className="h-46 flex flex-wrap justify-evenly gap-x-6 text-[11px] md:w-3/4 md:gap-x-20 md:gap-y-7 md:mx-auto md:h-57">
        {iconsDesign.map(({ id, name, url }) => (
          <figure
            className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26 group"
            key={id}
          >
            <figcaption className="md:text-[16px] md:font-semibold md:group-hover:drop-shadow-orange transition-all duration-300">
              {name}
            </figcaption>
            <img
              src={url}
              alt={`icon-${name}`}
              className="w-11.5 h-13.25 md:w-16 md:h-18 md:group-hover:drop-shadow-pink transition-all duration-300"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};
export default Design;
