# DsimplyMart

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dibyansh01/DsimplyMart-store/blob/main/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/dibyansh01/DsimplyMart-store)](https://github.com/dibyansh01/DsimplyMart-store/issues)
[![GitHub stars](https://img.shields.io/github/stars/dibyansh01/DsimplyMart-store)](https://github.com/dibyansh01/DsimplyMart-store/stargazers)

## Description

This is an ecommerce project for providing the exclusive variety of made in India Khadi and handloom items. 

## Table of Contents

- [Features](#features)
- [Technologies and Libraries Used](#technologies-and-libraries-used)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Exclusive Khadi and Handloom Collection:** Explore a diverse and exclusive collection of made in India Khadi and handloom items, showcasing the rich cultural heritage of India.

2. **Responsive Web Design:** DsimplyMart is built with the latest technology, including Next.js 13, to ensure a highly responsive design that adapts seamlessly to both small screens (phones/mobiles) and larger screens, providing a consistent and user-friendly experience.

3. **User-Friendly Navigation:** Easily navigate through the web app to discover a wide range of products, with a user-friendly and intuitive interface.

4. **Product Details:** View detailed product descriptions, images, pricing, and availability for each item, making it easy to make informed purchase decisions.

5. **Secure Shopping:** Shop with confidence, knowing that your transactions and personal information are secure with industry-standard security practices.

6. **Shopping Cart and Checkout:** Conveniently add products to your shopping cart and proceed to a smooth and secure checkout process.

7. **Payment Options:** Choose payment with credit/debit cards for a convenient and secure checkout.


## Technologies and Libraries Used

- Next.js 13 App Router
- React
- Tailwind
- Shadcn UI
- Prisma
- Supabase
- Zustand
- Axios
- Clerk
- Stripe
- Docker
- and more...

## Demo

You can access the live demo of the Ecommerce web app by following the link below:

[Link](https://dsimply-mart-store.vercel.app/)

Feel free to explore the features and functionality of the app. We welcome your feedback and suggestions.



## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/dibyansh01/DsimplyMart-store
   
2. Install dependencies:

    ```bash
   npm install

3. Configure your environment variables using the 'env.example' file and set up database.
    ```bash
   npx prisma db push
   npx prisma generate

    //And for databse UI run
    npx prisma studio

5. Start the development server:
   ```bash
   npm run dev

6. Open your web browser and access the app at http://localhost:3000.
   
#### Or
Run the application inside docker container (Make sure you have docker installed locally): 
1. Docker Build
   ```bash
   docker build -t dsimplymart-store .
2. Docker Run
    ```bash
   docker run -p d 3000:3000 dsimplymart-store
   
   
### Note: 

The management of store products and API actions is centralized within the admin dashboard. To ensure the proper functionality of your store, it is essential to set up the Admin dashboard first. You can find the dashboard repository [here](https://github.com/dibyansh01/DsimplyMart-dashboard).
   

## Usage

To use and interact with this eCommerce web app, follow the steps below:

### 1. Browsing Products

1. Go to link: https://dsimply-mart-store.vercel.app/, you will be directed to the home page.
2. Browse through the available products by scrolling or selecting category.
3. Click on a product to view its details, including price, description, and images.

### 2. Adding Items to Cart

1. When viewing a product, you can add it to your cart by clicking the "Add to Cart" button.
2. A confirmation message will appear, indicating the item has been added to your cart.
3. Continue shopping or proceed to the cart by clicking the cart icon in the navigation bar.

### 3. Managing Cart

1. In the cart, you can view the items you've added.
2. Adjust the items or remove items from the cart as needed.
3. Click "Checkout" to proceed with your order.

### 4. Checkout

1. Provide the shipping and billing information as prompted.
2. Review your order and make any necessary changes.
3. Confirm your order and proceed to payment.
4. Complete the payment process using the available payment method.


## Contributing

Thank you for considering contributing to DsimplyMart-store! We welcome contributions from the community to make this project even better. Here's how you can get involved:

- **Reporting Issues**: If you find a bug or have a suggestion for an improvement, please [open an issue](https://github.com/dibyansh01/DsimplyMart-store/issues) on this repository. Provide as much detail as possible to help us understand and address the problem.

- **Pull Requests**: We welcome code contributions! If you want to add a new feature, fix a bug, or improve the project in any way, feel free to fork this repository, make your changes, and submit a [pull request](https://github.com/dibyansh01/DsimplyMart-store/pulls).

- **Feature Requests**: If you have an idea for a new feature or enhancement, you can [open a feature request](https://github.com/dibyansh01/DsimplyMart-store/issues) on this repository. We'd love to hear your ideas!

- **Documentation**: If you find any issues with the documentation, or if you want to improve it, please submit a pull request with your changes.

Let's create a positive and inclusive environment for all users and contributors.

Thank you for your support in making DsimplyMart-store a great eCommerce web app!


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/dibyansh01/DsimplyMart-store/blob/main/LICENSE) file for details.





