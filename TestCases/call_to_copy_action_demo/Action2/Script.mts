Systemutil.Run"C:\Program Files\Google\Chrome\Application\chrome.exe","https://demo.guru99.com/test/newtours/index.php" @@ script infofile_;_ZIP::ssf15.xml_;_
Browser("Welcome: Mercury Tours_2").Page("Welcome: Mercury Tours").Link("SIGN-ON").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Welcome: Mercury Tours_2").Page("Sign-on: Mercury Tours").WebEdit("userName").Set DataTable("username99", dtLocalSheet) @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Welcome: Mercury Tours_2").Page("Sign-on: Mercury Tours").WebEdit("password").SetSecure DataTable("password99",dtLocalSheet) @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Welcome: Mercury Tours_2").Page("Sign-on: Mercury Tours").WebButton("Submit").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Welcome: Mercury Tours_2").Page("Login: Mercury Tours").Link("SIGN-OFF").Click @@ script infofile_;_ZIP::ssf5.xml_;_
