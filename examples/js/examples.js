var doc = new jsPDF();

doc.JSON('[{"text":{"text":"{nest.test} {root}", "x": 15, "y": 15}}]', '{"nest": {"test": "value"}}')

var string = doc.output('datauristring');
var frame = document.getElementById('pdf');
frame.src = string;