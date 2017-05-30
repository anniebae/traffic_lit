const lightArr = [$(".red"), $(".yellow"), $(".green")]
const x = document.getElementsByClassName("lightdiv")

function lightUp(i) {
	if (i >= lightArr.length) {
		i = 0;
	}

	lightArr[i].addClass('lit');
	setTimeout(function() {
		lightArr[i].removeClass('lit')
		lightUp(i + 1);
	}, 2000)
}

lightUp(0)