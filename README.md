# README

### Routes

#### User Sign In/Log In
> GET '/auth/twitter'
+ This will redirect the user logging in to the twitter authorization page and will redirect them back to our root upon successful login

#### Twitter Sign Up
> GET 'api/twitter/signup'
+ Redirects the user to the Twitter Sign Up page, in case they do not have an account before entering our site.

#### Users Information
> GET '/api/users/:id'
+ This will grab a single user as specified by their ID and will return all their information.

```
{
  "id": 3,
  "username": null,
  "password": null,
  "email": null,
  "created_at": "2017-04-06T19:57:31.741Z",
  "updated_at": "2017-04-06T19:57:31.741Z",
  "name": "tiytest2"
}
```

#### User's Most Recent Twitter Activity
> GET '/api/twitterings/:id'
+ After you pass in the id of the desired user, this will display the last piece of activity for the specific user.  An oauth_token must be passed in as a parameter, as well as an id, since this is for the current user.

```
{
  "id": 4,
  "tweets": 4,
  "likes": 3,
  "user": {
    "id": 3,
    "username": null,
    "password": null,
    "email": null,
    "created_at": "2017-04-06T19:57:31.741Z",
    "updated_at": "2017-04-06T19:57:31.741Z",
    "name": "tiytest2"
  }
}
```

#### All of a User's Activity Since Signing Up
> GET '/api/twitterings'
+ An oauth_token must be passed in as a parameter since this is for the current user.  Information will output as an array.

```
[
  {
    "id": 1,
    "tweets": 26,
    "likes": 18,
    "user": {
      "id": 3,
      "username": null,
      "password": null,
      "email": null,
      "created_at": "2017-04-06T19:57:31.741Z",
      "updated_at": "2017-04-06T19:57:31.741Z",
      "name": "tiytest2"
    }
  },
  {
    "id": 4,
    "tweets": 4,
    "likes": 3,
    "user": {
      "id": 3,
      "username": null,
      "password": null,
      "email": null,
      "created_at": "2017-04-06T19:57:31.741Z",
      "updated_at": "2017-04-06T19:57:31.741Z",
      "name": "tiytest2"
    }
  }
]
```

#### New Twitter Entry with Tweet Count and Like Count
> POST '/api/twitterings'
+ This will query Twitter API and then return the number of tweets and likes, as integers, for the specified user.  User must be specified by their ID, passed in as a parameter.  This user must have already signed up and authorized us to read their information.
