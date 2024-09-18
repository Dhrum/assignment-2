document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    
    // Carousel Functionality
    const carouselImages = document.getElementById('carousel-images');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let index = 0;
    const totalImages = document.querySelectorAll('#carousel-images > div').length;
  
    function showNextImage() {
      index = (index + 1) % totalImages; // Loop back to the first image
      carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }
  
    function showPrevImage() {
      index = (index - 1 + totalImages) % totalImages; // Loop back to the last image
      carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }
  
    // Event listeners for carousel buttons
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
  
    // Auto-slide the carousel every 3 seconds
    setInterval(showNextImage, 3000);
  
    // Hamburger Menu Functionality
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('menu');
    menuBtn.addEventListener('click', () => {
      dropdownMenu.classList.toggle('hidden');
    });
  
    // Function to fetch and display multiple random meals
    async function getRandomMeals() {
      const randomMealUrl = `https://www.themealdb.com/api/json/v1/1/random.php`;
      const foodList = document.getElementById('food-list');
      foodList.innerHTML = ''; // Clear previous content
      
      try {
        // Fetch 4 random meals
        for (let i = 0; i < 8; i++) {
          const response = await fetch(randomMealUrl);
          if (!response.ok) throw new Error("Failed to fetch random meal");
  
          const data = await response.json();
          displayFoodData(data.meals, false);  // Append the random meal
        }
      } catch (error) {
        console.error("Error fetching random meals:", error);
      }
    }
  
    // Example function to fetch data from TheMealDB API based on the food category
    async function getFoodData(category) {
        // Check if category is undefined, null, or empty
        if (!category || category.trim() === '') {
            console.log("Category is invalid or empty, fetching random meals...");
            await getRandomMeals(); // Call random meals function
            return;
        }

        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            
            // If no meals are found for the category, fetch random meals
            if (!data.meals) {
                console.log(`No meals found for category: ${category}, fetching random meals...`);
                await getRandomMeals();
            } else {
                // Otherwise, display the meals for the valid category
                displayFoodData(data.meals);
            }
        } catch (error) {
            console.error("API fetch error:", error);
            // In case of an error, fetch random meals as a fallback
            await getRandomMeals();
        }
    }
  
    // Function to display food data
    function displayFoodData(meals, clearPrevious = true) {
      const foodList = document.getElementById('food-list');
      if (clearPrevious) {
        foodList.innerHTML = ''; // Clear previous results if requested
      }
  
      if (meals) {
        meals.forEach(meal => {
          const foodItem = document.createElement('div');
          foodItem.classList.add('border', 'p-4', 'rounded-lg', 'shadow-lg');
          foodItem.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="w-full h-40 object-cover rounded-lg">
            <h3 class="text-xl mt-4">${meal.strMeal}</h3>
            <p>${meal.strInstructions.substring(0, 100)}...</p>
          `;
          foodList.appendChild(foodItem);
        });
      } else {
        foodList.innerHTML = '<p>No results found</p>';
      }
    }
  
    // Event listeners for food category buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const category = e.target.innerText;
        getFoodData(category);  // Fetch data when a category button is clicked
      });
    });
  
    // Fetch random meals on page load
    getRandomMeals();
  });
  