import React, { Component } from 'react';
import './App.css';
import Colorpicker from "./components/Colorpicker";
import Result from "./components/Result";
import Sizesetting from "./components/Sizesetting";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 15,
        };
    }

    onChangeSize(value) {
        this.setState({fontSize: (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize})
    }

    onSetColor(params) {
        this.setState({color: params});
    }

    render() {
        return (         
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <Colorpicker color={this.state.color}
                            onReceiveColor={this.onSetColor.bind(this)}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Sizesetting fontSize={this.state.fontSize}
                            onChangeSize={this.onChangeSize.bind(this)}
                        />
                        <button type="button" className="btn btn-default"
                            onClick={() => {this.setState({fontSize: 15})}}>Reset</button>      
                    </div>
                    <Result fontSize={this.state.fontSize}
                        color={this.state.color}
                    />
                </div>
            </div>
    
        );
    }
}

export default App;
