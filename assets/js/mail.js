function mail(name, domain, text) // add in third variable for alternate text
{	
	var email_address = prep_email(name,domain);
	
	
	if (typeof text == 'undefined')
	{
		document.write('<a href="mailto:'+email_address+'">' +email_address+'</a>'); 
	}
	else
	{
		document.write('<a href="mailto:'+email_address+'">' +text+'</a>'); 	
	}
}


function prep_email(n,d)

{
	// change first letter to upper Case
		n = n.charAt(0) + n.slice(1);
	
		var lastNameFirstChar = periodPlacement(n);
		if(lastNameFirstChar != null)
		{
			temp = n.slice(0,lastNameFirstChar);
			n = temp + n.charAt(lastNameFirstChar) + n.slice(lastNameFirstChar +1);
		}
		
		var full_email = n;
		full_email += '@';
		full_email += d;
		
		return full_email;
}

	// function to check if an email address has a period in it
	// returns the location of the next letter of the after the period so that it can be capitalized
	// john.doe@blah.com will turn into John.Doe@blah.com
	
function periodPlacement(n)
	{
		for(var i = 0; i<n.length; i++)
		{
			if(n.charAt(i) == ".")
			{
				return i+1;	
			}
		}
	}

