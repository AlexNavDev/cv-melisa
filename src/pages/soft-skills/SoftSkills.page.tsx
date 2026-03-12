import { useState } from "react";
import Container from "@/components/container/Container";
import Title from "@/components/title/Title";
import IMGCLICK from "@assets/soft-skills/click.png";
import { dataSoftSkills } from "./data/dataSoftSkills";

const DELAY_PER_CARD = 120; // ms de delay entre cada tarjeta

const SoftSkills = () => {
  const [flipped, setFlipped] = useState(
    Array(dataSoftSkills.length).fill(false),
  );

  const handleClick = (clickedIndex: number) => {
    // Si todas están volteadas → resetear todas
    if (flipped.every(Boolean)) {
      setFlipped(Array(dataSoftSkills.length).fill(false));
      return;
    }

    // Voltear cada tarjeta con un delay según su distancia a la clickeada
    dataSoftSkills.forEach((_, i) => {
      const distance = Math.abs(i - clickedIndex);
      setTimeout(() => {
        setFlipped((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, distance * DELAY_PER_CARD);
    });
  };

  return (
    <Container>
      <Title title="Habilidades Blandas" />

      <div className="h-96">
        <div
          className="h-80 relative flex justify-center font-roboto"
          title="Clickeame"
        >
          {dataSoftSkills.map((card, i) => (
            <div
              key={i}
              onClick={() => handleClick(i)}
              className={`size-21 absolute ${card.position}`}
              style={{ perspective: "600px", cursor: "pointer" }}
            >
              {/* Contenedor que rota en Y */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRENTE: imagen */}
                <div className="w-full h-full absolute backface-hidden rounded-md bg-linear-to-br from-text-pink to-bg-pink/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={IMGCLICK}
                    alt="click"
                    className="size-10 object-cover backface-hidden rounded-md"
                  />
                </div>

                {/* REVERSO: texto */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  className="rounded-md border-[1.47px] bg-linear-to-br from-text-orange to-text-orange-dark/30 flex items-center justify-center text-center"
                >
                  <p className="text-text-gray text-xs tracking-wider px-1">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SoftSkills;
