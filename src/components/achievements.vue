<template>
	<div class="achievements-container pt-5 pb-5">
		<b-container>
			<b-row>
				<b-col lg="12">
					<div class="achievements-header">
						<h1>My Achievements</h1>
					</div>
				</b-col>
			</b-row>
			<b-row class="achievements-content">
				<b-col lg="4">
					<b-card title="OWNPOOL" class="achievements-item">
						<b-card-text>
							Helped to create and develop an education platform which allows schools to
							fill shifts when teachers are sick or undertaking professional development,
							by utilizing their own pool of subs, or by clicking a button to send the shift
							to a professional recruitment agency for automatic placement.
						</b-card-text>
					</b-card>
				</b-col>
				<b-col lg="4">
					<b-card title="HR CHECKINS" class="achievements-item">
						<b-card-text>
							Developed a feature in Your HR System which allows companies to check in on
							their employees wellbeing and mental health, to identify issues early and support
							them on their journey. This is in addition to the performance review, which gives
							companies a way to track how a persons emotional state can affect their performance.
						</b-card-text>
					</b-card>
				</b-col>
				<b-col lg="4">
					<b-card title="FINANCE APPLICATIONS" class="achievements-item">
						<b-card-text>
							Helped create a new version an internal application to parse of Visa's VCF specification
							and allow importing of bank's files and display them on a front end, which is tailor made
							for each bank that uses the application.
						</b-card-text>
					</b-card>
				</b-col>
				<b-col lg="4">
					<b-card title="SUPER CHIP8" class="achievements-item">
						<b-card-text>
							As a way to learn low level programming, I have built and completed 
							a Super Chip8 emulator, which can be found here.
						</b-card-text>
					</b-card>
				</b-col>
				<b-col lg="4">
					<b-card title="GAMEBOY" class="achievements-item">
						<b-card-text>
							In order to continue to learn assembly, computer engineering and low level programming,
							I am currently developing a Gameboy emulator, which can be found here.
						</b-card-text>
					</b-card>
				</b-col>
				<b-col lg="4">
					<b-card title="PORTFOLIO" class="achievements-item">
						<b-card-text>
							This portfolio that you are viewing right now, is open source and available on my github here.
							It is designed using Vue and hosted on Github Pages.
						</b-card-text>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {};
</script>

<style>
	.achievements-header h1 {
		text-align: center;
		color: black;
		font-family: "Heebo", sans-serif;
		font-size: 36px;
		padding-bottom: 70px;
		text-transform: uppercase;
	}

	.achievements-container {
		background: #f9f9ff;
	}

	.achievements-item {
		padding: 20px 35px;
		border-radius: 10px;
		background: #fff;
		margin-bottom: 30px;
		border: none !important;
	}

	.achievements-item:hover {
		box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
		border-color: #fff;
		background: #fff;
	}
</style>