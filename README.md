# nylira-maze

A JavaScript library for generating maze data.

    _______________________________________________________________________________
    | |  ________ |  ________ |   |__   |______ | |  ____   |     |   |   |   |  __ |
    |___|____ | | | |  __ |____ |_____|______  _| | |   |_|__ | | |_|___| | | | | | |
    |  __  __ | | |____ |____ |_|  ____  __ | |  ___| | |   |_| |__________ |___| | |
    |_|  _|_____| |  ___|   |  ___|   | | | | | |__  _| | |_____| |  __  _| |  ___| |
    |  _|   |  ___|_______|_|_____| | |___| |_|_____|  _| |___________|_____|_______|
    |  ___| | | |   |  ________    _|______ |  _|   | | | |  ______ |  ____ |  ____ |
    | |__ | | | | | | |  __   | | |   |_______|  _| | | | | |  ___| | |__ | | |__ | |
    |  ___| | |___|___| |  _| |_|___|___________|  _| | | | |____ |___|  _| |__  _| |
    | |  ___|___________|___|__________________ |  _____| | |   |____ |   |__ | |  _|
    | |   |______   |__   |  __ |    _____|  ___| | |   | | | | |   |___|__ |___|__ |
    | | |_________|_____| |___| | |_________|  ___| | | |_____| | | |   |  _______| |
    | |____ |   |   |  _________| |  ____   |____ | | |______ |___|___|_______|   | |
    |  _|  _| | | |_|__ |  __  _| | |  ___|__   |___| |____ | |  ________  _____| | |
    |__ | |___|__  __ | | |   |  _|_|__   |___|__ | | |   | | | |   |   |_|     | | |
    |  _| |  _______|___| | | |____ |  _|______ |  _| | | |__ | |_|___|   | | |_|__ |
    |__ | |_____|  _______| |__  _| |___|  __ | |__ |___|__ | |__ |  ___| |_| |  ___|
    | | | |  __ |________ | |___|  _|   | | | |__ | |  _____|_____|__ |_______|   | |
    |___|_____|___________|___________|___|_______|___|_________________________|___|

## Installation

    npm i nylira-maze --save

## Usage

Basic usage:

    var maze = require('nylira-maze')

    // returns a 2d array of values for a 10x10 maze
    maze()

    // returns a 2d array of values for a 20x20 maze
    maze(20)

    // returns a 2d array of values for a 20x20 maze
    maze(15, 23)

# Parameters

Keep reading to learn about the function call below: 

    maze(11, 13, 'backtracker', undefined, true)

* **Parameter 1:** Width.
* **Parameter 2:** Height.
* **Parameter 3:** The maze generation algorithm. Currently only Recursive Backtracker is available (`'backtracker'`).
* **Parameter 4:** The integer seed for the maze. Putting a value here will guaranteee you can recreate the maze over and over again.
* **Parameter 5:** You can preview the grid by passing in `true` as the fifth parameter.

That function call above will generate the following:

    _______________________________________________
    | |  ________ |   |     |  ____   |__  ____  _|
    | | |  __ | | |_|__ | |_| |  ___|__ | |  _|__ |
    |___|__ |__ | |   |_|_____|__ |   | |___|   | |
    |  _____|  _|___|__________ |  _| |__ |  _|__ |
    |   |____ |   |____ |   |  _| | |__ | |__   |_|
    | |____ | | | |  __ | |___| | |   | |__ | |__ |
    |_____| |___|___| | | | |   | | | | | | |___| |
    |   |  _|______  ___| |  _|___|_| | | | |  __ |
    | |  _|  ____ | |  ___| |  ____  _| |  ___|  _|
    | | |  _|  _| |_|__ |_____|  ___|  _| |   |___|
    | |_|__ |__ |__   |______ | |   |__ |_| |____ |
    |__ |  _______| | |    _| | | |__ |  ___|   | |
    |  _|__ |  ____ |_| | |  _| | | | |___|  _|__ |
    |  _____|____ |_|  _|___|___| |  _|   | |   | |
    |___________|_________________|_____|___|_|___|

## Test

See if it works.

    npm test

## License

MIT
