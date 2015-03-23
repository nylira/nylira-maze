# nylira-maze

A JavaScript library for generating maze data.

    _________________________________________________________________________________
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

## Parameters

Keep reading to learn about the function call below: 

    maze(17, 23, 'backtracker', undefined, true)

* **Parameter 1:** Width.
* **Parameter 2:** Height.
* **Parameter 3:** The maze generation algorithm. Options:
  * `"growing-tree:random"`: lots of dead ends, similar to Prim's Algorithm
  * `"growing-tree:newest"`: long windy passages
  * `"growing-tree:middle"`: lots of long straight passages
  * `"growing-tree:oldest"`: only long straight passages
  * `"growing-tree"`: synonym for `growing-tree:random`
  * `"backtracker"`: long windy passages
  * `undefined`: synonym for `growing-tree:newest`
* **Parameter 4:** The integer seed for the maze. Putting a value here will guaranteee you can recreate the maze over and over again.
* **Parameter 5:** You can preview the grid by passing in `true` as the fifth parameter.

That function call above will generate the following:

    ___________________________________
    | |  __  _________|  ______ |  __ |
    | |___|____ |  __ |______ | | | | |
    |____ |__ | | |  ____ |___|__ | | |
    |   |____ | | | |   |______ | | | |
    | |__ |  _| | | | |_____|  _|___| |
    | |  _| |  _| | |______ | |     | |
    | | | | |_____| | |  __ | | | |___|
    |_| | |_________|_____|__ |_|____ |
    |   |  __  __ |  ______ | |     | |
    | | |__ | |_____|  _____| |_| | | |
    | |_____|____ | |__ |   | |  _|  _|
    |____ |  ___| |  _| | | | |__ | | |
    |  _|____ |  _|_____| | | |  _| | |
    |____ | |______  ___| | | | | | | |
    |     |  _|____ |_|   | |___| | | |
    | | | |__________ | |_| |  _____| |
    | | | |   |    _| |__ |___|__    _|
    | | |___| | | |  _|  _|   |  _|__ |
    |_| |__ | | |_| | |__ | | |____ | |
    |  _|  _|  _|   |__ | | |____ | |_|
    |__ |______ | |_________| |  _|   |
    |  _|     |_| | |    _|   | |  _| |
    |_____|_|_____|___|_____|_____|___|

## Test

See if it works.

    npm test

## License

MIT
