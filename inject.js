(function() {
	//////////////////////////////////////////////////////////////////////////////
	ask_usr_for_tool = prompt("Cookie Session Hack (y,n): ");

	if(ask_usr_for_tool == "y"){
		//delete traces and show last active cookies
		alert(document.cookie);

		//Cookie creator
		user_cookie_add_name = prompt("Cookie Name: ")
		alert(document.cookie)							//Cookie
		user_cookie_add_value = prompt("Cookie Value: ")
	
		//add new cookie
		document.cookie=user_cookie_add_name + "=" + user_cookie_add_value
		alert("COOKIE ADDED:" + document.cookie);
	}
	//////////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////////////
	ask_usr_for_tool = prompt("Prompt fake login(local) (y,n) [pass=exit_sequence]: ");
	if(ask_usr_for_tool == "y"){
		alert("We are so sorry to tell you that, we have added additional security to the website against hackers. If your username and password is deemed incorrect wait 10 minutes max so our servers can process it. Thanks For Your Cooperation!")
		userexitphish = ""
		while(userexitphish != "exit_sequence"){
			//prompt for username and pass						// password and username phisher
			usernamephish = prompt("Account username: ")
			userpassphish = prompt("Account password:")
			userexitphish = prompt("Any suggestions for us how to improve our site? [Please wait while we process your account info.]")
			alert('Password Or Username Incorrect. Please try again. {exit_code="serv_process_interupt"}')
		}
		alert("Username: " + usernamephish + "   Password: " + userpassphish)
		
	}
	//////////////////////////////////////////////////////////////////////////////
	

	//////////////////////////////////////////////////////////////////////////////
	ask_usr_for_tool = prompt("View Inner Html (y,n): ");
	if(ask_usr_for_tool == "y"){
			inner_aspects = document.documentElement.innerHTML
			alert(inner_aspects)
	}







	//////////////////////////////////////////////////////////////////////////////

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.textContent = "Injected=TRUE";
	document.body.appendChild(div);

	// alert insert
	alert('Injection tools sequence completed');

})();