<template>
	<b-container fluid id="banner-container" class="pt-5 pb-5">
		<div class="box-container">
			<b-row>
				<b-col md="12" xl="6" class="img-container">
					<img id="self-portrait" src="@/assets/img/me.jpg">
				</b-col>
				<b-col md="12" xl="6">
					<div class="banner-content">
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

						<b-list-group class="list basic_info">

							<b-list-group-item class="link-with-icon">
								<a href="#"><i class="fas fa-phone"></i> +1 (647) 527 6847</a>
							</b-list-group-item>

							<b-list-group-item class="link-with-icon">
								<a href="#"><i class="fas fa-envelope"></i> kevin@kmallinson.ca</a>
							</b-list-group-item>

							<b-list-group-item class="link-with-icon">
								<a href="#"><i class="fas fa-map-marker-alt"></i> Toronto, Ontario, Canada</a>
							</b-list-group-item>
						</b-list-group>

						<b-list-group horizontal class="list personal-social">
							<b-list-group-item>
								<a href="https://github.com/kevinmallinson"><i class="fab fa-github"></i></a>
							</b-list-group-item>

							<b-list-group-item>
								<a href="https://www.linkedin.com/in/kevin-mallinson-8a771511b/"><i class="fab fa-linkedin"></i></a>
							</b-list-group-item>
						</b-list-group>
					</div>
				</b-col>
			</b-row>
		</div>
	</b-container>
</template>

<style scoped>

	@media only screen and (max-width: 1199px) {
		#self-portrait {
			margin-bottom:30px;
		}

		.banner-content {
			text-align: center;
		}

		.banner-content p {
			margin: 0 auto;
		}
	}

	@media only screen and (max-width:430px) {
		h3 {
			font-size: 24px !important;
		}

		.link-with-icon {
			font-size: 0.8em;
			width:100%;
			text-align: center;
			padding: 10px 0px;
		}

		.link-with-icon a, .link-with-icon i {
			display: block;
		}
	}

	.img-container {
		text-align:center;
	}

	.list-group-item {
		border: none !important;
	}

	#self-portrait {
		border-radius: 12px;
		max-height: 100%;
		max-width: 100%;
	}

	.profile_inner {
		border-bottom: 1px solid #eeeeee;
	}

	h6 {
		font-size: 14px;
		text-transform: uppercase;
		letter-spacing: 2.1px;
		font-weight: normal;
		margin-bottom: 12px;
	}

	h4 {
		font-size: 16px;
		font-weight: 500;
		text-transform: uppercase;
		margin-bottom: 20px;
	}

	h3 {
		font-size: 48px;
		text-transform: uppercase;
		margin-bottom: 15px;
	}

	p {
		margin-bottom: 40px;
		max-width: 540px;
	}

	.personal-social a {
		line-height: 40px;
		width: 40px;
		background: #e8e8e8;
		border-radius: 5px;
		display: inline-block;
		text-align: center;
		color: #fff;
		font-size: 16px;
	}
</style>