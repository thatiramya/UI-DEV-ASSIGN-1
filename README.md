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
Directory structure:
└── UI-DEV-ASSIGN-1/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── AddItemPanel.tsx
        │   ├── CartPanel.tsx
        │   ├── DragPreview.tsx
        │   ├── HomePage.tsx
        │   ├── ItemList.tsx
        │   ├── NewOrder.tsx
        │   ├── Chat/
        │   │   ├── ChatBot.tsx
        │   │   └── ChatWindow.tsx
        │   ├── HomePage/
        │   │   ├── OrderSearch.tsx
        │   │   └── OrderSort.tsx
        │   ├── OrderConfirmation/
        │   │   └── OrderSuccess.tsx
        │   └── OrderList/
        │       ├── OrderCard.tsx
        │       └── OrderDetails.tsx
        ├── data/
        │   ├── items.ts
        │   └── mockOrders.ts
        ├── store/
        │   └── orderStore.ts
        ├── types/
        │   └── index.ts
        └── utils/
            ├── chatResponses.ts
            └── orderUtils.ts
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
