function generateTable() {
const number = document.getElementById("number").value;
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";


if (!number) {
resultDiv.innerHTML = "<p class='small'>⚠️ Please enter a number.</p>";
return;
}


let tableHTML = "<table><thead><tr><th>Expression</th><th>Result</th></tr></thead><tbody>";
for (let i = 1; i <= 10; i++) {
tableHTML += `<tr><td>${number} × ${i}</td><td>${number * i}</td></tr>`;
}
tableHTML += "</tbody></table>";
resultDiv.innerHTML = tableHTML;
}


function clearTable() {
document.getElementById("number").value = "";
document.getElementById("result").innerHTML = "";
}