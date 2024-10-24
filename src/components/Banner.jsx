import PhotoBanner from './bannerComponent/PhotoBanner';
import TextBanner from './bannerComponent/TextBanner';

const Banner = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-around md:h-[91vh] bg-gradient-to-r from-gray-800 to-gray-600'>
        <TextBanner />
        <PhotoBanner />
    </div>
  );
}

export default Banner;
