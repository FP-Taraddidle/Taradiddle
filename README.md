# README

### Routes

#### User Sign In/Log In
> GET '/auth/twitter'
+ This will redirect the user logging in to the twitter authorization page and will redirect them back to our root upon successful login

#### Twitter Sign Up
> GET 'api/twitter/signup'
+ Redirects the user to the Twitter Sign Up page, in case they do not have an account before entering our site.

#### User Update for email/questionnaire
> PUT '/api/users/:id'
+ Email and Intensity are the only parameters you can pass in for a given user ID

#### Users Information
> GET '/api/users/:id'
+ This will grab a single user as specified by their ID and will return all their information.

```
example url:
localhost:3000/api/users/30?token=1LDTFzvjYkDQZwUYJV1v6KND

{
  "id": 30,
  "email": null,
  "created_at": "2017-04-17T19:47:05.067Z",
  "updated_at": "2017-04-17T19:47:05.067Z",
  "name": "tiytest1",
  "intensity_id": null,
  "token": "1LDTFzvjYkDQZwUYJV1v6KND"
}
```

#### User's Most Recent Twitter Activity
> GET '/api/twitterings/:id'
+ After you pass in the id of the desired user, this will display the last piece of activity for the specific user.  A token must be passed in as a parameter, as well as an id, since this is for the current user.

```
example url:
localhost:3000/api/twitterings/30?token=1LDTFzvjYkDQZwUYJV1v6KND

{
  "id": 4,
  "tweets": 4,
  "likes": 3,
  "user": {
    "id": 30,
    "email": null,
    "created_at": "2017-04-17T19:47:05.067Z",
    "updated_at": "2017-04-17T19:47:05.067Z",
    "name": "tiytest1",
    "intensity_id": null,
    "token": "1LDTFzvjYkDQZwUYJV1v6KND"
  }
}
```

#### All of a User's Activity Since Signing Up
> GET '/api/twitterings'
+ A token must be passed in as a parameter since this is for the current user.  Information will output as an array.

```
example url:
localhost:3000/api/twitterings/?token=1LDTFzvjYkDQZwUYJV1v6KND

[
  {
    "id": 1,
    "tweets": 26,
    "likes": 18,
    "user": {
      "id": 30,
      "email": null,
      "created_at": "2017-04-17T19:47:05.067Z",
      "updated_at": "2017-04-17T19:47:05.067Z",
      "name": "tiytest1",
      "intensity_id": null,
      "token": "1LDTFzvjYkDQZwUYJV1v6KND"
    }
  },
  {
    "id": 4,
    "tweets": 4,
    "likes": 3,
    "user": {
      "id": 31,
      "email": null,
      "created_at": "2017-04-17T19:47:05.067Z",
      "updated_at": "2017-04-17T19:47:05.067Z",
      "name": "tiytest2",
      "intensity_id": null,
      "token": "1LDTFzvjYkDQZwUYJV1v6KND"
    }
  }
]
```



#### Individual Blocks with Exercises
> GET '/api/block'
+ Gets all the exercises and the associated information for an individual block.

```
example url:
localhost:3000/api/block?id=12

[
  {
    "id": 43,
    "name": "Lunges",
    "description": "Start with your feet together and arms resting comfortably by your sides. Step forward with your right foot and lower your body until your front knee is at 90 degrees and your back knee is not touching the floor. Then, to complete the exercise, push off your front right foot while straightening your left leg. Keep your right foot off of the floor and balance with your right thigh parallel to the floor.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.753Z",
    "updated_at": "2017-04-13T20:38:58.753Z"
  },
  {
    "id": 47,
    "name": "Jumping Jacks",
    "description": "Sometimes jumping gets a bad rap, but when it comes to increasing bone density it is a great thing. A jumping jack is one of the best plyometric exercises out there and it is a fantastic cardiovascular drill. If you are looking for a way to improve your quickness, this is the exercise.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.768Z",
    "updated_at": "2017-04-13T20:38:58.768Z"
  },
  {
    "id": 51,
    "name": "Burpee",
    "description": "The great thing about burpees is that they combine cardio and strength into one exercise. A burpee is a complex, total-body exercise that will work your upper and lower body at the same time with a strong focus on the core. For an added cardio punch, add a tuck jump into the mix before the squat.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.777Z",
    "updated_at": "2017-04-13T20:38:58.777Z"
  },
  {
    "id": 49,
    "name": "Sit-Ups",
    "description": "Performing a sit-up correctly is one of the most challenging body-weight exercises, as it requires extra abdominal strength to get all the way up without the help of your arms and legs. If you can’t do a standard sit-up, try a crunch variation.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.773Z",
    "updated_at": "2017-04-13T20:38:58.773Z"
  }
]

```

