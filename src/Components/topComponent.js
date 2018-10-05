import React, { Component } from 'react';
import './topComponent.css'

class topComponent extends Component{
    render () {
        return (
            <div>
                <div className="img_div">
                    <img id="monsoon" alt="Monsoon" src="https://i.vimeocdn.com/video/595198868_505x160.jpg"></img>
                </div>

                <div className="img_text">
                    <h1>MONSOON III</h1>
                    <p id="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porttitor venenatis tortor quis congue.
                        Nullam fermentum enim vitae est viverra, at vulputate nulla egestas. Pellentesque dapibus at ipsum dapibus venenatis.
                        Quisque tincidunt risus ligula, id pulvinar eros consequat eget.
                    </p>
                </div>
            </div>

        );
    }
}

export default topComponent;
