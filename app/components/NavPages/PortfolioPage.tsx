import ProjectComponent from "../ProjectComponent";
import UnderLine from "../Underline";

export default function PortfolioPage() {
  return (
    <div>
      <div className="poppins-semibold text-3xl">Portfolio</div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectComponent image="voltex.JPG" heading="Voltex - Self Hosted Paas" description="Devops" link="https://github.com/mohithingorani/Platform-as-a-Service" />
        <ProjectComponent image="metaverse.JPG" heading="Matrix - 2D Metaverse" description="Full Stack" link="https://github.com/mohithingorani/2D-METAVERSE" />
        <ProjectComponent image="social.JPG" heading="UnivoChat - Social Network" description="Full Stack" link="https://github.com/mohithingorani/SOCIAL-NETWORK" />
        <ProjectComponent image="wellnest.JPG" heading="WellNest - Online Therapy" description="Full Stack" link="https://github.com/mohithingorani/WellNest-Frontend" />
        <ProjectComponent image="chess.JPG" heading="Multiplayer Chess Website" description="Full Stack" link="https://github.com/mohithingorani/Full-Stack-Chess-Website" />
        <ProjectComponent image="mines.JPG" heading="Mines Game - Stake" description="Frontend" link="https://github.com/mohithingorani/Mines-Game-Stake" />
      </div>
    </div>
  );
}

