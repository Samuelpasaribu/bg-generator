import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.imgCanvas = document.createElement("canvas");
        this.imgCanvas.style.display = "none";
        document.body.appendChild(this.imgCanvas);
        this.imgCanvasContext = this.imgCanvas.getContext("2d");

        const newState = {
            size: {
                width: 1280,
                height: 720
            },
            imgColor: "#42a5f5",
            imgSource: undefined
        };
        newState.imgSource = this.generateImage(newState);
        this.state = newState;
    }

    onWidthChange(e) {
        const newState = Object.assign(this.state);
        newState.size.width = e.target.value;
        this.updateImage(newState);
    }

    onHeightChange(e) {
        const newState = Object.assign(this.state);
        newState.size.height = e.target.value;
        this.updateImage(newState);
    }

    onImgColorChange(e) {
        const newState = Object.assign(this.state);
        newState.imgColor = e.target.value;
        this.updateImage(newState);
    }

    updateImage(newState) {
        newState.imgSource = this.generateImage(newState);
        this.setState(newState);
    }

    generateImage(state) {
        if (!state.size.width
            || state.size.width < 0
            || !state.size.height
            || state.size.height < 0
            || !state.imgColor) {
            return;
        }
        this.imgCanvas.width = state.size.width;
        this.imgCanvas.height = state.size.height;
        this.imgCanvasContext.fillStyle = state.imgColor;
        this.imgCanvasContext.fillRect(0, 0, this.imgCanvas.width, this.imgCanvas.height);
        return this.imgCanvas.toDataURL("image/png");
    }

    render() {
        return (
            <div className="App">
                <div className="container my-3">
                    <div className="top-menu input-group mb-3">
                        <input type="number" min="0" className="form-control" placeholder="Width"
                            value={this.state.size.width} onChange={e => this.onWidthChange(e)}/>
                        <input type="number" min="0" className="form-control" placeholder="Height"
                            value={this.state.size.height} onChange={e => this.onHeightChange(e)}/>
                        <input type="color" className="form-control form-control-color"
                            value={this.state.imgColor} onChange={e => this.onImgColorChange(e)}/>
                        <input type="text" className="form-control font-monospace" placeholder="Color"
                            value={this.state.imgColor} onChange={e => this.onImgColorChange(e)}/>
                    </div>
                    <img className="result-image" src={this.state.imgSource} alt="Image"/>
                </div>
            </div>
        );
    }
}
