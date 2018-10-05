import React, { Component } from 'react';
import './lowestComponent.css'

class lowestComponent extends Component {
    render () {
        return (
            <div>
                <div className="move_img">
                    <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="Move2"></img>
                </div>
                <div className="move_text">
                    <h1>MOVE 2</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor venenatis tortor quis congue.
                    Nullam fermentum enim vitae est viverra, at vulputate nulla egestas. Pellentesque dapibus at ipsum dapibus venenatis.
                    Quisque tincidunt risus ligula, id pulvinar eros consequat eget.</p>
                </div>
            </div>
        );
    }
}

export default lowestComponent;
