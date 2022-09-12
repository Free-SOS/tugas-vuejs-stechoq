<template>
	<main class="login min-w-screen">
		<section class="min-h-screen bg-purple-400 flex justify-center items-center">
			<div class="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
			</div>
			<div class="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-15 right-10 transform rotate-12 hidden md:block">
			</div>
			<form id="register" class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 register" @submit.prevent="register">
				<div>
					<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Create An Account</h1>
					<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
						account to enjoy all the services without any ads for free!</p>
				</div>
				<div class="space-y-4">
					<input 
						type="email" 
						placeholder="Email address"
						v-model="register_form.email"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
					<input 
						type="password" 
						placeholder="Password" 
						v-model="register_form.password"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
				</div>
				<div class="text-center mt-6">
					<button type="submit" value="register" class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Create Account</button>
					<p class="mt-4 text-sm">Already Have An Account? <span class="underline cursor-pointer" @click="toLogin"> Sign In</span>
					</p>
				</div>
			</form>
			<form id="login" class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 hidden" @submit.prevent="login">
				<div>
					<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Sign In</h1>
					<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create an
						account to enjoy all the services without any ads for free!</p>
				</div>
				<div class="space-y-4">
					<input 
						type="email" 
						placeholder="Email address"
						v-model="login_form.email"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
					<input 
						type="password" 
						placeholder="Password" 
						v-model="login_form.password"
						class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
				</div>
				<div class="text-center mt-6">
					<button type="submit" value="login" class="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Sign In</button>
					<p class="mt-4 text-sm" @click="toRegister">don't have an account yet? <span class="underline cursor-pointer"> Register</span>
					</p>
				</div>
			</form>
		</section>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value);
		}

		return {
			login_form,
			register_form,
			login,
			register
		}
	},

	methods: {

		toLogin(){
			document.getElementById('login').classList.remove('hidden');
			document.getElementById('register').classList.add('hidden')
		},
		toRegister(){
			document.getElementById('login').classList.add('hidden');
			document.getElementById('register').classList.remove('hidden');
		}
	},
}
</script>