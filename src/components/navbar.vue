<template>
	<b-navbar 
		id="main-nav" 
		ref="main-nav" 
		:class="sticky? 'pt-3' : 'p-5'" 
		toggleable="lg" 
		type="dark" 
		:variant="sticky ? 'dark' : 'transparent'" 
		:sticky="sticky"
	>
		<b-navbar-brand href="#" left>
			<h4>Portfolio</h4>
		</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav class="ml-auto" right>
				<b-nav-item href="#">Home</b-nav-item>
				<b-nav-item href="#">About</b-nav-item>
				<b-nav-item href="#">Services</b-nav-item>
				<b-nav-item href="#">Pages</b-nav-item>
				<b-nav-item href="#">Blog</b-nav-item>
				<b-nav-item href="#" class="no-right-padding">Contact</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	data() {
		return {
			sticky: false
		};
	}, 
	mounted() {
		window.addEventListener('scroll', this.onScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.onScroll);
	},
	methods: {
		onScroll(e) {
			const bottomOfMenu = this.$refs['main-nav'].$el.scrollHeight;
			const scrollTop = e.target.documentElement.scrollTop;
			this.sticky = scrollTop > bottomOfMenu;
		},
	}
};
</script>

<style lang="scss">
	#main-nav {
		font-family: "Roboto", sans-serif;
		text-transform: uppercase;
	}
	#main-nav h4 {
		font-weight: 500;
		color: white;
	}
	#main-nav .nav-item a {
		line-height: 24px;
		vertical-align: middle;
		padding-left: 10px;
		padding-top:0px;
		color: white !important;
	}

	.no-right-padding a {
		padding-right: 0px !important;
	}
</style>