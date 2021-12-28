import React from "react";

export default function Card(props) {

    return (
        <div className="card">
            <img src={`${props.card.imageUrl}`} className="card--image" alt={props.card.title} />
            <div className="card--stats">
                <div className="card--map">
                    <i className="fas fa-map-marker-alt"></i>
                    <span className="card--location">{props.card.location}</span>
                    <a href={props.card.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <p className="card--title">{props.card.title}</p>
                <span className="card--date">{props.card.startDate} - {props.card.endDate}</span>
                <p className="card--desc">{props.card.description}</p>
            </div>
        </div>
    )
}