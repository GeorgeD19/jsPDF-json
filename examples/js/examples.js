var doc = new jsPDF();

doc.JSON('[{"text":{"text":"Hello, World", "x": 15, "y": 15}}]')

var string = doc.output('datauristring');
var frame = document.getElementById('pdf');
frame.src = string;