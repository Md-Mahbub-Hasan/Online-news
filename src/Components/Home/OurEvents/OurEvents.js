import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './OurEvents.css';


const OurEvents = () => {
    const [events, setEvents] = useState()

    useEffect(() => {
        fetch('http://localhost:5050/AllOurEventHomePage')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    const history = useHistory();

    const ChangeRoute = () => {
        history.push('/')
    }


    return (
        <div className="events-div">
            <h2>our events...</h2>
            <div className="row row-cols-1 row-cols-md-4">

                {
                  events ?  events.map(event =>

                        <div key={event._id} onClick={ChangeRoute} className="col mb-4 card-style col-sm-6">
                            <div className="card event-card">

                                <img
                                    src={event.img}
                                    className="card-img-top event-card-img"
                                    alt="..."
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{event.title}</h5>
                                    <p className="card-text">{event.eventDetails}</p>
                                </div>

                            </div>
                        </div>


                    )
                    :''
                }
            </div>
        </div>
    );
};

export default OurEvents;