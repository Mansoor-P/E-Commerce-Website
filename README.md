# Shopping Website

This project is a responsive e-commerce website for various product categories including clothing, electronics, mobiles, laptops, and more. The website is built using React and styled with Tailwind CSS, ensuring a modern and user-friendly interface. The application is designed to be fully responsive, providing an optimal viewing experience across a wide range of devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Components](#components)
## Features

- Responsive design for optimal viewing on all devices
- Category-wise product listings (Clothing, Electronics, Mobiles, Laptops, etc.)
- Interactive dropdown menus for product categories
- Hover effects to show subcategories
- User-friendly navigation bar
- Shopping cart functionality
- Product detail pages
- Sign in / Sign up functionality

## Technologies Used

- React.js
- Tailwind CSS
- Font Awesome for icons
- Unsplash for fetching images
- React Router for navigation

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mansoor-P/E-Commerce-Website.git
   cd cloth-shopping-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`.

## Usage

- **Home Page:** Displays featured categories and products.
- **Category Pages:** Lists all products under a specific category.
- **Product Detail Page:** Shows detailed information about a selected product.
- **Shopping Cart:** Allows users to view and manage their selected products.
- **User Authentication:** Enables users to sign in or sign up to manage their profiles and orders.

## Components

- **NavBar:** Contains navigation links, search bar, and user account options.
- **ProductLinks:** Displays dropdown menus for product categories with subcategories.
- **ProductCard:** Renders product information including image, title, and price.
- **ShoppingCart:** Manages the user's selected products.
- **ProductDetail:** Shows detailed information about a product.
- **Footer:** Contains links to additional information and social media.

### NavBar Component

The `NavBar` component includes navigation links for home, categories, cart, and user account options. It is fully responsive, adapting to different screen sizes.

### ProductLinks Component

The `ProductLinks` component features dropdown functionality for product categories such as Fashion, Electronics, etc. Each category reveals subcategories on hover. The arrow icon changes direction when a category is clicked.

### ProductCard Component

The `ProductCard` component accepts `src`, `link`, `h3`, and `p` as props and renders an image, a heading, and a paragraph inside an anchor tag.

### ShoppingCart Component

The `ShoppingCart` component allows users to view and manage the products they have added to their cart.

### ProductDetail Component

The `ProductDetail` component displays detailed information about a selected product, including images, descriptions, and pricing.

### Footer Component

The `Footer` component includes links to additional information, social media links, and contact details.
