import React from 'react';

const CardComida = ({ onClick, imageName, plateName, isSelected }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`card-comida ${isSelected ? 'selected' : ''}`}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "70px", borderRadius: "15px" }}
            onClick={handleClick}
        >
            <img
                style={{ width: '45px', cursor: 'pointer', paddingTop: "15px" }}
                src={imageName}
                alt=""
            />
            <p style={{ fontSize: "10px", color: `${isSelected ? "white" : "#423F40"}` }}>
                <center>

                    {plateName[0]}
                    <br />
                    {plateName[1]}
                </center>
            </p>
        </div>
    );
};

export default CardComida;
