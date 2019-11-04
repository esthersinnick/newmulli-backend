

# mulli

<br>

## Description

This is an app for illustrators who want to prove themselves. 
The goal is to create a community for all artists, fostering an environment of healthy competitiveness and with which to improve your skills and portfolio.

The objective is to create a virtual meeting place for all artists, fostering an environment of healthy competitiveness and with which to improve your skills and portfolio.

## User Stories

- **ANON:**
    - **Home Page:** As an anon I can see the home page with an intro, active challenge/es, how to, and sign up/login form.
    - **Challenges list:** As an anon I can see a list of closed and active challenges, sort and filter them, and view the details of one challenge.
    - **Challenge detail:** As an anon I can see the details of an active or closed challenge.
    - **Menu:** As a user/admin I can sign up or log in.
    - **Signup:** As an anon I can sign up in the platform so that I can start joining challenges and manage my work.
    - **Login:** As a user/admin I can login to the platform so that I can start joining challenges and manage my work.
    - **404:** As an anon/user/admin I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.

- **USER:**
    - **Home Page:** As a user I can see the home page with active challenge/es (and join them), and how to.
    - **Challenges list:** As a user I can see a list of challenges, sort and filter them, and join or view the details of one challenge.
    - **Challenge detail:** As a user I can see the details of a challenge, join and upload/replace art (if is active()), vote (if is voting and I have joined) or see the ranking (if is closed).
    - **User's own Dashboard - challenges:** As a user/admin I can access my dashboard to see all challenges I'm joining/ have joined and upload/replace images
    - **User's own Dashboard - portfolio:** As a user/admin I can access my dashboard to see all the arts I have uploaded in a grid style.
    - **Other users Dashboard - challenges:** As a user/admin I can access other users' dashboard to see all challenges they have joined.
    - **Other users Dashboard - portfolio:** As a user/admin I can access other users' dashboard to see all the arts they have uploaded in a grid style.
    - **User Profile:** As a user/admin I can edit/update my profile and add an avatar.
    - **Menu:** As a user/admin I can logout.
    - **Notifications list:** As a user/admin I can see a list of notifications.
    - **Notification detail:** As a user/admin I can see a notification detail.

- **ADMIN:**
    - **Challenges list:** As an admin I can see a list of challenges and edit or delete theme.
    - **Challenge detail:** As an admin I can see the details of a challenge and edit or delete it.
    - **User Dashboard:** As an admin I can access to the challenges manager.
    - **Challenge Manager:** As an admin I can see a simple list of challenges, edit or delete theme and create new.
    - **Create/edit challenge:** As an admin I can add or edit challenges.


### Challenges Status

-  **Draft:** These challenges that I don't want to show anywhere
-  **Active:** These challenges that are "joinable" and "submitable" for the users
-  **Voting:** Status for the challenges that are closed for submissions (it allows to vote the arts you like if you have joined)
-  **Closed:** Challenges finished with a ranking of users

## Backlog

Challenges:
- add start and end date to update the status automatically.
- add categories to challenges.
- challenges search.
- challenges multi-images.
- Add background images and dark/light option.
- Add a preview for challenges creator.

User profile:
- Limit to 3 votes per user on each challenge
- add notifications for challenges status changes, ranking...
- add points and rank system based on participation, votes...
- convert users to admin based on their rank.
- Users search.

Notifications:
- Delete automatically notifications readed after 30 days.

Tournament:
- create periodic tournaments: pack of thematic challenges with a winner based on the likes of all the challenges.


<br>


# Client / Frontend

## Routes
| Path | Component | Permissions | Behavior |
| - | - | - | - |
| `/` | HomePage > MainHeader, WhatIs, ChallengeDetail, HowTo | public | Home page with 4 sections: Main header, What is Mulli, Current CHallenges, How to |
| `/not-found` | NotFoundPage | public | Not found page |
| `/signup` | SignupPage | public | Sign up page |
| `/login` | LoginPage | public | Log in page |
| `/user/<:userId>/challenges` | UserPage > UserProfile, ChallengesResume, ChallengesList | user only | Shows the details of a user and all user's challenges |
| `/user/<:userId>/portfolio` | UserPage > UserProfile, ChallengesResume, ArtsList | user only | Shows the details of a user and all user's arts |
| `/user/notifications` | NotificationsPage > NotificationCard | user only | List of notifications |
| `/user/notifications/:notificationId` | NotificationDetailPage | user only | Notification detail |
| `/user/edit` | ProfilePage | user only | Profile form for update |
| `/challenges` | ChallengeListPage > ChallengeCard, ChallengeFilter, ChallengeSearcher, StatusToggle | public | Shows all challenges in a list |
| `/challenges/:challengeId` | ChallengeDetailPage > ChallengeDetail, Timer, UploadArt , [ArtsList > ArtCard], UserVotes, Top3 | user only | Shows the details of a Challenge |
| `/challenges/manager` | ChallengesManagerPage > ChallengesSimpleList | admin only | Shows all challenges in lists based on their status |
| `/challenges/add` | AddChallengePage | admin only | Form for add a new Challenge |
| `/challenges/:challengeId/edit` | EditChallengePage | admin only | Form filled for edit a Challenge |



