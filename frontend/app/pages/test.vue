<script setup lang="ts"></script>

<template>
  <main class="not-found">
    <section class="card">
      <h2>Test Page</h2>
      <NuxtLink class="btn" to="/">Back Home</NuxtLink>
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

.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at top, #1e293b, #020617);
  color: white;
}

.card {
  width: 420px;
  padding: 40px;
  text-align: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

h1 {
  font-size: 90px;
  line-height: 1;
  margin-bottom: 10px;
}

h2 {
  font-size: 28px;
  margin-bottom: 12px;
}

p {
  color: #cbd5e1;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  text-decoration: none;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #3b82f6;
  color: white;
  font-weight: 600;
  font-size: 16px;
}
</style>
