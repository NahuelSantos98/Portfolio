import MapLogos from './MapLogos';
import { backend, frontend } from '../../utils/info';

const DisplayLogos = ({ showFront }) => {
  return (
    <div className='lg:w-[25rem]'>
      {showFront ? 
      <div className='bg-gray-800 py-4 rounded-xl md:px-4 '> 
        <h4 className='text-white text-center text-xl'>Front-End</h4>
        <MapLogos logos={frontend} /> 
        </div>
        : 
        <div className='bg-gray-800 py-4 rounded-xl md:px-4'>
        <h4 className='text-white text-center text-xl'>Back-End</h4>
        <MapLogos logos={backend} />
        </div>
      }
    </div>
  );
};

export default DisplayLogos;
