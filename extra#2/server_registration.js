app.get("/registration.html", function (request, response) {
    // Give a simple registration form
    str = `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Customer Registration</title>
        <link href = "products_style.css" rel="stylesheet">
        <script>src ="server.js"</script>
    </head>
    <body>
    <!--the following code is for the navigation bar-->
    <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./products_page.html">Records</a></li>
        <li><a href="./login.html">Log In</a></li>
    </ul>
 
    <div style="margin-left:25%;padding:1px 16px;height:1000px;">
            <div>
                    <form method="POST" action="/register_user" onsubmit=validatePassword() >
                      <input type="text" name="fullname" size="40" pattern="[a-zA-Z]+[ ]+[a-zA-Z]+" maxlength="30" placeholder="Enter First & Last Name"><br />
                      <input type="text" name="username" size="40" pattern=".[a-z0-9]{3,10}" required title="Minimum 4 Characters, Maximum 10 Characters, Numbers/Letters Only" placeholder="Enter Username" ><br />
                      <input type="email" name="email" size="40" placeholder="Enter Email" pattern="[a-z0-9._]+@[a-z0-9]+\.[a-z]{3,}$" required title="Please enter valid email."><br />
                      <input type="password" id="password" name="password"  size="40" pattern=".{8,}" required title="8 Characters Minimum" placeholder="Enter Password"><br />
                      <input type="password" id="repeat_password" name="repeat_password" size="40" pattern=".{8,}" required title="8 Characters Minimum" placeholder="Repeat Password"><br />
                   
                      <input type="submit" value="Submit" id="submit">
                  </form></div>
               
    </body>
    </html>`;
    response.send(str);
 });