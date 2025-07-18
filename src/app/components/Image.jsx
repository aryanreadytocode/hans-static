import React from 'react';

const ImageComponent = ({ src, alt, style, className }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                display: 'block',
                ...style,
            }}
        />
    );
};

export default ImageComponent;