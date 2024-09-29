<template>
    <h2>HomeView</h2>
    <button @click="goToAbout">Go to About</button>
</template>

<script setup>
import { useRouter } from "vue-router";

// Khởi tạo router
const router = useRouter();

// Hàm chuyển hướng đến trang About
const goToAbout = () => {
    router.push("/about");
};
</script>
