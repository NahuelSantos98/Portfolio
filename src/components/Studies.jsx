import ExperienceMapInfo from './experienceComponent/ExperienceMapInfo';
import { FaCode } from "react-icons/fa";

const Studies = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 my-20 md:mt-0'>
            <div className="flex flex-row items-center justify-center text-white text-2xl mb-4 ">
        <FaCode/>
      <p> Estudios</p>
      </div>
      <ExperienceMapInfo />
    </div>
  )
}

export default Studies;
