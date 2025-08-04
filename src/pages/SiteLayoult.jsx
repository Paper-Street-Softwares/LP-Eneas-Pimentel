import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import Cta from "../components/sections/Cta";
import FooterSocial from "../components/sections/FooterSocial";

export default function SiteLayout({ section, mode }) {
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} mode={mode} />
      <Hero defaultHero={true} colorMode={colorMode} />
      {section && <div className="">{section}</div>}
      <Cta colorMode={colorMode} />
      <FooterSocial colorMode={colorMode} mode={mode} />
    </>
  );
}
