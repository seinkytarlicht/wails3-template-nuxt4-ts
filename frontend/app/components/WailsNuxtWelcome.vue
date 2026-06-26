<script setup lang="ts">
import { Application, Browser } from "@wailsio/runtime";

const name = ref("");
const greetings = ref("");

async function shutdown() {
  await Application.Quit();
}

async function greetMe() {
  const res = await GreetService.Greet(name.value);
  greetings.value = res;
}

async function openURL(url: string) {
  await Browser.OpenURL(url);
}
</script>

<template>
  <main class="welcome">
    <section class="card">
      <div class="brand">
        <img
          src="/wails.png"
          alt="Wails"
          @click="openURL('https://v3.wails.io')"
        />
        <span>+</span>
        <img src="/nuxt.png" alt="Nuxt" @click="openURL('https://nuxt.com')" />
      </div>

      <h1>Welcome 👋</h1>

      <p class="subtitle">Wails + Nuxt application is running successfully.</p>

      <div class="divider"></div>

      <div class="greet-box">
        <input v-model="name" type="text" placeholder="Enter your name..." />

        <button @click="greetMe">Say Hello</button>
      </div>

      <p v-if="greetings" class="message">
        {{ greetings }}
      </p>

      <div class="actions">
        <NuxtLink to="/test">Test Page</NuxtLink>
        <NuxtLink class="warning" to="/not-found">Not Found Page</NuxtLink>
        <button class="danger" @click="shutdown">Exit App</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
:global(*) {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:global(html),
:global(body) {
  width: 100%;
  height: 100%;
}

.welcome {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #1e293b, #020617);
  padding: 24px;
  color: white;
}

.card {
  width: 100%;
  max-width: 720px;
  padding: 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 2px;
}

.brand img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  cursor: pointer;
}

.brand span {
  font-size: 32px;
  opacity: 0.7;
}

h1 {
  font-size: 34px;
  margin-bottom: 8px;
}

.subtitle {
  color: #cbd5e1;
}

.divider {
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.15);
  margin: 24px 0;
}

.greet-box {
  width: 100%;
  max-width: 420px;
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: white;
}

button,
.actions a {
  padding: 12px 18px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  background: #22c55e;
  color: white;
  font-weight: 600;
  font-size: 16px;
}

.message {
  margin-top: 20px;
  color: #86efac;
}

.actions {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.actions a {
  background: #3b82f6;
}

.danger {
  background: #ef4444;
}

.warning {
  color: #020617 !important;
  background: #f9d740 !important;
}
</style>
