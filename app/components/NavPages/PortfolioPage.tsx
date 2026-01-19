import ProjectComponent from "../ProjectComponent";
import UnderLine from "../Underline";

export default function PortfolioPage() {
  return (
    <div>
      <div className="poppins-semibold text-3xl">Portfolio</div>
      <div className="my-4 ">
        <UnderLine />
      </div>
      <div className="mt-8 grid grid-cols-2">
        <ProjectComponent image="voltex.JPG" heading="Self Hosted Paas" description="Devops" link="https://github.com/mohithingorani/Platform-as-a-Service" />
        <ProjectComponent image="social.JPG" heading="Social Network" description="Full Stack" link="https://github.com/mohithingorani/SOCIAL-NETWORK" />
      </div>
    </div>
  );
}

