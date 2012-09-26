var rollSound = document.getElementById('rollSound');
var results = '';
var rollCount = 0;

function writeImages(die,value)
{
	die.src="img/raster/200px/200px-Dice-" + value + ".png";
	die.alt ="Die Image " + value + "";
}

function diced()
{	
	$('.die').each(function(index){
		var rollValue = Math.floor(Math.random() * 6) + 1;

		while (rollValue > 6 || rollValue > 6)
		{
			document.getElementById("values").innerHTML = "Something has gone horribly wrong and the JavaScript Math.random is not working and the world is ending and you will probably perish in a gigantic fireball within mintues.";
			stop();
		}

		writeImages(this,rollValue);
		results += 'Die '+index+' value: '+rollValue+'<br/>';

	});

	document.getElementById('rollSound').play();
	$("#diceImages").delay(3000);


	document.getElementById("values").textContent = results;

}
