<template>
    <div class="register">
        <form>
            <label for="">Username</label>
            <input type="text" v-model="username" required>
            <label for="">Email</label>
            <input type="email" v-model="email" required>
            <label for="">Password</label>
            <input type="password" v-model="password" required>
            <button @click.prevent="registerForm">Register</button>
        </form>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { userService } from '../services/userService';
import { useToast } from 'vue-toast-notification';

const $toast = useToast();
const username = ref("");
const email = ref("");
const password = ref("");
const store = useStore();

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function registerForm() {
  if (username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "") {
    $toast.info("Fill all Fields");
    return;
  }

  if (!isValidEmail(email.value)) {
    $toast.error("Invalid email address");
    return;
  }

  if (password.value.length < 6) {
    $toast.error("Password should be at least 6 characters long");
    return;
  }

  const res = await userService.registerUser(username.value, email.value, password.value);

  if (res === 0) {
    $toast.error('Error occurred');
    return;
  } else if (res.error) {
    $toast.error(res.error);
  } else {
    store.dispatch("saveToken", res);
    location.reload();
  }
}
</script>



<style  scoped>
.register {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
}

form {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 70%;
}


label {
    font-size: 13px;
}


input {
    width: 100%;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #ccc;
}


button {
    margin-top: 5px;
    background-color: var(--mainColor);
    color: white;
}
</style>