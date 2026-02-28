import { iconsDev, iconsDev2, iconsDev3 } from "../data/icons";

const Development = () => {
  return (
    <>
      <div className="h-82 flex flex-col justify-between">
        <p className="text-sm">Desarrollo Web</p>
        <div className="h-72 text-[11px] flex flex-col justify-around">
          <div className="w-78 h-19 flex justify-evenly gap-1.5">
            {iconsDev.map(({ id, name, url }) => (
              <figure className="w-14 h-20 flex flex-col items-center" key={id}>
                <figcaption>{name}</figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25"
                />
              </figure>
            ))}
          </div>
          <div className="w-78 h-20 flex justify-center gap-1.5">
            {iconsDev2.map(({ id, name, url }) => (
              <figure className="w-14 h-20 flex flex-col items-center" key={id}>
                <figcaption>{name}</figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25"
                />
              </figure>
            ))}
          </div>
          <div className="w-full h-20 flex justify-evenly gap-x-1.5">
            {iconsDev3.map(({ id, name, url }) => (
              <figure
                className="w-14 h-20 flex flex-col items-center "
                key={`design-web-${id}`}
              >
                <figcaption>{name}</figcaption>
                <img
                  src={url}
                  alt={`icon-${name}`}
                  className="w-11.5 h-13.25"
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
