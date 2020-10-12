<template>
	<div>
		<page-banner id="hello" />
		<page-about id="about-me" />
		<page-experience id="experience" />
		<page-achievements id="achievements" />
	</div>
</template>

<script>
import PageBanner from '@/components/banner.vue';
import PageAbout from '@/components/about.vue';
import PageExperience from '@/components/experience.vue';
import PageAchievements from '@/components/achievements.vue';
export default {
	components: {
		PageBanner,
		PageAbout,
		PageExperience,
		PageAchievements
	},
};
</script>

<style>
	body {
		background-image: -webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%);
	}
</style>