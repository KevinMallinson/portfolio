<template>
	<section class="mytabs_area p_120">
		<div class="container">
			<div class="tabs_inner">
				<div class="experience-header">
					<h1>My Experience</h1>
				</div>
				<div class="tab-content" id="myTabContent">
					<div
						class="tab-pane fade show active"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<ul class="list">
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
									<div class="d-flex  experience-date">
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
									<div class="d-flex  experience-date">
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
									<div class="d-flex  experience-date">
										<p>Jul 2018 - Feb 2020</p>
									</div>
									<div class="media-body">
										<h4>ANZUK Education</h4>
										<p>Full Stack Web Developer <br />Melbourne, Australia</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style>
	.experience-header h1 {
		text-align: center;
		color: white;
		font-family: "Heebo", sans-serif;
		font-size: 36px;
		padding-bottom: 70px;
		text-transform: uppercase;
	}

	.experience-date {
		min-width: 250px;
	}
</style>