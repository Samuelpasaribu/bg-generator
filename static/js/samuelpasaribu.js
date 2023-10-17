class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: {
                width: 1280,
                height: 720
            },
            imgColor: "#42a5f5",
            imgSource: this.generateImage({
                width: 1280,
                height: 720,
                imgColor: "#42a5f5"
            })
        };
        this.imgCanvas = document.createElement("canvas");
        this.imgCanvas.style.display = "none";
        document.body.appendChild(this.imgCanvas);
        this.imgCanvasContext = this.imgCanvas.getContext("2d");
    }

    onWidthChange = (e) => {
        const newSize = { ...this.state.size, width: e.target.value };
        this.updateImage(newSize);
    };

    onHeightChange = (e) => {
        const newSize = { ...this.state.size, height: e.target.value };
        this.updateImage(newSize);
    };

    onImgColorChange = (e) => {
        const newColor = e.target.value;
        const newState = { ...this.state, imgColor: newColor };
        this.updateImage(newState);
    };

    updateImage = (newState) => {
        newState.imgSource = this.generateImage(newState);
        this.setState(newState);
    };

    generateImage = ({ width, height, imgColor }) => {
        if (width > 0 && height > 0 && imgColor) {
            this.imgCanvas.width = width;
            this.imgCanvas.height = height;
            this.imgCanvasContext.fillStyle = imgColor;
            this.imgCanvasContext.fillRect(0, 0, this.imgCanvas.width, this.imgCanvas.height);
            return this.imgCanvas.toDataURL("image/png");
        }
        return null;
    };

    render() {
        return (
            <div className="App">
                <div className="container my-3">
                    <div className="top-menu input-group mb-3">
                        <label htmlFor="widthInput">Width:</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            id="widthInput"
                            placeholder="Width"
                            value={this.state.size.width}
                            onChange={(t) => this.onWidthChange(t)}
                        />

                        <label htmlFor="heightInput">Height:</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            id="heightInput"
                            placeholder="Height"
                            value={this.state.size.height}
                            onChange={(t) => this.onHeightChange(t)}
                        />

                        <label htmlFor="colorInput">Color:</label>
                        <input
                            type="color"
                            className="form-control form-control-color"
                            id="colorInput"
                            value={this.state.imgColor}
                            onChange={(t) => this.onImgColorChange(t)}
                        />

                        <label htmlFor="colorTextInput">Color (Text):</label>
                        <input
                            type="text"
                            className="form-control font-monospace"
                            id="colorTextInput"
                            placeholder="Color"
                            value={this.state.imgColor}
                            onChange={(t) => this.onImgColorChange(t)}
                        />
                    </div>
                    <img className="result-image" src={this.state.imgSource} alt="Image" />
                </div>
            </div>
        );
    }
}

export default App;