#### Get a User's Current Routine
> GET '/api/routine'

```
example url:
localhost:3000/api/routine?id=30&token=1LDTFzvjYkDQZwUYJV1v6KND

[
  {
    "id": 47,
    "name": "Jumping Jacks",
    "description": "Sometimes jumping gets a bad rap, but when it comes to increasing bone density it is a great thing. A jumping jack is one of the best plyometric exercises out there and it is a fantastic cardiovascular drill. If you are looking for a way to improve your quickness, this is the exercise.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.768Z",
    "updated_at": "2017-04-13T20:38:58.768Z"
  },
  {
    "id": 51,
    "name": "Burpee",
    "description": "The great thing about burpees is that they combine cardio and strength into one exercise. A burpee is a complex, total-body exercise that will work your upper and lower body at the same time with a strong focus on the core. For an added cardio punch, add a tuck jump into the mix before the squat.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.777Z",
    "updated_at": "2017-04-13T20:38:58.777Z"
  },
  {
    "id": 43,
    "name": "Lunges",
    "description": "Start with your feet together and arms resting comfortably by your sides. Step forward with your right foot and lower your body until your front knee is at 90 degrees and your back knee is not touching the floor. Then, to complete the exercise, push off your front right foot while straightening your left leg. Keep your right foot off of the floor and balance with your right thigh parallel to the floor.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.753Z",
    "updated_at": "2017-04-13T20:38:58.753Z"
  },
  {
    "id": 46,
    "name": "Mountain Climbers",
    "description": "One of the best core exercises you’ll find. This exercise combines the difficulty of a plank, deep core stabilization and alternating knee drives towards your chest. The knee drives also increases your heart rate, which is the perfect way to flatten your abs and burn calories. It’s crucial that you maintain proper alignment throughout the exercise and keep your shoulders and wrists perfectly stacked.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.766Z",
    "updated_at": "2017-04-13T20:38:58.766Z"
  },
  {
    "id": 50,
    "name": "Plank",
    "description": "The plank has become one of the key go to exercises to define your core. If you are struggling to maintain the arms straight position try this exercise on your forearms. Be sure to align your elbows and shoulders and keep your hips, heels and shoulders at the same height.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.775Z",
    "updated_at": "2017-04-13T20:38:58.775Z"
  },
  {
    "id": 46,
    "name": "Mountain Climbers",
    "description": "One of the best core exercises you’ll find. This exercise combines the difficulty of a plank, deep core stabilization and alternating knee drives towards your chest. The knee drives also increases your heart rate, which is the perfect way to flatten your abs and burn calories. It’s crucial that you maintain proper alignment throughout the exercise and keep your shoulders and wrists perfectly stacked.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.766Z",
    "updated_at": "2017-04-13T20:38:58.766Z"
  },
  {
    "id": 49,
    "name": "Sit-Ups",
    "description": "Performing a sit-up correctly is one of the most challenging body-weight exercises, as it requires extra abdominal strength to get all the way up without the help of your arms and legs. If you can’t do a standard sit-up, try a crunch variation.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.773Z",
    "updated_at": "2017-04-13T20:38:58.773Z"
  },
  {
    "id": 51,
    "name": "Burpee",
    "description": "The great thing about burpees is that they combine cardio and strength into one exercise. A burpee is a complex, total-body exercise that will work your upper and lower body at the same time with a strong focus on the core. For an added cardio punch, add a tuck jump into the mix before the squat.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.777Z",
    "updated_at": "2017-04-13T20:38:58.777Z"
  },
  {
    "id": 50,
    "name": "Plank",
    "description": "The plank has become one of the key go to exercises to define your core. If you are struggling to maintain the arms straight position try this exercise on your forearms. Be sure to align your elbows and shoulders and keep your hips, heels and shoulders at the same height.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.775Z",
    "updated_at": "2017-04-13T20:38:58.775Z"
  },
  {
    "id": 48,
    "name": "Leg Raises",
    "description": "This lower abdominal exercise can help you build a stronger back and make you less prone to injury. Keep your low back pressing into the ground the entire time and lower your legs as close to the floor as possible without allowing them to touch. To make this exercise easier, bend your knees. Or for more of challenge, keep your legs straight.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.771Z",
    "updated_at": "2017-04-13T20:38:58.771Z"
  },
  {
    "id": 47,
    "name": "Jumping Jacks",
    "description": "Sometimes jumping gets a bad rap, but when it comes to increasing bone density it is a great thing. A jumping jack is one of the best plyometric exercises out there and it is a fantastic cardiovascular drill. If you are looking for a way to improve your quickness, this is the exercise.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.768Z",
    "updated_at": "2017-04-13T20:38:58.768Z"
  },
  {
    "id": 45,
    "name": "Push-Ups",
    "description": "This is one of the best upper body exercises because it works everything -- your chest, your back, your arms and even your abs! Make sure your shoulders line up with your wrists and you tuck your elbows in toward your side (so don’t flare your elbows out wide). Try to get your chest and hips as close to the floor as possible without touching.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.764Z",
    "updated_at": "2017-04-13T20:38:58.764Z"
  },
  {
    "id": 51,
    "name": "Burpee",
    "description": "The great thing about burpees is that they combine cardio and strength into one exercise. A burpee is a complex, total-body exercise that will work your upper and lower body at the same time with a strong focus on the core. For an added cardio punch, add a tuck jump into the mix before the squat.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.777Z",
    "updated_at": "2017-04-13T20:38:58.777Z"
  },
  {
    "id": 43,
    "name": "Lunges",
    "description": "Start with your feet together and arms resting comfortably by your sides. Step forward with your right foot and lower your body until your front knee is at 90 degrees and your back knee is not touching the floor. Then, to complete the exercise, push off your front right foot while straightening your left leg. Keep your right foot off of the floor and balance with your right thigh parallel to the floor.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.753Z",
    "updated_at": "2017-04-13T20:38:58.753Z"
  },
  {
    "id": 44,
    "name": "Squats",
    "description": "One of the best exercises is also one of the most natural (just watch a baby sit). This movement works all of the muscles in the lower body including the quads, glutes and hamstrings. It also provides an extra kick for the core as you need your deep abdominal muscles and back to keep your torso upright and perform this exercise correctly.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.761Z",
    "updated_at": "2017-04-13T20:38:58.761Z"
  },
  {
    "id": 45,
    "name": "Push-Ups",
    "description": "This is one of the best upper body exercises because it works everything -- your chest, your back, your arms and even your abs! Make sure your shoulders line up with your wrists and you tuck your elbows in toward your side (so don’t flare your elbows out wide). Try to get your chest and hips as close to the floor as possible without touching.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.764Z",
    "updated_at": "2017-04-13T20:38:58.764Z"
  },
  {
    "id": 48,
    "name": "Leg Raises",
    "description": "This lower abdominal exercise can help you build a stronger back and make you less prone to injury. Keep your low back pressing into the ground the entire time and lower your legs as close to the floor as possible without allowing them to touch. To make this exercise easier, bend your knees. Or for more of challenge, keep your legs straight.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.771Z",
    "updated_at": "2017-04-13T20:38:58.771Z"
  },
  {
    "id": 43,
    "name": "Lunges",
    "description": "Start with your feet together and arms resting comfortably by your sides. Step forward with your right foot and lower your body until your front knee is at 90 degrees and your back knee is not touching the floor. Then, to complete the exercise, push off your front right foot while straightening your left leg. Keep your right foot off of the floor and balance with your right thigh parallel to the floor.",
    "picture": null,
    "created_at": "2017-04-13T20:38:58.753Z",
    "updated_at": "2017-04-13T20:38:58.753Z"
  }

```

#### New Twitter Entry with Tweet Count and Like Count
> POST '/api/twitterings'
+ This will query Twitter API and then return the number of tweets and likes, as integers, for the specified user.  User must be specified by their ID, passed in as a parameter.  This user must have already signed up and authorized us to read their information.
