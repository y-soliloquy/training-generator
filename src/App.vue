<template>
	<div>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/piramidmethod">ピラミッド法</router-link> |
			<router-link to="/531method">531プログラム</router-link>
		</nav>

		<router-view v-slot="{ Component, route }">
			<transition name="Router-TS" mode="out-in">
				<component :is="Component" :key="route.path" />
			</transition>
		</router-view>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
}

nav {
	padding: 30px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}

.Router-TS-enter-from,
.Router-TS-leave-to {
	opacity: 0;
}

.Router-TS-enter-active,
.Router-TS-leave-active {
	transition: opacity 0.5s ease-out;
}
</style>
