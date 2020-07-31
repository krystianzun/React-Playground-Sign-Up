import React from 'react';

const Icon = (props) => {

    const getPath = (name) => {
        switch(name) {
            case "email":
            return (
                <React.Fragment>
                    <path d="M14.6666 2.66666H1.33325V13.3333H14.6666V2.66666ZM13.3333 5.33332L7.99992 8.66666L2.66659 5.33332V3.99999L7.99992 7.33332L13.3333 3.99999V5.33332Z" fill="#98989E"/>
                </React.Fragment>
            );

            case "password":
            return (
                <React.Fragment>
                    <path d="M13.3334 5.33334H11.3334V4.14C11.3334 2.4 10.0601 0.846668 8.32675 0.680002C6.34008 0.493335 4.66675 2.05333 4.66675 4V5.33334H2.66675V14.6667H13.3334V5.33334ZM8.00008 11.3333C7.26675 11.3333 6.66675 10.7333 6.66675 10C6.66675 9.26667 7.26675 8.66667 8.00008 8.66667C8.73341 8.66667 9.33341 9.26667 9.33341 10C9.33341 10.7333 8.73341 11.3333 8.00008 11.3333ZM6.00008 5.33334V4C6.00008 2.89334 6.89341 2 8.00008 2C9.10675 2 10.0001 2.89334 10.0001 4V5.33334H6.00008Z" fill="#98989E"/>
                </React.Fragment>
            );

            default:
            return null;
        }
    }

    return (
        <svg width="16"
        height="16"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg">
            {getPath(props.name)}
        </svg>
    );
}

export default Icon;