import ProjectDisplay from "./projectComponent/ProjectDisplay";
import { FaCode } from "react-icons/fa";


const Projects = () => {
  return (
    <div className='justify-center h--full'>
      <div className="flex flex-row items-center justify-center text-white text-2xl mb-4 underline">
        <FaCode/>
      <p>Projects</p>
      </div>
      <ProjectDisplay />
    </div>
  )
}

export default Projects;
