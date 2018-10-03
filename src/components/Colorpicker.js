import React, {Component} from "react";

export default class Colorpicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc'],
        }
    }

    showColor(color) {
        return {
            backgroundColor: color
        };
    }

    setActiveColor(color) {
        this.props.onReceiveColor(color);
    }

    render() {

        let elmColor = this.state.colors.map((color, index) => {
            return <span key={index}
                    style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}
                    onClick={() => this.setActiveColor(color)}></span>
        });

        return (
            <div className="panel panel-default">
                <div className="panel-heading"
                    id="panelLeft">
                    <h3 className="panel-title">Color picker</h3>
                </div>
                <div className="panel-body">
                    {elmColor}
                    <hr/>
                </div>
            </div>
        );
    }
}