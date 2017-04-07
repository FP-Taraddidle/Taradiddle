# README

### Routes

#### User Sign In/Log In
> GET '/auth/twitter'
+ This will redirect the user logging in to the twitter authorization page and will redirect them back to our root upon successful login

#### Tweet Count
> GET '/tweets'
+ This will return the number of tweets as an integer for the specified user.  User must be specified by their ID,ra passed in as a parameter.
