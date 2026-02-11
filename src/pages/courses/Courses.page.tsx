import Title from "@/components/title-component/Title";

const Courses = () => {
  return (
    <section className="w-82.5 mx-auto px-2 border-2 border-text-orange border-t-0 ">
      <Title title="Estudios" />

      <div className="w-78 h-28 flex items-center justify-between font-roboto text-text-orange">
        <div className="w-12.5 h-10 relative flex items-center">
          <span className="w-1/5 h-10 absolute top-0 bottom-0 -z-10 bg-text-pink"></span>
          <p className="text-3xl  z-10">20</p>
        </div>
        <div></div>
        <div className="w-25 h-28 flex flex-col justify-between">
          <div>
            <p className="font-medium">Photoshop</p>
            <p className="font-light">Coderhouse</p>
          </div>
          <div>
            <p className="font-medium">Ilustrator</p>
            <p className="font-light">Coderhouse</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Courses;
