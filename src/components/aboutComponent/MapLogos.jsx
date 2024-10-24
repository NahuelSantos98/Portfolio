import { useState } from 'react';
import CardLogo from './CardLogo';

const MapLogos = ({ logos }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mt-4">
            {logos.map((logo, index) => {
                    return <CardLogo logo={logo} key={index} />
            })}
        </div>
    );
};

export default MapLogos;
