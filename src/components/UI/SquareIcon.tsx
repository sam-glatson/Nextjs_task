import React from "react";

const SquareIcon = (props: any) => {
    const { width, height } = props;

    return (
        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect
                opacity="0.2"
                x="0.649806"
                y="9.55228"
                width={width}
                height={height}
                transform="rotate(-21.7752 0.649806 9.55228)"
                stroke="white"
            />
        </svg>
    );
};

export default SquareIcon;
