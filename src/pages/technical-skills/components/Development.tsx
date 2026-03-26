import { iconsDev, iconsDev2, iconsDev3 } from "../data/icons";

const Development = () => {
  return (
    <>
      <div className="h-82 font-medium flex flex-col justify-between md:h-105 ">
        <p className="text-sm font-medium md:text-[22px]">Desarrollo Web</p>
        <div className="h-72 text-[11px] flex flex-col justify-around md:h-90">
          <div className="w-78 h-19 flex justify-evenly gap-1.5 md:w-11/12 md:h-26 md:mx-auto  md:mb-5">
            {iconsDev.map(({ id, name, url }) => (
              <figure
                className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26"
                key={id}
              >
                <figcaption className="md:text-[16px] md:font-semibold">
                  {name}
                </figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25 md:w-16 md:h-18"
                />
              </figure>
            ))}
          </div>
          <div className="w-78 h-20 flex justify-center gap-1.5 md:w-11/12 md:h-26 md:mx-auto md:gap-x-15 md:mb-5">
            {iconsDev2.map(({ id, name, url }) => (
              <figure
                className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26"
                key={id}
              >
                <figcaption className="md:text-[16px]">{name}</figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25 md:w-16 md:h-18"
                />
              </figure>
            ))}
          </div>
          <div className="w-full h-20 flex justify-evenly gap-x-1.5 md:w-11/12 md:h-26 md:mx-auto">
            {iconsDev3.map(({ id, name, url }) => (
              <figure
                className="w-14 h-20 flex flex-col items-center md:w-20 md:h-26"
                key={`design-web-${id}`}
              >
                <figcaption className="md:text-[16px]">{name}</figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25 md:w-16 md:h-18"
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
