var AButton = Search.AddButton;
var RButton = Search.RemoveButton;
var businessSelect = Search.business;
function AElem()
{
	var text = Search.Input.value;
	if (text)
	{
		var newElem = new Option(text);
		businessSelect.options[businessSelect.options.length] = newElem;
	}
}
function RElem()
{
	var selectedIndex = businessSelect.options.selectedIndex; 
	businessSelect.options[selectedIndex] = null;
}		 
AButton.addEventListener("click", AElem);
RButton.addEventListener("click", RElem);