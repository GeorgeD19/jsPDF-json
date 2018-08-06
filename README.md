# jsPDF-json

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/GeorgeD19/jsPDF-json/blob/master/license.txt)

jsPDF-json runs JSON schema through [jsPDF](https://github.com/MrRio/jsPDF) to generate PDFs in client-side JavaScript.

## Features
- Maps JSON schema to jsPDF functions.
- Inject data into your schema layouts for dynamic information.

## Install
Since this library is dependent on jsPDF please ensure you have loaded that first. See how to install jsPDF [here](https://github.com/MrRio/jsPDF/blob/master/README.md#creating-your-first-document)

Using npm:
```bash
npm install https://github.com/GeorgeD19/jsPDF-json.git
```

## API
The jsPDF-json API translates directly to the jsPDF API for example:

```javascript
var schema = `
[
    {
        "text": {
            "text": "Hello, World!",
            "x": 15,
            "y": 15
        }
    }
]`;
var doc = new jsPDF();
doc.JSON(schema);
doc.save('hello-world.pdf');
```

Is the same as:
```javascript
var doc = new jsPDF();
doc.text("Hello, World!", 15, 15);
doc.save('hello-world.pdf');
```

### Inject Data
So you can swap out variables from passed JSON which may be useful with using this library with JSON form libraries:
```javascript
var schema = `[
    {
        "text": {
            "text": {nest.test},
            "x": 15,
            "y": 15
        }
    }
]`;
var data = `
{
    "nest": {
        "test": "Hello, World!"
    }
}
`;
var doc = new jsPDF();
doc.JSON(schema);
doc.save('hello-world.pdf');
```

### Supported functions
- addFont
- addMetadata
- addPage
- autoPrint
- addImage
- circle
- ellipse
- getFontList
- lines
- lstext
- rect
- roundedRect
- setDisplayMode
- setDrawColor
- setFillColor
- setFont
- setFontSize
- setFontStyle
- setLineCap
- setLineJoin
- setLineWidth
- setPage
- setTextColor
- text
- triangle

### Limitations
- addHTML is deprecated in jsPDF so will not be supported in this library
- CapJoinStyles not implemented
- setProperties not implemented
- viewerPreferences not implemented

## How to build
Pull the source by running the following command:
```bash
git clone https://github.com/GeorgeD19/jsPDF-json/
```

### Prerequisites
You'll need to have Node.js and Gulp installed. New to Node.js or Gulp? Check out this [writeup](http://travismaynard.com/writing/getting-started-with-gulp).

After installing Node.js you can install gulp globally by running the following command:
```bash
npm install -g gulp
```

To install all the necessary Node module dependencies, run the following command in the library directory:
```bash
npm install
```

Then to build run the following command:
```bash
gulp
```

The build distribution assets will be in the dist folder.

## License (MIT)
Copyright (c) 2018 GeorgeD19, https://github.com/GeorgeD19/jsPDF-json

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR ØOTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.