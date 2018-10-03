import React, {Component} from "react";

export default class Sizesetting extends Component {

    changeSize(value) {
        this.props.onChangeSize(value);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"
                    id="panelRight">
                    <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <button type="button" className="btn btn-success"
                            onClick={() => this.changeSize(-2)}>Reduction</button>
                        <button type="button" className="btn btn-success"
                            onClick={() => this.changeSize(+2)}>Increase</button>
                    </div>
                </div>
            </div>
        );
    }
}