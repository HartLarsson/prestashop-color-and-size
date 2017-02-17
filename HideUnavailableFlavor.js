var sizeAttributteID='1'; // Set your size attribute ID
var flavorAttributteID='2'; // Set your flavor attribute ID

$(document).ready(function(){
	
	function renewFlavorList(flavorList, currentSize){
		var theFlavor;
		for(var key in combinationsFromController) {
			theFlavor=combinationsFromController[key].attributes_values[flavorAttributteID];
			if(theFlavor in flavorList) {
				if (combinationsFromController[key].attributes_values[sizeAttributteID]!=currentSize){ //if this combination with current flavor
					$('select[name="group_'+flavorAttributteID+'"] option[value="'+ flavorList[theFlavor] +'"]').prop( "disabled", true );
				}
				else {
					$('select[name="group_'+flavorAttributteID+'"] option[value="'+ flavorList[theFlavor] +'"]').prop( "disabled", false );
					delete flavorList[theFlavor];
				}
			}
			
		}
		$('select[name="group_'+flavorAttributteID+'"] option:not([disabled]').first().prop('selected',true);;
	};
	
	$('select[name="group_'+sizeAttributteID+'"]').change(function(){
		var flavorList={};
		$('select[name="group_'+flavorAttributteID+'"] option').each(function(){ 
			if (flavorList[this.text]==undefined){
				flavorList[this.text]=$(this).val(); // get size list option values
			}    
		});
		var currentSize=$('select[name="group_'+sizeAttributteID+'"] option:selected').text(); // get current size
		renewFlavorList(flavorList, currentSize);
	});
	
});


