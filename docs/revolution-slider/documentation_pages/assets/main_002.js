jQuery(document).ready(function(){
	
	function PrintElem(elem)
    {
        Popup(jQuery(elem).html());
    }
    
    function Popup(data) 
    {
        var mywindow = window.open('', 'gutschrift', 'height=400,width=600');
        mywindow.document.write('<html><head><title>Gutschrift Patrick Kunath</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(data);
        mywindow.document.write('</body></html>');
        mywindow.print();
        mywindow.close();
        return true;
    }
	jQuery('#print').click(function(){
		PrintElem(jQuery('#gutschrift'));
	});

});