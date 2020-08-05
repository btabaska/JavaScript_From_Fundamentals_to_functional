var characters = ["Mr. White", "Mrs. White", "Mr. Green", "Dr. Blue"]

var weapons = ["Candlestick", "Knife", "Musket", "Chair", "Rope"]

var rooms = ["Foyer", "Dining Room", "Kitchen", "Ballroom", "Bedroom"]

var confidential = {murder_weapon : "?", murderer : "?", murder_room : "?"}

confidential.murder_room = rooms.pop(Math.random(0, 4))
confidential.murder_weapon = weapons.pop(3)
confidential.murderer = characters.pop(0)

console.log(confidential)