## Components

### Pages
  - HomePage
  - NotFoundPage
  - SignupPage
  - LoginPage
  - UserPage
  - NotificationsPage
  - NotificationDetailPage
  - ProfilePage
  - ChallengeListPage
  - ChallengeDetailPage
  - ChallengesManagerPage
  - AddChallengePage
  - EditChallengePage 

### Components
  - MainHeader
  - WhatIs
  - ChallengeDetail
  - HowTo
  - SignUpForm
  - LoginForm
  - UserProfile
  - ChallengesResume
  - ChallengesList
  - ArtsList
  - NotificationCard
  - ChallengeCard
  - ChallengeFilter
  - ChallengeSearcher
  - StatusToggle
  - ChallengeDetail
  - Timer
  - UploadArt
  - ArtsList
        - ArtCard
  - UserVotes
  - Top3
  - ChallengesSimpleList
  - ChallengeSimpleCard
  - ChallengeForm


## Services
- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()

- Challenges Service
  - getAllChallenges()
  - getChallenges(status)
  - getOneChallenge()
  - AddOneChallenge(newChallenge)
  - UpdateChallenge(id, updateChallenge)
  - DeleteOneChallenge(id)
  
- Art Service 
  - getAllArts()
  - getOneArt()
  - AddOneArt(newArt)
  - UpdateArt(id, updateArt)
  - DeleteOneArt(id)

<br>


# Server / Backend


## Models

User model

```javascript
{
  isAdmin:boolean,
  name:String,
  username:String ,
  email:String, // required & unique
  password:String, // required
  instagram:String,
  website:String,
  avatar:String
  
}
```

Challenge model

```javascript
 {
   name:String,
   startDate:String,
   endDate: String,
   startVotingDate:String,
   endVotingDate: String,
   description: String,
   creator:  {type: Schema.Types.ObjectId,ref:'User'},
   illustrators: Number,
   totalVotes: Number
 }
```

Art model

```javascript
{
  user: {type: Schema.Types.ObjectId,ref:'User'},
  challenge: {type: Schema.Types.ObjectId,ref:'Challenge'},
  image: String, 
  votes: [{type: Schema.Types.ObjectId,ref:'User'}],
  rankingPosition: Number,
  //uploadDate: String
}
```


<br>


## API Endpoints (backend routes)

| HTTP Method | URL                                           | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | /dashboard/:userId                            | {userId}                     |                | 400          | show user data, his arts and the challenges has played          |
| GET         | /dashboard                                    | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| GET         | /profile                                      | Saved session                |                |              | show a form filled with the user info                        |
| PUT         | /profile/edit                                 | {userUpdate}                 |                |              | edit user data                                                   |
| PUT         | /profile/password/edit                        | {newPassword}                |                |              | edit password                                                    |
| POST        | /auth/signup                                  | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | /auth/login                                   | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password challenges (404), then stores user in session |
| POST        | /auth/logout                                  | (empty)                      | 204            | 400          | Logs out the user                                            |
| GET         | /challenges                                   |                              |                | 400          | Show all challenges                                             |
| POST        | /challenges/add                               | {}                           | 201            | 400          | Create and save a new challenge                                  |
| GET         | /challenges/:challengeId                      | {id}                         |                |              | Show specific challenge                                          |
| GET         | /challenges/:challengeId/edit/                |                              |                |              | get info and fill form                                       |
| PUT         | /challenges/:challengeId/edit/                | {challengeUpdated}           | 200            | 400          | edit challenge                                                   |
| DELETE      | /challenges/:challengeId/delete               | {challengeId}                | 201            | 400          | delete challenge                                                 |
| GET         | /arts/                                        | {}                           |                |              | add art                                          |
| GET         | /arts/:userId                                 | {userId}                     |                |              | add art                                          |
| GET         | /arts/:challengeId                            | {challengeId}                |                |              | add art                                          |
| POST        | /arts/add                                     | {}                           |                |              | add art                                          |
| PUT         | /arts/:artId/update                           | {artId, artUpdated}          |                |              | edit art (update image)                                      |


<br>


## Links

### Trello/Kanban

[Trello board](https://trello.com/b/gpSU0hrj/mulli)

### Git

[Client repository Link](https://github.com/esthersinnick/mulli-frontend)

[Server repository Link](https://github.com/esthersinnick/mulli-backend)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com)