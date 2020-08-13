import React from 'react';


const PlayerSingle = (props) => {
    return(
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="soccer.jpeg"/> {/* BE AWARE when using Materialize CSS the img tag is not closed */}
    <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                        <a href="/">This is a link</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayerSingle;