import { projects } from "../../utils/info"
import CardProject from "../CardProject"

const ProjectDisplay = () => {
  return (
    <div className="flex flex-col items-center"> 
        {projects.map(item => 
            <div key={item.id}>
                <CardProject item={item} />
            </div>
        )}
    </div>
  )
}

export default ProjectDisplay