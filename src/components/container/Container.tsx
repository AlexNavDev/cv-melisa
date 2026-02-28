interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <section className="w-82.5 min-h-160 mx-auto px-2 font-robot border-2 border-text-orange border-t-0">
      <div className="py-12.5 flex flex-col justify-evenly  text-text-orange">
        {children}
      </div>
    </section>
  );
};

export default Container;
