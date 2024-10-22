import PhotoBanner from './bannerComponent/PhotoBanner';
import TextBanner from './bannerComponent/TextBanner';

const Banner = () => {
  return (
    <div className='flex flex-col justify-center md:flex-row md:items-center md:justify-around md:h-[91vh] max-lg:mt-12'>
        <TextBanner />
        <PhotoBanner />
    </div>
  );
}

export default Banner;
