<template>
	<div id="banner-container">
		<div class="box_1620">
			<div class="banner_inner d-flex align-items-center">
				<div class="banner_content">
					<div class="media">
						<div class="d-flex">
							<img id="self-portrait" src="@/assets/img/me.jpg" alt="A self portrait of the subject of this portfolio, Kevin" />
						</div>
						<div class="media-body">
							<div class="personal_text">
								<h6>Hello, My name is </h6>
								<h3>Kevin Mallinson</h3>
								<h4>Full Stack Web Engineer</h4>
								<p>
									I've worked for many years in the industry, spanning education, finance, 
									human resources, and construction. I specialize in backend API development, but
									am skilled in the full stack, particularly in the front end with Vue.
								</p>
								<p>
									I recently moved to Canada to be closer to family and explore my heritage.
								</p>
								<ul class="list basic_info">
									<li>
										<a href="#"><i class="lnr lnr-phone-handset"></i> +1 (647) 527 6847</a>
									</li>
									<li>
										<a href="#"><i class="lnr lnr-envelope"></i> kevin@kmallinson.ca</a>
									</li>
									<li>
										<a href="#"><i class="lnr lnr-home"></i> Toronto, Ontario, Canada</a>
									</li>
								</ul>
								<ul class="list personal_social">
									<li>
										<a href="https://github.com/kevinmallinson"><i class="fa fa-github"></i></a>
									</li>
									<li>
										<a href="https://www.linkedin.com/in/kevin-mallinson-8a771511b/"><i class="fa fa-linkedin"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
	#banner-container {
		padding-bottom: 125px;
	}

	#self-portrait {
		border-radius:12px;
	}

	.banner_inner {
		width: 100%;
		min-height: 700px;
		display: flex;

		.banner_content {
			color: $dip;
			vertical-align: middle;
			align-self: center;
			text-align: left;
			.media {
				.d-flex {
					padding-right: 125px;
				}
				.media-body {
					vertical-align: middle;
					align-self: center;
				}
			}
		}
	}	
</style>