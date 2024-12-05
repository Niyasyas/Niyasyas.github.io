function contact_num_valid(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var count = (evt.target.value.match(/\+/g) || []).length;
    if (count < 2 && key == '+') {
        evt.target.value = evt.target.value.replace(/\+/g, "");
        evt.target.value = '+' + evt.target.value;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        return false;
    }
    var regex = /[+0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
jQuery("#Quick_Inquiry").submit(function(e) {
jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"] ,textarea').each(function(){jQuery(this).val($.trim(jQuery(this).val()));})
function valid_contact()
{
	var name=document.querySelector('#Quick_Inquiry #name');
	var lname = document.querySelector('#Quick_Inquiry #lname')
	var email=document.querySelector('#Quick_Inquiry #email');
	var tel=document.querySelector('#Quick_Inquiry #contact_no');
	var project = document.querySelector('#Quick_Inquiry #project')

	
	if(name.value=='')
	{
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Please Enter FirstName.';
		name.style.borderColor="red";
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}

	if(lname.value=='')
	{
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Please Enter LastName.';
		lname.style.borderColor="red";
		lname.focus();
		return false;
	}
	else{lname.style.borderColor=""}

	var digit = name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Invalid Name: ' + name.value;
		name.style.borderColor="red";		
		name.value = '';
		name.focus();
		return false;
	}
	
	if(email.value=='')
	{
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Please Enter Email ID.';
		email.style.borderColor="red";
		email.focus();
		return false;
	}else{email.style.borderColor=""}
	var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var c_address = email.value;
	if(c_reg.test(c_address) == false) {
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Invalid Email ID: ' + email.value;
		email.style.borderColor="red";
		email.value = '';
		email.focus();
		return false;
	}
	else{email.style.borderColor=""}


	if(tel.value=='')
	{
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Please Enter Contact No.';
		tel.style.borderColor="red";
		tel.focus();
		return false;
	}else{tel.style.borderColor=""}
	var c_mobile = tel.value.replace(/\+/g,'');
	var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Invalid Contact No.: ' + tel.value;
		tel.style.borderColor="red";
		tel.value = '';
        tel.focus();
		return false;
	}else{tel.style.borderColor=""}	
	project.value==project.value.trim()
	if(project.value=='')
		{
			document.querySelector('#Quick_Inquiry #error_data').innerHTML = '* Please Enter Project.';
			project.style.borderColor="red";
			project.focus();
			return false;
			
		}else{project.style.borderColor=""}
	document.querySelector('#Quick_Inquiry #error_data').innerHTML = '';
	return true;
}
	if(valid_contact()==true){document.querySelector('#Quick_Inquiry #form_process').style.visibility="visible";jQuery(this).find('[type="submit"]').prop('disabled', true);//.fadeOut('slow');
		var form_url = jQuery("#Quick_Inquiry").attr('action'); // the script where you handle the form input.	
		$.ajax({
			   type: "POST",
			   url: form_url,
			   data: jQuery("#Quick_Inquiry").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
				   jQuery("#Quick_Inquiry").empty();
				   jQuery("#Quick_Inquiry").html(data); // show response from the php script.
			   },
			   error: function(data)
			   {
				   jQuery("#Quick_Inquiry").empty();
				   jQuery("#Quick_Inquiry").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
			   }
			 });
	
			e.preventDefault();
	}
	else{e.preventDefault();}
});