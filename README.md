# README

### Routes

#### User Sign In/Log In
> GET '/api/auth/twitter'
+ This will redirect the user logging in to the twitter authorization page and will redirect them back to our root upon successful login

#### Users Information
> GET '/api/users/:id'
+ This will grab a single user as specified by their ID and will return all their information.

#### Twitter Sign Up
> GET 'api/twitter/signup'
+ Redirects the user to the Twitter Sign Up page, in case they do not have an account before entering our site.

#### Tweet Count
> GET '/api/tweets'
+ This will return the number of tweets as an integer for the specified user.  User must be specified by their ID, passed in as a parameter.

#### Twitter Likes Count
> GET '/api/tweets/likes'
+ This will return the number of likes from twitter as an integer for the specified user.  User must be specified by their ID, passed in as a parameter.

#### User Twitter History
> GET ''
+
