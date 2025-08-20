import content from "../../content/content";

export default function AboutFading({ colorMode = "default" }) {
  // Classes de tema
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };

  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <div className="relative">
      {/* Texto com mask (funciona nos browsers modernos) */}
      <div
        className={`
      font-secondFont text-paragraph4 text-white
      [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
      [mask-repeat:no-repeat]
      [mask-size:100%_100%]
      [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
      [-webkit-mask-repeat:no-repeat]
      [-webkit-mask-size:100%_100%]
    `}
      >
        {content.texts.about.paragraph}
      </div>

      {/* Fallback overlay (garante em navegadores antigos) */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-b from-transparent to-bgSectionDark pointer-events-none"></div>
    </div>
  );
}
