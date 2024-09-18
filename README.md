
🍽️ Food Explorer: Discover & Savor
A dynamic, responsive, and feature-rich website for exploring delicious meals, browsing categories, and fetching random recipes. The Food Explorer project is designed to inspire users to explore new dishes and cooking techniques in a seamless and modern UI.

📋 Project Overview
Food Explorer is a visually appealing and highly interactive recipe website. It integrates TheMealDB API to offer users a wide variety of meal options, whether chosen randomly or searched by category. This project demonstrates best practices in modern front-end development using HTML5, TailwindCSS, DaisyUI, and JavaScript.

Key features include:

Random Recipe Generator: Automatically displays random recipes on page load.
Search by Category: Users can filter recipes by clicking on category buttons such as Chicken, Beef, Soup, etc.
Accordion FAQ Section: A beautifully designed accordion with interactive open/close animations.
Fully Responsive Layout: Built with mobile-first principles, ensuring it works perfectly on all screen sizes.
Interactive Carousel: Displays rotating food images and promotional content.
✨ Detailed Project Features
1. Homepage with Random Meal Suggestions
How it Works: When the page first loads, a JavaScript function fetches random meals from TheMealDB API using the /random.php endpoint.
Display: The fetched data is dynamically rendered into a grid of food items. Each item shows the meal name, a description snippet, and a thumbnail image.
2. Category Search Functionality
How it Works: Clicking on any category button (e.g., Chicken, Beef, etc.) triggers a request to TheMealDB API to fetch meals related to that category via the /search.php?s=<category> endpoint.
Fallback: If no category is selected or no results are found, random meals are fetched and displayed as a fallback.
3. FAQ Section
How it Works: The FAQ is designed with an accordion-style interface, using JavaScript to toggle between opening and closing answers. Each question is displayed with an expanding answer that provides more information when clicked.
Animation: The FAQ section features smooth transitions for expanding and collapsing answers, enhancing the user experience.
4. Responsive Design
TailwindCSS & DaisyUI are used to make the layout fully responsive, ensuring seamless user experiences across mobile, tablet, and desktop devices.
The design is mobile-first, ensuring that the smallest screen sizes are prioritized while scaling beautifully to larger screens.
5. Interactive Carousel
A rotating image carousel showcases highlighted dishes or promotions, with a new image sliding in every 3 seconds.
Users can manually navigate using the next/prev buttons or let the carousel rotate automatically.
⚙️ Technologies Used
HTML5: Semantic and accessible markup for the structure of the website.
TailwindCSS: A utility-first CSS framework for fast styling and responsive design.
DaisyUI: TailwindCSS component library for pre-designed, accessible UI elements.
JavaScript (ES6): Used for API fetching, dynamic content rendering, and interactive elements.
TheMealDB API: Provides real-time meal and recipe data, including random meal suggestions and category-specific results.
🛠️ Project Setup and Installation
Prerequisites
Ensure that you have the following software:

Web Browser: Google Chrome, Firefox, or any modern browser.
Code Editor: VSCode, Sublime, or any preferred editor.
Steps to Run the Project
Clone the Repository

bash
Copy code
git clone [REPO_LINK]
Navigate to the Project Directory

bash
Copy code
cd food-explorer
Open the index.html file in your preferred web browser to view the website locally.

Optionally, you can use a live server plugin for your editor (such as the "Live Server" extension for VSCode) to run the project locally and view changes in real-time.
Live Link
You can view the live project here.

📁 Project Structure
bash
Copy code
food-explorer/
├── src/
│   ├── index.html         # Main HTML file
│   ├── styles.css         # TailwindCSS and custom styles
│   ├── script.js          # JavaScript functionality
│   └── assets/            # Images and other assets
├── README.md              # Project documentation
└── LICENSE                # License information
🌐 API Integration
This project integrates TheMealDB API to provide real-time data on recipes. It utilizes two main API endpoints:

Random Meal Endpoint: Fetches random meals to display when the page is loaded or if no category is selected.

URL: https://www.themealdb.com/api/json/v1/1/random.php
Category Search Endpoint: Fetches meals based on user-selected categories such as Chicken, Beef, etc.

URL: https://www.themealdb.com/api/json/v1/1/search.php?s=<category>
In case the API call fails or returns no data, a fallback function retrieves random meals to maintain a seamless experience for users.

💡 Contribution Guidelines
We welcome contributions to the project. If you want to contribute:

Fork this repository: Click the "Fork" button at the top of this page.
Create a new branch:
bash
Copy code
git checkout -b feature-branch
Make your changes and commit them:
bash
Copy code
git commit -m "Your detailed description of changes"
Push to the branch:
bash
Copy code
git push origin feature-branch
Open a Pull Request: Go to your fork on GitHub, click the "Pull Request" button, and submit your pull request.
📜 License
This project is licensed under the MIT License - see the LICENSE file for details.

Developed with 💻 and ☕ by Abdur Rahim
Upazila ICT Officer, Sitakunda, Chattogram

