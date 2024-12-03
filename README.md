# **BareStyles**

**Minimal Foundations, Maximum Possibilities**

BareStyles is a lightweight, TailwindCSS-based starter kit that provides a set of foundational styles, utilities, and components. It’s designed for rapid prototyping and wireframing, giving you a solid base to start your projects while allowing you to fully customize and finalize designs.

---

## **Features**

- 📦 **Ready-to-Use**: Provides pre-configured base styles, utilities, and components.
- ⚡ **Wireframe Starter**: A clean, minimal foundation for quick prototyping.
- 🎨 **Customizable**: Easily extend styles to match your project’s design system.
- 🔥 **TailwindCSS Powered**: Fully integrates with TailwindCSS for maximum flexibility.

---

## **Installation**

Install BareStyles via npm:

```bash
npm install barestyles
yarn add barestyles
```

---

## **Usage**

1. **Add BareStyles to Your Tailwind Configuration**:
   Include BareStyles in your `tailwind.config.js` file under the `plugins` section:

   ```javascript
   // tailwind.config.js
   module.exports = {
     content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [require('barestyles')],
   };
   ```

2. **Start Prototyping**:
   Use the base styles and utilities in your project:

   ```html
   <h1 class="text-2xl font-bold">Hello, World!</h1>
   <p class="text-base text-gray-600">Start building your project with BareStyles.</p>
   ```

---

## **Features Included**

### **Base Styles**
Predefined styles for headings, paragraphs, lists, and other common elements.

- **Headings (`h1`–`h6`)**: Sized and spaced for wireframing.
- **Body Text (`p`, `ul`, `ol`)**: Clean and readable with sensible defaults.
- **Buttons**: Basic button styles for prototyping.

### **Utilities**
Utilities for common patterns:
- **`.sticky-footer`**: A utility for sticky footer layouts.
- **`.container-max`**: A container with max-width settings for scaffolding.

### **Components**
Ready-to-use components:
- **Wireframe Elements**: Basic components for rapid prototyping.
- **Typography Utilities**: Styles to structure content.

---

## **Customizing BareStyles**

BareStyles is designed to be fully customizable. Override styles or extend them directly in your `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Customize the primary color
      },
    },
  },
};
```

---

## **Why BareStyles?**

BareStyles is perfect for:
- Designers and developers looking to **quickly prototype wireframes**.
- Teams that want a **common foundation** for web app scaffolding.
- Projects that need **minimal styles** as a starting point.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---