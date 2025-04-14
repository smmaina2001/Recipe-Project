 Introduction
In today’s fast-paced digital age, food enthusiasts and home cooks alike increasingly turn to the internet for inspiration and guidance in the kitchen. This recipe web application aims to provide users with a user-friendly platform where they can browse, create, review, and favorite recipes from a growing collection. Built with a Flask backend and a React frontend, the application ensures a smooth and interactive experience for users who want to explore new dishes, share their own creations, and connect through culinary inspiration.

 Problem Statement
Despite the abundance of food content online, many platforms lack personalization and community interaction features. Users often face difficulties in discovering new, relevant recipes or managing the ones they love. Additionally, existing solutions rarely offer a streamlined experience for submitting original recipes or reviewing others. This project addresses these gaps by creating a full-stack web application that allows users to:

Register and log in securely,

Browse and search a collection of recipes,

Post new recipes with detailed instructions and images,

Leave reviews and ratings on recipes,

Favorite recipes for quick access later.

By solving these pain points, the application aims to be a go-to resource for recipe discovery and food community engagement.

🧰 Technologies Used

🚀 Frontend (React)
React – For building interactive UI components

React Router DOM – For handling routing/navigation between pages

Vite – Fast build tool and development server for React

JavaScript (ES6+) – Core language for logic and interactivity

HTML & CSS – For structure and styling

Fetch API – To handle HTTP requests to the backend

🔧 Backend (Flask)
Flask – Lightweight Python web framework

Flask-RESTful – For building REST APIs with Flask

Flask-SQLAlchemy – ORM for handling database models and queries

Flask-Migrate – For handling database migrations

Flask-CORS – To handle Cross-Origin Resource Sharing between frontend and backend

Flask-Session – For managing user sessions

Bcrypt (Flask-Bcrypt) – For secure password hashing

🗃️ Database
SQLite – Lightweight database for local development

🌐 Version Control & Deployment
Git – For version control

GitHub – For hosting and collaborating on code

 MVP
 
🔐 User Authentication
 User Registration: New users can create an account.

 User Login: Existing users can log in using email and password.

 User Logout: Users can log out and end their session.

 Session Handling: Authenticated sessions are maintained securely.

🍽️ Recipe Management
 View All Recipes: Anyone can browse a list of all available recipes.

 View Recipe Details: Users can view detailed information about a specific recipe.

 Create New Recipe: Authenticated users can create and submit new recipes.

 Edit Recipe: Users can edit their own submitted recipes.

 Delete Recipe: Users can delete their own recipes.

📝 Reviews
 Add Review: Users can add reviews for any recipe.

 Edit Review: Users can update their own reviews.

 Delete Review: Users can delete their own reviews.

 View Reviews: All users can see reviews for each recipe.

❤️ Favorites
 Add to Favorites: Users can favorite a recipe for quick access later.

 Remove from Favorites: Users can remove a recipe from favorites.

 View Favorite Recipes: Users can view a list of their favorited recipes.

🧭 Frontend UI
 Navigation Bar: Accessible routes to all main features.

 Routing: Navigation handled via React Router.

 Responsive Design: Clean layout that works on various devices.

 Form Validation: Basic validation on recipe and review forms.
