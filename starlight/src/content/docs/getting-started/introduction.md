---
title: 'Introduction'
description: 'Learn the documentation from Vue Docs.'
---

>  **You are reading the documentation for Vue 3!**
> - Vue 2 support has ended on **Dec 31, 2023**. Learn more about [Vue 2 EOL](https://v2.vuejs.org/eol/).
> - Upgrading from Vue 2? Check out the [Migration Guide](https://v3-migration.vuejs.org/).


[![Vue Mastery](https://www.vuemastery.com/images/vuemastery-logo.svg)](https://www.vuemastery.com/courses/)

**Learn Vue with video tutorials on [VueMastery.com](https://www.vuemastery.com/courses/)**

### What is Vue?

Vue is a tool that helps you build modern web interfaces quickly.  
It’s built on HTML, CSS, and JavaScript, and helps you organize your app using small reusable pieces called components.
#### Simple Example

Here’s a simple example where Vue updates the text as you click the button:

```html
<div id="app">
  <p>{{ message }}</p>
  <button @click="message += '!'">Click me</button>
</div>

<script>
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

- Declarative Rendering: Vue updates your page based on your data.
- Reactivity: If data changes, the page updates automatically.
> 💡 You’ll get more out of Vue if you know some HTML, CSS, and JavaScript.
However, you can still look around and learn as you go.

### The Progressive Framework

Vue is a JavaScript framework designed to help you build modern web interfaces. It is suitable for both simple pages and large-scale applications. You can begin with basic functionality and gradually introduce more features as your project grows.

You can use Vue in the following different ways:

- **No Build Tools Needed**: Use Vue with just HTML and JavaScript.
- **Web Components**: Add Vue to any part of your website as a widget.
- **SPA (Single Page Application)**: Load content without refreshing the page.
- **SSR (Server Side Rendering)**: Improve SEO and performance.
- **Jamstack / SSG**: Pre-render pages for fast loading.
- **Cross-Platform**: Build for desktop, mobile, or even terminals.

> **Tip**: Basic knowledge of HTML and JavaScript is sufficient to follow this guide. No advanced experience is required to get started.

You can start by integrating Vue into a small section of your project. As requirements increase, Vue offers the flexibility to scale up while maintaining consistent development practices.

### Single-File Components

Vue lets you write your HTML, CSS, and JavaScript in one file. This makes your code easier to manage and reuse.

```vue
<!-- HelloWorld.vue -->
<template>
  <h1>{{ message }}</h1>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello World!')
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
```
### API Styles


Vue components can be written in two styles: **Options API** and **Composition API**. Both use the same core Vue system and concepts. You can switch between them at any time as you grow.

>  _New to Vue?_ Start with the style that feels easier to understand. Both options are valid and supported—you don't have to master both right away.

#### Options API

The **Options API** organizes your code by options like `data`, `methods`, and `mounted`. This approach is straightforward and especially friendly for beginners.

#### Example

```vue
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`Initial count is ${this.count}`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
---

#### Composition API

The **Composition API** lets you write your component logic using imported Vue functions. It's powerful and flexible—especially useful when building large applications or reusing logic across components.

> _Tip: If you’ve used React Hooks, the Composition API can feel familiar._

#### Example

```vue
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

onMounted(() => {
  console.log(`Initial count is ${count.value}`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```
#### Which Should You Use?

Both API styles are fully supported and interoperable. You can use either style independently or combine them within the same project, depending on your needs:

| **Options API** | **Composition API** |
|-----------------|---------------------|
| Easier to learn for most beginners | More flexible and scalable |
| Organizes code by options (`data`, `methods`) | Organizes code by logic and feature |
| Good for small to mid-size projects | Great for large, complex projects |
#### Recommendations

If you're just starting out:

- **Use Options API** if you prefer simple, organized syntax and you're not using advanced build tools.
- **Use Composition API** if you're building a full application with reusable logic and need maximum flexibility.

You can always switch later or use both styles together. Vue is designed to adapt to your needs.

> * Pro tip: You can toggle between API styles using the switch in the sidebar of the official Vue docs. *


#### Still Got Questions?

Check out our [FAQ](https://vuejs.org/about/faq) for more answers and clarifications.


#### Pick Your Learning Path

Everyone learns differently. Choose the approach that fits your style best. Whether you prefer to dive in hands-on, follow structured guidance, or explore by example, we recommend exploring all the resources for a well-rounded understanding.

- [**Try the Tutorial**](https://vuejs.org/tutorial/#step-1)  
  A hands-on introduction for developers who like to learn by doing.

- [**Read the Guide**](https://vuejs.org/guide/quick-start)  
  A detailed walkthrough of Vue’s core concepts, ideal for structured learners.

- [**Check Out the Examples**](https://vuejs.org/examples/#hello-world)  
  Explore real code examples to see how Vue works in practical scenarios.
