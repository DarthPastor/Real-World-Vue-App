<template>
	<div id="app">
		<div id="nav">
			<router-link class="menu-item" :to="{ name: 'EventList' }">Events</router-link> |
			<router-link class="menu-item" :to="{ name: 'AboutPage' }">About</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
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

	h4 {
		font-size: 20px;
	}
	.menu-item {
		font-weight: bold;
		color: black;
	}
	.menu-item:hover {
		font-weight: bold;
		color: #42b983;
	}
</style>
