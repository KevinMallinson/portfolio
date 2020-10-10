<template>
	<div>
		<gradient-container v-first-element>
			<page-banner />
		</gradient-container>

		<page-welcome />

		<gradient-container>
			<page-experience />
		</gradient-container>

		<page-achievements />
	</div>
</template>

<script>
import PageBanner from '@/components/banner.vue';
import PageWelcome from '@/components/welcome.vue';
import PageExperience from '@/components/experience.vue';
import GradientContainer from '@/components/gradientcontainer.vue';
import PageAchievements from '@/components/achievements.vue';
export default {
	components: {
		GradientContainer,
		PageBanner,
		PageWelcome,
		PageExperience,
		PageAchievements
	},
};
</script>

<style>
</style>