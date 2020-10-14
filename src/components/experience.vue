<template>
	<b-container class="experience-container pt-5 pb-5">
		<b-row>
			<b-col lg="12" class="experience-header pb-5">
				<h1>My Experience</h1>
				<h6>Click a company for more information.</h6>
			</b-col>
		</b-row>
		<b-row>
			<b-col lg="12">
				<timeline />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Timeline from '@/components/timeline/timeline';

export default {
	components: {
		Timeline
	}
};
</script>

<style scoped lang="scss">
	.experience-container {
		color: white;
	}

	.experience-header {
		text-align: center;

		h6 {
			font-style: italic;
			font-weight: 300;
		}
	}
</style>