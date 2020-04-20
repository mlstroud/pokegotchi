# _Tamagatchi_

#### _Creates a tamagatchi that the user can feed, tuck-in, and play with., 4/16/2020_

#### By _**DJ Zevenbergen & Matt Stroud**_

## Description

_This web application uses classes, looping, arrays, asynchrony, and an API to create an interactive web application._

## Setup/Installation Requirements

* Clone repository from GitHub in terminal or console
* npm install
* npm run start


## Specs

* - Allows user to create a tamagatchi pet
    * Input: "Create Tamagatchi" Name: "Jimmy"
    * Output: "Hi, this is your tamagatchi, Jimmy. He needs to be fed, played with, and put to bed!"


* - Decrease tamagatchi food, sleep, and happiness over time
    * Input: "1 minutes passes"
    * Output: "Jimmy is hungry, sleepy, and lonely"


* -  Allows user to feed tamagatchi
    * Input: "Feed Jimmy"
    * Output: "Jimmy is super full and happy!"


* - Allows user to play with tamagatchi
    * Input: "Play with Jimmy"
    * Output: "Jimmy is jumping for joy!"


* - Allows user to put tamagatchi to bed
    * Input: "Tuck in Jimmy"
    * Output: "Jimmy is well rested"

* - Tracks tamagatchi health based on feeding, sleeping, playing, and cleaning.
    * Input: "User regularly plays, feeds, tucks in, and cleans"
    * Output: "your tamagatchi is super healthy!"

    or

    * Input: "User neglects"
    * Output: "your tamagatchi is sick and is seeking the sweet relief of death"

* - Decrease tamagatchi food, sleep, and happiness over time
    * Input: "1 minutes passes"
    * Output: "Jimmy is hungry, sleepy, and lonely"

* - Keeps track of how long the user can keep the tamagatchi alive
    * Input: "tamagatchi health goes to 0 after 10 minutes"
    * Output: "Jimmy died at the ripe old age of 10!"


* - If food, sleep, or happiness go below a certain threshold, health will start to decrease at a certain rate
    * Input: "tamagatchi's food reaches 3/10"
    * Output: "Your tamagatchi is hungry!" decrease health by 5% every 5 seconds until fed

  
* - Once the tamagatchi reaches 7 minutes old, their max health decreases by 10% per minute
    * Input: "tamagatchi's food reaches 3/10"
    * Output: "Your tamagatchi is hungry!" decrease health by 5% every 5 seconds until fed

    
* - If food is above 8/10, the tamagatchis health increases by x% per second
    * Input: 
    * output: "tamagatchi health goes from 8/10 to 9/10 in 30 seconds"

* - Displays an "egg" to the user
    * Input: "some time passes"
    * Output: "Your egg is hatching!" - the tamagatchi is displayed

          

## Known Bugs
* If you're on a windows machine, you should replace line 8 of the package.json file with: "start": "npm run build & webpack-dev-server --open --mode development"

## License

Copyright © 2020

**_DJ Zevenbergen & Matt Stroud_**
