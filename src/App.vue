<template>
	<div>
		<page-navbar />

		<router-view />

		<page-footer />	
	</div>
</template>

<script>
import PageNavbar from '@/components/navbar.vue';
import PageFooter from '@/components/footer.vue';

export default {
	components: {
		PageNavbar,
		PageFooter
	}
};
</script>