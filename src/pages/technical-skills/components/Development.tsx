import { iconsDev, iconsDev2, iconsDev3 } from "../data/icons";

const Development = () => {
  const allIconsDev = [...iconsDev, ...iconsDev2, ...iconsDev3];
  return (
    <>
      <div className="h-82 font-medium flex flex-col justify-between md:h-105 lg:h-78">
        <p className="text-sm font-medium md:text-[22px] lg:mb-6">Desarrollo Web</p>
        <div className="hidden lg:flex lg:w-225 lg:h-62.5 lg:m-auto lg:flex-wrap lg:gap-10 lg:justify-evenly">
          {allIconsDev.map(({ id, name, url }) => (
              <figure
                className="w-20 h-26 flex flex-col items-center group"
                key={id}
              >
                <figcaption className="text-[16px] font-semibold group-hover:drop-shadow-orange transition-all duration-300">
                  {name}
                </figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-16.25 h-18.25 group-hover:drop-shadow-pink transition-all duration-300"
                />
              </figure>
            ))}
        </div>
        <div className="h-72 text-[11px] flex flex-col justify-around md:h-90 lg:hidden">
          <div className="w-78 h-19 flex justify-evenly gap-1.5 md:w-11/12 md:h-26 md:mx-auto md:mb-5">
            {iconsDev.map(({ id, name, url }) => (
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
          <div className="w-78 h-20 flex justify-center gap-1.5 md:w-11/12 md:h-26 md:mx-auto md:gap-x-15 md:mb-5">
            {iconsDev2.map(({ id, name, url }) => (
              <figure
                className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26 group"
                key={id}
              >
                <figcaption className="md:text-[16px] group-hover:drop-shadow-orange transition-all duration-300">
                  {name}
                </figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25 md:w-16 md:h-18 group-hover:drop-shadow-pink transition-all duration-300"
                />
              </figure>
            ))}
          </div>
          <div className="w-full h-20 flex justify-evenly gap-x-1.5 md:w-11/12 md:h-26 md:mx-auto">
            {iconsDev3.map(({ id, name, url }) => (
              <figure
                className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26 group"
                key={`design-web-${id}`}
              >
                <figcaption className="md:text-[16px] group-hover:drop-shadow-orange transition-all duration-300">
                  {name}
                </figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25 md:w-16 md:h-18 group-hover:drop-shadow-pink transition-all duration-300"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
