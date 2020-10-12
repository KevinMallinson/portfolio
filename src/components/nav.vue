<template>
	<b-navbar toggleable="lg" type="dark" :variant="variant" :sticky="sticky">
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
</template>

<script>
export default {
	props: {
		sticky: {
			required: true,
			type: Boolean
		},
		variant: {
			required: true,
			type: String
		},
	}
};
</script>

<style>

</style>