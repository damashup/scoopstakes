# Scoopstakes Client-side READ ME

# Pre-Releases (development tracking)

Up Next:
### v0.4.0

Complete:
### v0.3.0 - Refactoring and redux testing added
### v0.2.0 - Email/ Password Sign-in added
### v0.1.0 - Firebase and Google Sign-in added
### v0.0.0 - Page Template: Header & Subheader only

<hr>

# APP OVERVIEW

### PAGES (Overview)
> [Main Page Template](#main-page-template) - in progress
> [Sign In](#sign-in) - complete
> [Sign Up](#sign-up) - complete
> [Play Now](#play-now) - in progress
> [Leaderboard](#leaderboard) 
> [Results](#results-currentUser-only)
> [Profile](#profile-currentUser-only) (currentUser)
> [ChallengeNanzo](#challenge-nanzo-currentUser-only) (currentUser)
> [Battle](#battle-currentUser-only) (curentUser)

### STATE MANAGEMENT (Overview)
> [Redux Directory](#redux-directory)
> [Redux User](#redux-user)

### API MANAGEMENT (Overview)
> (Firebase) - Firebase utils
> (Graphql) - Graphql utils
> (Football-Data) - Football data utils
> (EOS) - EOS utils
> (STEEM) - STEEM utils

# Testing (Overview)
> (Unit test) - Component (snapshot testing) - button/ CUSTOM BUTTON
> (Unit test) - Component (snapshot testing) -  divider/ CUSTOM DIVIDER
> (Unit test) - Component (snapshot testing) -  form/ FORM INPUT
> (Unit test) - Component (snapshot testing) -  page-template/ MAIN PAGE
> (Unit test) - Component (snapshot testing) -  page-template/main-page/ HEADER
> (Unit test) - Component (snapshot testing) -  page-template/main-page/ SUBHEADER
> (Unit test) - Component (snapshot testing) -  page-template/main-page/ DIRECTORY
> (Unit test) - Component (snapshot testing) -  page-template/main-page/directory DIRECTORY ITEM
> (Unit test) - Component (snapshot testing) -  page-template/styles BASE STYLES
> (Unit test) - Component (snapshot testing) -  PLAY NOW
> (Unit test) - Component (snapshot testing) -  PROFILE
> (Unit test) - Component (snapshot testing) -  SIGN-IN
> (Unit test) - Component (snapshot testing) -  sign-in/sign-in-with-social SIGN-IN WITH EMAIL
> (Unit test) - Component (snapshot testing) -  sign-in/sign-in-with-social SIGN-IN WITH GOOGLE
> (Unit test) - Component (snapshot testing) -  sign-in/sign-in-with-social SIGN-IN WITH FACEBOOK
> (Unit test) - Component (snapshot testing) -  SIGN-UP
> (Unit test) - Component (snapshot testing) -  sign-up/ SIGN UP WITH EMAIL
> (Unit test) - Component (snapshot testing) -  spinner/ WITH SPINNER
> (Unit text) - Firebase - Firebase Utils
> (Unit text) - Redux - Directory reducer
> (Unit text) - Redux - Directory selectors
> (Unit text) - Redux - User actions
> (Unit text) - Redux - User reducer
> (Unit text) - Redux - User sagas
> (Unit text) - Redux - User selectors
> (Unit text) - Redux - User types
> (Unit text) - App.js

<hr>

# Main Page Template
### Description
* All pages will have the same page template structure.
* Header and SubHeader and Footer
* The Header will hold the NanzoScoop Logo, a Scoopstakes title (to be designed) and a SignIn component
* The SubHeader will hold the main navigation directory
* The navigation directory and the Sign In component will be dynamic based on whether the user is logged in (currentUser) or not (loggedOutUser)
### To build (WBS)
> (Page Template: Main Page) - Main Page component - ADDED
> (Page Template: Main Page) - Header component - ADDED
> (Page Template: Main Page) - SubHeader component - ADDED
> (Page Template: Main Page) - Directory component - ADDED
> (Page Template: Main Page) - Directory Item component - ADDED
> (Page Template: Main Page) - Header Scoopstakes Title - TO ADD

# Sign In
### Description
* Users can sign in with either (a) email/ password (b) social media sign in authentication or (c) cryptocurrency wallet (e.g. Steemconnect, Scatter etc).
* The Sign In will utilise Firebase, to enable users to have one account yet multiple ways of signing. Sign in methods will be linked to accounts by the users email. The best method of linking cryptocurrency wallet users account to enable sign in will need to be investigated. It would be desirable to give users flexibility around cashing out, i.e for them to be able to specific a given address or account to send winnings to. Thus seperate to sign in, there will need to be a cash out portal. This will sit in the [user profile](#profile-landing-page-for-current-user) page.
* A custom button will be used to submit the Sign In action
* The User State will be managed in Redux user folder
### To build (WBS)
> (Sign In Page) - Sign-in Page ADDED
> (Sign In Page) - Sign-in with Email/ Password component ADDED
> (Sign In Page) - Sign-in with Google component ADDED
> (Sign In Page) - Sign-in with Twitter component
> (Sign In Page) - Sign-in with Facebook component ADDED
> (Sign In Page) - Sign-in with Github component
> (Custom Button) - with Sign-in prop component ADDED

# Sign up landing page
### Description
* Users can sign up with email and password
* The Sign Up will utilise Firebase and Signed up users will be stored on (and retrieved from) the Firebase database
### To build (WBS)
### To test (WBS)

# Play Now landing page
### Description
* Play now will be the home page for the app.
* Play now will have several elements, primarily designed to (a) attract new users (b) get exiting users to play
* Elements will include:
* - a Upcoming round component
* - a Join Now Splash component
* - a Previous round component 
* - a Leaderboard component 
* - a Challenge Nanzo banner component
* - a Battle banner component
* - a Join Nanzo Patreon component
* A currentUser will be able to
* - quick add or edit the prediction for the next upcoming round from Play Now page
* - quick Challenge Nanzo
* - quick Issue a Battle
### To build (WBS)
> (Play Now) - Play Now landing page
> (Play Now) - Play Now for loggedOutUser
> (Play Now) - Play Now for currentUser

# Leaderboard landing page
### Description
* The Leaderboard landing page will host all leaderboards
* All users (loggedOutUser and currentUser) will be able to view all leaderboards
* Users will be able to view leaders by rounds or by seasons
* Users will be able to select a specific round or season
* Upon selecting a round (or season) the leaderboard table will be displayed
* The leaderboard table will contain summary information for each entrants
* Entrants will be displayed on the leaderboard in ascending order
* Users will be able to click through to a specific users entry via the leaderboard
* Users will be able to search for a specific entrant
### To build (WBS)
> (Leaderboard) - Leaderboard landing page
> (Leaderboard) - Leaderboard Round/Season selector component
> (Leaderboard) - Leaderboard Number selector component
> (Leaderboard) - Leaderboard Search Entrant component
> (Leaderboard) - Leaderboard/:Round Table component
> (Leaderboard) - Leaderboard/:Round Table Item component
> (Leaderboard) - Leaderboard/:Season Table component
> (Leaderboard) - Leaderboard/:Season Table Item component

# Results currentUser Only
### Description
* The Results landing page will be available to the currentUser only
* The page will show a paginated table of all Rounds
* The page will also so upcoming rounds, 
* The currentUser will be able to either enter or edit upcoming rounds (depending on whether their have alrady entered)
* By clicking on a table, the currentUser will be able to view their prediction/ results for that round
### To build (WBS)
> (Results) - Results landing page
> (Results) - Upcoming Rounds schedule component
> (Results) - Result Summary for Last Completed Round component
> (Results) - Round List Table component
> (Results) - Round List Item component
> (Results) - Results/:RoundId page (returns currentUser's results for roundId )
> (Results) - Results/:RoundId/userId page (returns userId's results for roundId)

# Profile currentUser Only
### Description
* The Profile page will be where the currentUser can manage their account
### To build (WBS)
> (Profile) - Profile page
> (Profile) - Account details component
> (Profile) - Link Accounts component
> (Profile) - Wallet component
> (Profile) - Cash Out component


# Challenge Nanzo currentUser Only
### Description
* Challenge Nanzo is an opt in extra to Scoopstakes.
* When the currenUser enters a prediction, they will be given an option to 'Challenge Nanzo'
* If they do better than Nanzo's prediction in that round they will be eligible for further crypto rewards
* The Challenge Nanzo page will be where the currentUser can view their Challenge Nanzo Results
* Elements will include:
* - a Round selector where the currentUser can select the round they want to view
* - a Prize Winners component, showing winners of the Challenge Nanzo prizes 
* - a Challenge Result Summary component, showing a summary of their points tally vs Nanzo for the selected Round
* - a Challenge Result Details component, showing a per Fixture detailed breakdown and how the currentUser did vs Nanzo
### To build (WBS)
> (Challenge Nanzo) - Challenge Nanzo page
> (Challenge Nanzo) - Challenge Nanzo Round selector component
> (Challenge Nanzo) - Challenge Nanzo Prize Winners component
> (Challenge Nanzo) - Challenge Result Summary component
> (Challenge Nanzo) - Challenge Result Details component


# Battle currentUser Only
### Description
* Battles are an element that gives a new dimension to Scoopstakes as it enables PVP interaction
* Battles enables the currentUser to issue challenges to (and accept challenges from) other users
* When issuing a challenge, the currentUser is able to set how much the wager will be and in what denomination (EOS, Steem Dash BTC etc)
* The goal is for the wager to be processed and administered in a decentralised way, using Smart Contracts and Oracles.
* As an interim measure wagers will be recorded on change but adminstered off-chain
* Once a challenge is accepted (matched) the wager is locked in and cannot be backed out
* To add an element of gamification, the currentUser can change their prediction up until the round deadline date
* Elements in the Battle page will include:
* - a component where the currentUser can issue a Challenge
* - a component where the currentUser can view all their Open Challenges for Upcoming Round (and perform update and delete on them before they are accepted)
* - a component where the currentUser can view a summary of all their Matched Battles for Upcoming Round
* - a component where the currentUser can view (and accept) all open Challenges issued by other players
* - a component where the currentUser can view all the Matched Battles for the Upcoming Round
* - a component where the currentUser can view previous round and historical battle data
### To build (WBS)
> (Battle) - Battle page
> (Battle) - Battle/:RoundId component
> (Battle) - Battle/:RoundId Issue Challenge Popup component
> (Battle) - Battle/:RoundId/currentUser Open Challenge List For Current User component
> (Battle) - Battle/:RoundId/currentUser Edit Open Challenge List For Current User Popup component
> (Battle) - Battle/:RoundId/:BattleId Accept Challenge Popup component
> (Battle) - Battle/:RoundId/Matched Matched Battle List for Current User component
> (Battle) - Battle/:RoundId/Matched Matched Battle List for All Users component
> (Battle) - Battle/History/:RoundId/Matched Historic List of Matched/ Unmatched (filter by user or round)

# Redux directory
* Simple state management for navigation directory items
### Description
### To build (WBS)
> (State Management) - Directory Reducers
> (State Management) - Directory Selectors


# Redux user
### Description
* State management for Firebase users using Redux sagas
### To build (WBS)
> (State Management) - User actions
> (State Management) - User reducers
> (State Management) - User sagas
> (State Management) - User selectors
> (State Management) - User types




