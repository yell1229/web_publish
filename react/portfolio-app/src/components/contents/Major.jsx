import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Major({title, para, icon}) {
    return (
        <>
            <FontAwesomeIcon icon={icon} size="3x" color="#03e8f9" />
            <p className="major__title">{title}</p>
            <p>{para}</p>
        </>
    );
}

