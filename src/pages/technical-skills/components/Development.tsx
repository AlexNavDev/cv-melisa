import { iconsDev, iconsDev2 } from "../data/icons";

const Development = () => {
  console.log(iconsDev2);
  return (
    <>
      <div className="h-82 flex flex-col justify-between">
        <p className="text-sm">Desarrollo Web</p>
        <div className="h-72 flex flex-wrap justify-evenly gap-x-1.5 text-[11px]">
          {iconsDev.map(({ id, name, url }) => (
            <figure className="w-14 h-20 flex flex-col items-center " key={id}>
              <figcaption>{name}</figcaption>
              <img src={url} alt={`icon-${name}`} className="w-11.5 h-13.25" />
            </figure>
          ))}
          <div className="w-full  flex justify-evenly ">
            {iconsDev2.map(({ id, name, url }) => (
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
