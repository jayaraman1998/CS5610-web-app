import React from "react";

const AmenitiesComponent = ({property}) => {
   const p={property};
    return (
        <div className="card-body">
            <h5 className="card-title">
                <span className="start mr-2">{p.place}</span>
                <span className="mr-2">{p.ratings}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                     fill="currentColor" className="bi bi-star-half" >
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                </svg>
                </span>
            </h5>
            <p className="card-text">
                {p.host}<br>
            </br>
                <b>Bedrooms</b> : {p.bedrooms}
                <br/>
                <b>Amenities</b> : {p.amenities}
                <br/>
                <b>Per Night Fee</b> : {p.night_fee}
                <br/>
                <b>Cleaning Fee per stay</b> : {p.cleaning_fee}
                <br/>
                <b>Service Fee per stay</b> : {p.service_fee}
                <br/>
                <b>Property Description</b> : {p.description}
                <br/>
            </p>
        </div>
    );

};

export default AmenitiesComponent;