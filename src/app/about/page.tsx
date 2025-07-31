import TopBanner from "./TopBanner";
import Advice from "./Advice";
import GetToKnow from "./GetToKnow";
import Features from "./Features";

function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-12">
      <TopBanner />
      <Advice />
      <GetToKnow />
      <Features />
    </main>
  );
}

export default AboutPage;
