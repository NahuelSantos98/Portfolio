import { useState } from 'react'
import PropTypes from 'prop-types';
const CardLogo = ({ logo }) => {
    const { name, url } = logo;

    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="bg-neutral-200 rounded-full shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <img
                src={url}
                alt={`Logo de ${name}`}
                className="w-12 h-12 object-contain"
            />
            {showTooltip && (
                <div
                    role="tooltip"
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1"
                >
                    {name}
                </div>
            )}
        </div>
    )
}

CardLogo.propTypes = {
    logo: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
};

export default CardLogo