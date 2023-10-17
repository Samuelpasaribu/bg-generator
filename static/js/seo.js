(this["webpackJsonpbg-generator"] = this["webpackJsonpbg-generator"] || []).push([
    [0], {
        15: function(e, t, n) {},
        16: function(e, t, n) {},
        42: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(1),
                i = n.n(a),
                s = n(6),
                o = n.n(s),
                r = (n(15), n(7)),
                g = n(8),
                h = n(10),
                c = n(9),
                l = (n(16), n(17), n(39), n(0)),
                m = function(e) {
                    Object(h.a)(n, e);
                    var t = Object(c.a)(n);

                    function n(e) {
                        var a;
                        Object(r.a)(this, n), (a = t.call(this, e)).imgCanvas = document.createElement("canvas"), a.imgCanvas.style.display = "none", document.body.appendChild(a.imgCanvas), a.imgCanvasContext = a.imgCanvas.getContext("2d");
                        var i = {
                            size: {
                                width: 1280,
                                height: 720
                            },
                            imgColor: "#42a5f5",
                            imgSource: void 0
                        };
                        return i.imgSource = a.generateImage(i), a.state = i, a
                    }
                    return Object(g.a)(n, [{
    key: "onWidthChange",
    value: function(e) {
        var t = Object.assign(this.state);
        t.size.width = e.target.value;
        this.updateImage(t);
    }
}, {
    key: "onHeightChange",
    value: function(e) {
        var t = Object.assign(this.state);
        t.size.height = e.target.value;
        this.updateImage(t);
    }
}, {
    key: "onImgColorChange",
    value: function(e) {
        var t = Object.assign(this.state);
        t.imgColor = e.target.value;
        this.updateImage(t);
    }
}, {
    key: "render",
    value: function() {
        var e = this;
        return (
            <div className="App">
                <div className="container my-3">
                    <div className="top-menu input-group mb-3">
                        <label htmlFor="width">Width:</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            placeholder="Width"
                            id="width" // Add id attribute
                            value={this.state.size.width}
                            onChange={(t) => e.onWidthChange(t)}
                        />
                        <label htmlFor="height">Height:</label>
                        <input
                            type="number"
                            min="0"
                            className="form-control"
                            placeholder="Height"
                            id="height" // Add id attribute
                            value={this.state.size.height}
                            onChange={(t) => e.onHeightChange(t)}
                        />
                        <label htmlFor="color">Color:</label>
                        <input
                            type="color"
                            className="form-control form-control-color"
                            id="color" // Add id attribute
                            value={this.state.imgColor}
                            onChange={(t) => e.onImgColorChange(t)}
                        />
                        <label htmlFor="colorText">Color Text:</label>
                        <input
                            type="text"
                            className="form-control font-monospace"
                            placeholder="Color"
                            id="colorText" // Add id attribute
                            value={this.state.imgColor}
                            onChange={(t) => e.onImgColorChange(t)}
                        />
                    </div>
                    <img className="result-image" src={this.state.imgSource} alt="Image" />
                </div>
            </div>
        );
    }
}]
                                })
                            })
                        }
                    }]), n
                }(a.Component),
                u = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 45)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            i = t.getFCP,
                            s = t.getLCP,
                            o = t.getTTFB;
                        n(e), a(e), i(e), s(e), o(e)
                    }))
                };
            o.a.render(Object(l.jsx)(i.a.StrictMode, {
                children: Object(l.jsx)(m, {})
            }), document.getElementById("root")), u()
        }
    },
    [
        [42, 1, 2]
    ]
]);
//# sourceMappingURL=main.c49996b7.chunk.js.map
