var prices = [[1, 2, 3], [2, 2.5, 3], [6, 7, 8], [8, 9, 10]]

window.onload = function () {
    document.querySelector("#btn").onclick = submit;
}

var submit = function () {
    
    var bev = document.querySelector("select option:checked").value;
    var size = document.querySelector("input[type=radio]:checked").value;
    if (size == 0)
        var sizeName = "Small";
    else if (size == 1)
        var sizeName = "Medium";
    else
        var sizeName = "Large"
    if (bev == 0)
        var bevName = "Coffee";
    else if (bev == 1)
        var bevName = "Tea";
    else if (bev == 2)
        var bevName = "Beer"
    else {
        var bevName = "Wine"
    }
    var name = document.querySelector("#op1").value;
    var date = moment();
    var quantity = document.querySelector("#op2").value;
    var total = prices[bev][size] * quantity;
    if (bev == 2 || bev == 3) {
        
        document.getElementById("hidden").style.display = "block";
        document.getElementById("bevselected").style.display = "block";
        var birthDate = moment((document.querySelector("#op3").value));
        var testDate = date.subtract(21, 'Years');
        document.querySelector("#Title").innerHTML = "Must be born before";
        document.querySelector("#receiptWord").innerHTML = testDate.format('ddd MMM DD YYYY');
        if (testDate >= birthDate) {
            document.querySelector("#Title").innerHTML = "Receipt";
            document.querySelector("#receiptWord").innerHTML = "<br />" + name + " ordered " + quantity + " " + sizeName + " " + bevName + "s for $" + prices[bev][size] + " each<br />" + "Total Due: $" + total;
        }
    }
    else {
        document.getElementById("hidden").style.display = "none";
        var x = document.getElementById("bevselected");
        if (x.style.display == "block") {
            
        } else {
            x.style.display = "block";
        }
        document.querySelector("#Title").innerHTML = "Receipt";
        document.querySelector("#receiptWord").innerHTML = "<br />" + name + " ordered " + quantity + " " + sizeName + " " + bevName + "s for $" + prices[bev][size] + " each<br />" + "Total Due: $" + total;
    }
}

function showAgeCheck() {
	var bev = document.querySelector("select option:checked").value;
	document.getElementById("bevselected").style.display = "none";
	if (bev == 2 || bev == 3)
		document.getElementById("hidden").style.display = "block";
	else
		document.getElementById("hidden").style.display = "none";
}

