import { experience } from "../../utils/info"
import CardProject from "../CardProject"

const ExperienceMapInfo = () => {
  return (
    <div className="flex flex-col items-center"> 
        {experience.map(item => 
            <div key={item.id}>
                <CardProject item={item} />
            </div>
        )}
    </div>
  );
}

export default ExperienceMapInfo;
