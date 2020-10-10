<template>
	<div id="nav-container">
		<b-navbar toggleable="lg">
			<b-navbar-brand href="#" left>
				<h1>Portfolio</h1>
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
	</div>
</template>

<script>
export default {
	mounted() {
		document.addEventListener('scroll', this.changeMenuStyle);
	},
	destroyed() {
		document.removeEventListener('scroll', this.changeMenuStyle);
	},
	methods: {
		changeMenuStyle(e) {
			this.topOffset = `${e.target.documentElement.scrollTop}px`;
		}
	}
};
</script>

<style lang="scss">
#nav-container {
	font: 500 12px/120px "Roboto", sans-serif;
	text-transform: uppercase;
	padding-left:30px;
	padding-right:30px;

	.navbar {
		height: $navHeight;
		padding-left: 0px !important;
		padding-right: 0px !important;

		h1 {
			font: 500 24px/120px "Roboto", sans-serif;
			color: white;
		}

		.nav-item {
			a {
				color: white;
				line-height: $navHeight;
				padding-left:20px;
				padding-right:20px;
			}
		}
	}
}

.no-right-padding a {
	padding-right: 0px !important;
}
</style>