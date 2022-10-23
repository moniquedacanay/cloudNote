// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {generatePrompt} from 'public/functions.js'

$w.onReady(function () {

});


export function genP_click(event) {
	$w('#text14').text = generatePrompt();
	$w('#input1').value = "";
	$w('#input1').show("fade");
}


export function button4_click(event) {
	$w('#input1').hide("fade");
	//$w('#input1').value = "";
}


export function line_break(event) {
	$w('#input1').onKeyPress((event) => {
		//if (event.key === "Enter"){
		//	var userlength = prompt();
		//	document.write("<br>");
		if (event.key === 'Enter'){
			<br/>;

		}
	})
}
