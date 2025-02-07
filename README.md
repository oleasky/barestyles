# **BareStyles**

**Minimal Foundations, Maximum Possibilities**

BareStyles is a **lightweight CSS utility package** designed to enhance your TailwindCSS projects with **predefined utility classes and base styles**. It provides foundational styles for rapid prototyping and wireframing while allowing full customization.

---

## **Features**
- 📦 **Plug & Play**: No configuration needed—just install and import.
- ⚡ **Minimal Yet Powerful**: Provides essential styles for quick scaffolding.
- 🎨 **Easily Extendable**: Works alongside TailwindCSS, fully customizable.
- 🔥 **Standalone CSS Package**: No build tools required—works with any project.

---

## **Installation**

Install BareStyles via npm, Yarn, or Bun:

```sh
npm install barestyles -D
pnpm install barestyles -D
yarn add barestyles -D
bun install barestyles -D
```

---

## **Usage**

### **1️⃣ Import BareStyles in Your Project**
Simply import it in your main CSS file:

```css
@import "barestyles";
```

This will automatically include **all utility classes and base styles**.

---

### **2️⃣ Using the Predefined Utilities**
BareStyles provides utility classes to simplify styling in Tailwind projects:

```html
<div class="container-wide">
  <h1 class="text-fluid-md">Welcome to BareStyles</h1>
  <p class="text-gray-600">This package provides useful utility classes.</p>
</div>
```

---

## **📌 Included Utilities**
### **📍 Layout**
- **`.container-wide`** → Responsive max-width container with auto margins.

### **📍 Typography**
- **`.text-fluid-sm`** → Font size scales responsively using `clamp()`.
- **`.text-fluid-md`** → Medium variant of responsive typography.


---

## **Customizing BareStyles**
BareStyles is designed to be **fully extendable** in your Tailwind configuration.

If you need to modify or override styles, extend them in your `css files` using tailwindcss ^4.0 new approach:

```css
@theme {
  --container-narrow: 20rem;
}
```

---

## **Why Choose BareStyles?**
- 🚀 **Speed up prototyping** with ready-to-use styles.
- 🎯 **Reduce boilerplate** by handling base styles for you.
- 🎨 **Fully customizable** within your TailwindCSS project.

---

## **License**
This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---
