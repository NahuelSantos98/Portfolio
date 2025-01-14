import PropTypes from 'prop-types';

const CardExperience = ({ item }) => {

    const { name, description, duration, certificate, sabermas } = item

    return (
        <ol className="relative border-s border-gray-200 ">
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{duration}</time>
                <p className="mb-4 text-justify font-normal text-gray-500">{description}</p>
                <div className="flex gap-4">
                    {certificate && <a href={certificate} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Certificado <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></a>}
                    <a href={sabermas} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">Saber Mas <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg></a>
                </div>
            </li>
        </ol>
    )
}

CardExperience.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        certificate: PropTypes.string,
        sabermas: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardExperience
