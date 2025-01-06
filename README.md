# 🛍️ Order Management Platform

## 🌟 Overview
The **Order Management Platform** is a versatile web application tailored to simplify order handling, from initiation to tracking. It focuses on providing an intuitive user experience with real-time functionalities, ensuring a seamless process for users. This project underscores my expertise in developing scalable and user-friendly solutions while adhering to industry best practices.

---


## 🚀 Core Features

### 📑 Order Dashboard
- **Comprehensive View**: The homepage showcases all completed orders, ensuring quick access and visibility.
- **Reusable Components**: Modular `Order Card` components display key details such as:
  - 🆔 **Order ID**
  - 📆 **Date**
  - 💵 **Total Price**
  - 📊 **Current Status**
- **Detailed Insights**: Users can expand any order to view additional information, maintaining a clean and organized interface.

### 🛍️ Order Creation Workflow
- **Seamless Process**: Initiate new orders effortlessly via the homepage.
- **Three-Panel Layout**:
  - **Left Panel**: Displays items in the cart, with easy removal options.
  - **Center Panel**: Enables adding new items to the cart.
  - **Right Panel**: Lists available items to select.
-Simplifies the process of adding items to the cart.
-Modify item quantities directly in the cart.
-A comprehensive breakdown of items and total cost.

### 💬 Integrated Support
- **Support Button**: Access customer support directly from order details.
  - 🔄 **Minimize/Maximize**: Toggle the chat window for better screen management.
  - 📧 **Real-Time Messaging**: Send and receive messages seamlessly.

## 🔧 Technical Highlights
- **Modular Architecture**: Reusable components enhance scalability and maintainability.
- **Real-Time Functionality**: Dynamic updates for cart and support interactions.
- **Drag-and-Drop Interface**: Intuitive design for user-friendly order management.
- **Responsive Design**: Optimized for various devices and screen sizes.

---


## 🛠️ Installation Guide
Follow these steps to set up the Order Management Platform locally:

### 📥 Clone the Repository:
```bash
git clone https://github.com/thatiramya/UI-DEV-ASSIGN-1.git
```

### 📂 Navigate to the Directory:
```bash
cd UI-DEV-ASSIGN-1
```

### 📦 Install Dependencies:
```bash
npm install
```

### 🚀 Start the Application:
```bash
npm start
```

---


## 🏞️ Visual Highlights
![WhatsApp Image 2025-01-06 at 02 31 54_8edee8c2](https://github.com/user-attachments/assets/7ec921b4-5b40-4894-9719-40a6fe3d2695)
**Purchased Orders Overview**

![WhatsApp Image 2025-01-06 at 02 31 23_92607c31](https://github.com/user-attachments/assets/3a7296f4-360d-4f11-92fc-ee24cd42873b)
**New Order Page**

![WhatsApp Image 2025-01-06 at 02 30 54_8767f9d0](https://github.com/user-attachments/assets/0f09b3bd-df7a-494e-88c1-e1cdf6e0d3e1)
**Ordered Successfully**

---


## 🗂️ Project Structure
```markdown
└── ui-assignment-1/
    ├── README.md                     # Documentation for the project
    ├── eslint.config.js              # Configuration file for ESLint
    ├── index.html                    # Main HTML file for the application
    ├── package.json                  # Project metadata and dependencies
    ├── postcss.config.js             # Configuration for PostCSS
    ├── tailwind.config.js            # Tailwind CSS configuration file
    ├── tsconfig.app.json             # TypeScript configuration for the application
    ├── tsconfig.json                 # Base TypeScript configuration
    ├── tsconfig.node.json            # TypeScript configuration for Node.js
    ├── vite.config.ts                # Configuration file for Vite
    └── src/                          # Source files for the application
        ├── App.tsx                   # Main application component
        ├── index.css                 # Global CSS styles
        ├── main.tsx                  # Main entry point for the application
        ├── vite-env.d.ts             # TypeScript environment definitions for Vite
        ├── components/               # Reusable UI components
        │   ├── Background.tsx        # Background component for layout styling
        │   ├── CartItem.tsx          # Component for displaying items in the cart
        │   ├── ChatSupport.tsx       # Chat support interface component
        │   ├── DraggableItem.tsx     # Component for draggable items in the order form
        │   ├── DroppableZone.tsx     # Component for drop zones in the order form
        │   ├── EmptyCart.jsx         # Component displayed when the cart is empty
        │   ├── OrderCard.tsx         # Card component to display order summary
        │   ├── OrderDetails.tsx      # Component to display detailed order information
        │   ├── OrderForm.tsx         # Form component for creating a new order
        │   ├── OrderSummary.tsx      # Component to summarize the order before submission
        │   └── chat/                 # Components related to chat functionality
        │       ├── ChatHeader.tsx    # Header component for the chat window
        │       ├── ChatInput.tsx     # Input field component for chat messages
        │       ├── ChatMessages.tsx  # Component to display chat messages
        │       └── ChatWindow.tsx    # Main chat window component
        ├── data/                     # Static data used in the application
        │   ├── categories.ts         # Categories data for items
        │   └── items.ts              # Items data for the order form
        ├── hooks/                    # Custom React hooks
        │   └── useChatMessages.ts    # Hook to manage chat messages state
        ├── lib/                      # Utility libraries and configurations
        │   ├── theme.ts              # Theme configuration for the application
        │   └── utils.ts              # General utility functions
        ├── pages/                    # Page components
        │   ├── Home.tsx              # Home page component
        │   └── NewOrder.jsx          # New order creation page component
        ├── store/                    # State management files
        │   ├── cart.js               # State management for the cart
        │   └── orders.js             # State management for orders
        ├── types/                    # TypeScript type definitions
        │   ├── index.ts              # Common type definitions
        │   └── order.ts              # Type definitions related to orders
        └── utils/                    # Utility functions
            ├── chatbot.ts            # Utility functions for chatbot integration
            ├── orderValidation.ts    # Functions to validate order inputs
            └── validation.js         # General validation utilities

```

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. **Fork the repository**.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
4. Create a **Pull Request** on GitHub.

---


## 🎯 Why Choose This Project?
This platform is a testament to my capabilities in:
- Crafting **user-friendly** and **intuitive interfaces**.
- Building **modular**, **scalable**, and **maintainable** components.
- Implementing **real-time** features for enhanced user interaction.
