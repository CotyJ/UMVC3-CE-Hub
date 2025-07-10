# UMVC3 CE Character Hub


# Adding Data
Character data is located in /src/data/characterData.js

Characters have the following object structure:

    name
    id
    series
    author
    image  <!-- unused atm -->
    moves: {
      health: INT, <!-- unused atm -->
      assists: [],
      command_normals: [],
      specials: [],
      hypers: []
    },
    overview:
    changelog: []


## Move Inputs
Moves can be added by adding a string for the 'name' property and an array of strings for the inputs. For directions, use keypad notation, and for buttons, use 'L', 'M', 'H', 'S', or 'A' for generic attack button.


Example

    { name: 'Shoryuken (Air Ok)', input: ['6', '2', '3', '+', 'A'] },