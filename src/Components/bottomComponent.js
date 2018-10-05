import React, { Component } from 'react';
import './bottomComponent.css'


class bottomComponent extends Component {
  render() {
    return (
        <div className="middle">
            <div className="img_text_beams">
                <h1>BEAMS</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor venenatis tortor quis congue.
                    Nullam fermentum enim vitae est viverra, at vulputate nulla egestas. Pellentesque dapibus at ipsum dapibus venenatis.
                    Quisque tincidunt risus ligula, id pulvinar eros consequat eget.
                </p>
            </div>
            <div className="img_div_beam">
                <img id="beam" alt="Beam" src="https://i.vimeocdn.com/video/589972810_530x315.jpg"></img>
            </div>
        </div>

    );
  }
}



export default bottomComponent;
