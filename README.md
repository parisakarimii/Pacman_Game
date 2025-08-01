🧱 Level & Wall Management (Explanation)

This part of the project is responsible for managing the different levels of the game and dynamically generating the walls for each level.

🎯 Purpose of This Module:

To create a flexible system for defining any number of game levels without repeating code. This allows for easy expansion of the game by simply adding new level data.

🧩 How It Works:

● Each level contains a set of walls, with their position and size defined numerically.

● All levels are stored in a structured data format.

● When the player enters a new level, the system first clears the walls from the previous one, then generates and displays the new set of walls automatically.

● As the player progresses and meets certain conditions (like score thresholds), the next level is loaded dynamically.

✅ Key Advantages:

● Unlimited levels can be added just by extending the level data.

● Logic for level building is separated from core gameplay logic, making the project more modular.

● Eliminates code duplication and improves readability and maintainability.

● Scalable and ready for use in more complex game projects.
