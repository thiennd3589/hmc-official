import React from 'react';
import "./style.scss";

const MobileAdminsCard = ({img, pos, name, text}) => {
    return (
        <div className="MobileAdminCard">
            <div className="CardContent">
                <div className="avatar"><img src={img} alt={name}/></div>
                <div className="info">
                    <div className="main"> 
                        <div className="name">{name}</div>
                        <div className="pos"><p>{pos}</p></div>
                    </div>
                    <div className="text"><p>{text}</p></div>
                </div>
            </div>
        </div>
    );
};

export default MobileAdminsCard;