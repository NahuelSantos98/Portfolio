import CardLogo from './CardLogo';
import PropTypes from 'prop-types';
const MapLogos = ({ logos }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
            {logos.map((logo, index) => {
                    return <CardLogo logo={logo} key={index} />
            })}
        </div>
    );
};

MapLogos.propTypes = {
    logos: PropTypes.array.isRequired,
};

export default MapLogos;
