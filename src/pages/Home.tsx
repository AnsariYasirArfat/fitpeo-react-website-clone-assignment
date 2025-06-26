import BreakdownSection from "@/components/home/BreakdownSection";
import DeclarationSection from "@/components/home/DeclarationSection";
import DesignDeclareUK from "@/components/home/DesignDeclareUK";
import DonateSection from "@/components/home/DonateSection";
import EightActsSection from "@/components/home/EightActsSection";
import LatestSection from "@/components/home/LatestSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Home = () => {

  return (
    <>
      <DesignDeclareUK/>
      <BreakdownSection/>
      <DonateSection/>
      <EightActsSection/>
      <DeclarationSection/>
      <LatestSection/>
      <NewsletterSection/>
    </>
  );
};

export default Home;
