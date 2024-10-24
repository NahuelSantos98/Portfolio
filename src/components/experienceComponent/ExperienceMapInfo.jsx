import { experience } from "../../utils/info";
import CardExperience from "./CardExperience";

const ExperienceMapInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-[50vw]">
      {experience.map(item =>
        <CardExperience key={item.id} item={item} />
      )}
    </div>
  );
}

export default ExperienceMapInfo;
