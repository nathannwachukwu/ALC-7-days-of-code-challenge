// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

	function makeGrid() {

// Your code goes here!
/**
	here i've tried to create the Grid of pixel art using the const variable declaration because i might need to reassign the variable later
**/
			const height = $('#input_height').val();
			const width = $('#input_width').val();


/** 
	here im building the table using the for loop, 
	I love for loops, i seems a lot easier than while loop 
	in my opinion because i can just define the 3 major parameters
**/		
			for(var i = 1; i < height; i++){
				$('table').append('<tr></tr>');

			}
/** here the inner loop will add width after each row using variable r
	another reason why i like the for loop
**/
			for(var r = 1; r < width; r++){
				$('table>tr').append('<td></td>');
			}

	}
/** When size is submitted by the user, call makeGrid()
**/		
			$('#sizePicker').submit(function(event){
				event.preventDefault();

/**
	select cell color and change color
**/
			$('#pixel_canvas').children().remove();
				makeGrid();
				event.preventDefault();
			});
		
			$('table').click(function(event){

/**	select the colorPicker
**/
			var coloredTable = $('#colorPicker').val();
			
			$(event.target).css('background-color', coloredTable);
			});
