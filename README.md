# Fast React Pizza Delivery App

This is a simple React application that provides a pizza delivery service. It allows users to browse the menu, add items to their cart, and place an order. The app uses Redux for state management and React Router for navigation.

## Key Features

- **Browse the menu and add items to the cart:**
  - Users can browse the menu of available pizzas, including their name, description, price, and image. They can add items to their cart by clicking on the "Add to Cart" button next to each item. The cart will display the total cost of the order and allow users to update the quantity of each item.

- **View the contents of the cart and update the quantity of each item:**
  - Users can view the contents of their cart and update the quantity of each item by clicking on the "Update Quantity" button next to each item. The cart will display the total cost of the order and allow users to remove items from the cart if desired.

- **Place an order and view the order details:**
  - Users can place an order by clicking on the "Place Order" button in the cart. The app will generate an order number and display the order details, including the items in the order, the total cost, and the delivery address. Users can view previous orders by clicking on the "Orders" button in the navigation bar.

- **User authentication and profile management:**
  - Users can sign up for an account by providing their name, email address, and password. They can log in to their account by entering their email address and password. Once logged in, users can view their profile and update their information. The app will store user information securely using Redux and prevent unauthorized access to sensitive data.

## Folder Structure

```
├── src
│ ├── features
│ │ ├── cart
│ │ │ ├── cartSlice.js
│ │ │ ├── Cart.jsx
│ │ │ ├── CartItem.jsx
│ │ │ ├── CartOverview.jsx
│ │ │ ├── EmptyCart.jsx
│ │ │ ├── UpdateItemQuantity.jsx
│ │ ├── menu
│ │ │ ├── MenuItem.jsx
│ │ │ ├── menuSlice.js
│ │ │ ├── Menu.jsx
│ │ ├── order
│ │ │ ├── Order.jsx
│ │ │ ├── OrderItem.jsx
│ │ │ ├── SearchOrder.jsx
│ │ │ ├── UpdateOrder.jsx
│ │ │ ├── createOrder.js
│ │ │ └── orderSlice.js
│ │ └── user
│ │ ├── CreateUser.jsx
│ │ ├── userSlice.js
│ │ └── Username.jsx
│ ├── ui
│ │ ├── AppLayout.jsx
│ │ ├── Button.jsx
│ │ ├── Header.jsx
│ │ ├── Home.jsx
│ │ ├── LinkButton.jsx
│ │ └── Loader.jsx
│ └── utils
│ └── helpers.js
├── .prettierrc
├── LICENSE
├── package.json
├── README.md
└── vite.config.js
```

## Technologies Used

- React
- Vite
- Redux
- React Router
- Tailwind CSS
- Sonner (for toast notifications)

## Installation

1. Clone the repository: `git clone https://github.com/your-username/fast-react-pizza.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Usage

1. Open the app in your browser at `http://localhost:3000`
2. Browse the menu and add items to your cart
3. View the contents of your cart and update the quantity of each item
4. Place an order and view the order details
5. Sign up or log in to your account to save your profile and order history

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
