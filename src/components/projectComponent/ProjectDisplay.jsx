import { projects } from "../../utils/info";
import CardProject from "../CardProject";

const ProjectDisplay = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-12">
        {projects.map(item => 
            <div key={item.id} className="card">
                <CardProject item={item} />
            </div>
        )}
    </div>
  );
}

export default ProjectDisplay;
