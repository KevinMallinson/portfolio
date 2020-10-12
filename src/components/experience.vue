<template>
	<b-container class="experience-container">
		<b-row>
			<b-col cols="12" class="experience-header p-5">
				<h1>My Experience</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12">
				<ul class="experience-list">
						<li>
							<span></span>
							<div class="media">
								<div class="d-flex experience-date">
									<p>Oct 2020 - Present</p>
								</div>
								<div class="media-body">
									<h4>Flynn Group</h4>
									<p>Web Application Developer <br />Toronto, Canada</p>
								</div>
							</div>
						</li>
						<li>
							<span></span>
							<div class="media">
								<div class="d-flex experience-date">
									<p>Mar 2020 - Sep 2020</p>
								</div>
								<div class="media-body">
									<h4>Inlogik</h4>
									<p>Software Engineer <br />Melbourne, Australia</p>
								</div>
							</div>
						</li>
						<li>
							<span></span>
							<div class="media">
								<div class="d-flex experience-date">
									<p>Sep 2019 - Dec 2020</p>
								</div>
								<div class="media-body">
									<h4>
										Your HR System <br />
										<small>3 Month Contract</small>
									</h4>
									<p>Full Stack Web Developer <br />Melbourne, Australia</p>
								</div>
							</div>
						</li>
						<li>
							<span></span>
							<div class="media">
								<div class="d-flex experience-date">
									<p>Jul 2018 - Feb 2020</p>
								</div>
								<div class="media-body">
									<h4>ANZUK Education</h4>
									<p>Full Stack Web Developer <br />Melbourne, Australia</p>
								</div>
							</div>
						</li>
					</ul>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {};
</script>

<style scoped>
	.experience-container {
		color: white;
	}

	.experience-header {
		text-align: center;
	}

	.experience-date {
		min-width: 250px;
	}

	.experience-list {
		max-width: 460px;
		margin: auto;
		position: relative;
		padding-top: 40px;
	}

	.experience-list:before {
		content: "";
		height: 100%;
		width: 5px;
		background: rgba(255, 255, 255, 0.2);
		position: absolute;
		left: 46%;
		transform: translateX(-50%);
		top: -5px;
	}

	li {
		margin-bottom: 60px;
	}

	li span {
		height: 15px;
		width: 15px;
		border-radius: 50%;
		display: block;
		background: rgba(255, 255, 255, 0.2);
		position: absolute;
		left: 46%;
		transform: translateX(-50%);
	}

	li span:before {
		content: "";
		height: 7px;
		width: 7px;
		background: #fff;
		border-radius: 50%;
		position: absolute;
		left: 52%;
		top: 4px;
		transform: translateX(-50%);
	}
	
</style>