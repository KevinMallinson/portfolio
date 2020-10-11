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
										<a href="#"><i class="fas fa-phone"></i> +1 (647) 527 6847</a>
									</li>
									<li>
										<a href="#"><i class="fas fa-envelope"></i> kevin@kmallinson.ca</a>
									</li>
									<li>
										<a href="#"><i class="fas fa-map-marker-alt"></i> Toronto, Ontario, Canada</a>
									</li>
								</ul>
								<ul class="list personal_social">
									<li>
										<a href="https://github.com/kevinmallinson"><i class="fab fa-github"></i></a>
									</li>
									<li>
										<a href="https://www.linkedin.com/in/kevin-mallinson-8a771511b/"><i class="fab fa-linkedin"></i></a>
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


	.col-lg-7{
		vertical-align: middle;
		align-self: center;
	}
		
	.profile_inner{
		border-bottom: 1px solid #eeeeee;
		.personal_text{
			padding-left: 95px;
		}
	}

	.personal_text{
		h6{
			font-size: 14px;
			font-family: $rob;
			text-transform: uppercase;
			letter-spacing: 2.1px;
			font-weight: normal;
			margin-bottom: 12px;
			color: $dip;
		}
		h4{
			font-size: 16px;
			font-weight: 500;
			font-family: $rob;
			text-transform: uppercase;
			margin-bottom: 20px;
			color: $dip;
		}
		h3{
			font-size: 48px;
			text-transform: uppercase;
			margin-bottom: 15px;
			color: $dip;
		}
		p{
			font-family: $rob;
			max-width: 540px;
			color: $pfont;
			margin-bottom: 40px;
		}
		.basic_info{
			li{
				margin-bottom: 15px;
				a{
					position: relative;
					padding-left: 40px;
					font-size: 16px;
					color: $pfont;
					i{
						position: absolute;
						left: 0px;
						top: 50%;
						transform: translateY(-50%);
						font-size: 20px;
						color: $baseColor;
					}
				}
				&:last-child{
					margin-bottom: 0px;
				}
			}
		}
		.personal_social{
			margin-top: 45px;
			li{
				display: inline-block;
				margin-right: 7px;
				&:last-child{
					margin-right: 0px;
				}
				a{
					line-height: 40px;
					width: 40px;
					background: #e8e8e8;
					border-radius: 5px;
					display: inline-block;
					text-align: center;
					color: #fff;
					font-size: 16px;
				}
				&:hover{
					a{
						background-image: -moz-linear-gradient( 0deg, rgb(118,109,255) 0%, rgb(136,243,255) 100%);
						background-image: -webkit-linear-gradient( 0deg, rgb(118,109,255) 0%, rgb(136,243,255) 100%);
						background-image: -ms-linear-gradient( 0deg, rgb(118,109,255) 0%, rgb(136,243,255) 100%);
					}
				}
			}
		}
	}
</style>