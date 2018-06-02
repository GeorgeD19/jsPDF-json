/*!
 * jsPDF JSON plugin v1.0.0
 * Copyright (c) 2018 George Dunlop, https://github.com/GeorgeD19/jsPDF-json
 * 
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */

(function (jsPDFAPI) {
    'use strict';

    /**
     * Takes in JSON and runs them against the jsPDF
     *
     * @returns {jsPDF}
     * @name JSON
     * @param schema {String} JSON schema to be parsed and run.
     * @param callback {Function} to call when the rendering has finished.
     */
    jsPDFAPI.JSON = function (schema, callback) {
        'use strict';

        if(typeof callback !== 'function') {
            callback = function () {};
        }

        try {
            var operations = JSON.parse(schema);
        } catch(e) {
            console.log(e);
        }

        var doc = this

        operations.forEach(function(entry) {
            for(var propertyName in entry) {
                var params = entry[propertyName];
                switch(propertyName) {
                    case "addFont":
                        var postscript = params.hasOwnProperty("postscript") ? params["postscript"] : "";
                        var name = params.hasOwnProperty("name") ? params["name"] : "";
                        var font = params.hasOwnProperty("font") ? params["font"] : "";
                        doc.addFont(postscript, name, font);
                    break
                    // case "addhtml":

                    // break
                    case "addMetadata":
                        var metadata = params.hasOwnProperty("metadata") ? params["metadata"] : "";
                        var namespaceuri = params.hasOwnProperty("namespaceuri") ? params["namespaceuri"] : "";
                        doc.addMetadata(metadata, namespaceuri);
                    break
                    case "addPage":
                        doc.addPage();
                    break
                    case "autoPrint":
                        doc.autoPrint();
                    break
                    // case "capjoinstyles":

                    // break
                    case "circle":
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        var r = params.hasOwnProperty("r") ? params["r"] : 0;
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.circle(x, y, r, style);
                    break
                    case "ellipse":
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        var rx = params.hasOwnProperty("rx") ? params["rx"] : 0;
                        var ry = params.hasOwnProperty("ry") ? params["ry"] : 0;
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.ellipse(x, y, rx, ry, style);
                    break
                    case "getFontList":
                        doc.getFontList();
                    break
                    case "lines":
                        var lines = params.hasOwnProperty("lines") ? params["lines"] : "";
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        var scale = params.hasOwnProperty("scale") ? params["scale"] : 0;
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        var closed = params.hasOwnProperty("closed") ? params["closed"] : false;
                        doc.lines(lines, x, y, scale, style, closed);
                    break
                    case "lstext":
                        var text = params.hasOwnProperty("text") ? params["text"] : "";
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        var spacing = params.hasOwnProperty("spacing") ? params["spacing"] : 0;
                        doc.lstext(text, x, y, spacing);
                    break
                    case "rect":
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        var w = params.hasOwnProperty("w") ? params["w"] : 0;
                        var h = params.hasOwnProperty("h") ? params["h"] : 0;
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.rect(x, y, w, h, style);
                    break
                    case "roundedRect":
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        var w = params.hasOwnProperty("w") ? params["w"] : 0;
                        var h = params.hasOwnProperty("h") ? params["h"] : 0;
                        var rx = params.hasOwnProperty("rx") ? params["rx"] : 0;
                        var ry = params.hasOwnProperty("ry") ? params["ry"] : 0;
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.roundedRect(x, y, w, h, rx, ry, style);
                    break
                    case "setDisplayMode":
                        var zoom = params.hasOwnProperty("zoom") ? params["zoom"] : 0;
                        var layout = params.hasOwnProperty("layout") ? params["layout"] : "";
                        var pmode = params.hasOwnProperty("pmode") ? params["pmode"] : "";
                        doc.setDisplayMode(zoom, layout, pmode);
                    break
                    case "setDrawColor":
                        var ch1 = params.hasOwnProperty("ch1") ? params["ch1"] : "";
                        var ch2 = params.hasOwnProperty("ch2") ? params["ch2"] : "";
                        var ch3 = params.hasOwnProperty("ch3") ? params["ch3"] : "";
                        var ch4 = params.hasOwnProperty("ch4") ? params["ch4"] : "";
                        doc.setDrawColor(ch1, ch2, ch3, ch4);
                    break
                    case "setfillcolor":
                        var ch1 = params.hasOwnProperty("ch1") ? params["ch1"] : "";
                        var ch2 = params.hasOwnProperty("ch2") ? params["ch2"] : "";
                        var ch3 = params.hasOwnProperty("ch3") ? params["ch3"] : "";
                        var ch4 = params.hasOwnProperty("ch4") ? params["ch4"] : "";
                        doc.setFillColor(ch1, ch2, ch3, ch4);
                    break
                    case "setFont":
                        var fontName = params.hasOwnProperty("fontName") ? params["fontName"] : "";
                        var fontStyle = params.hasOwnProperty("fontStyle") ? params["fontStyle"] : "";
                        doc.setFont(fontName, fontStyle); 
                    break
                    case "setFontSize":
                        var size = params.hasOwnProperty("size") ? params["size"] : 0;
                        doc.setFontSize(size);
                    break
                    case "setFontStyle":
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.setFontStyle(style);
                    break
                    case "setLineCap":
                        var style = params.hasOwnProperty("style") ? params["style"] : "";                    
                        doc.setLineCap(style);
                    break
                    case "setLineJoin":
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.setLineJoin(style);
                    break
                    case "setLineWidth":
                        var width = params.hasOwnProperty("width") ? params["width"] : 0;
                        doc.setLineWidth(width);
                    break
                    case "setPage":
                        var page = params.hasOwnProperty("page") ? params["page"] : 0;
                        doc.setPage(page);
                    break
                    // case "setproperties":

                    // break
                    case "setTextColor":
                        var r = params.hasOwnProperty("r") ? params["r"] : "";
                        var g = params.hasOwnProperty("g") ? params["g"] : "";
                        var b = params.hasOwnProperty("b") ? params["b"] : "";
                        doc.setTextColor(r, g, b);
                    break
                    case "text":
                        var text = params.hasOwnProperty("text") ? params["text"] : "";
                        var x = params.hasOwnProperty("x") ? params["x"] : 0;
                        var y = params.hasOwnProperty("y") ? params["y"] : 0;
                        doc.text(text, x, y);
                    break
                    case "triangle":
                        var x1 = params.hasOwnProperty("x1") ? params["x1"] : 0;
                        var y1 = params.hasOwnProperty("y1") ? params["y1"] : 0;
                        var x2 = params.hasOwnProperty("x2") ? params["x2"] : 0;
                        var y2 = params.hasOwnProperty("y2") ? params["y2"] : 0;
                        var x3 = params.hasOwnProperty("x3") ? params["x3"] : 0;
                        var y3 = params.hasOwnProperty("y3") ? params["y3"] : 0;
                        var style = params.hasOwnProperty("style") ? params["style"] : "";
                        doc.triangle(x1, y1, x2, y2, x3, y3, style);
                    break
                    // case "viewerpreferences":

                    // break
                }
            }
        });

        callback();
    }
})(jsPDF.API);