import Design from "./components/Design";
import Development from "./components/Development";
import Title from "./components/Title";

const TechnicalSkills = () => {
  return (
    <>
      <section className="w-82.5 h-200 flex flex-col justify-center mx-auto px-2 font-roboto border-2 border-text-orange border-t-0 ">
        <div className="h-166 flex flex-col justify-evenly  text-text-orange">
          <Title />
          <Design />
          <Development />
        </div>
      </section>
    </>
  );
};
export default TechnicalSkills;
