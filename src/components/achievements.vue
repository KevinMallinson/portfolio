<template>
	<section class="feature_area p_120">
		<div class="container">
				<div class="achievements-header">
					<h1>My Achievements</h1>
				</div>
			<div class="feature_inner row">
				<div class="col-lg-4 col-md-6">
					<div class="feature_item">
						<h4>OwnPool</h4>
						<p>
							Helped to create and develop an education platform which allows schools to
							fill shifts when teachers are sick or undertaking professional development,
							by utilizing their own pool of subs, or by clicking a button to send the shift
							to a professional recruitment agency for automatic placement.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="feature_item">
						<h4>HR Checkins</h4>
						<p>
							Developed a feature in Your HR System which allows companies to check in on
							their employees wellbeing and mental health, to identify issues early and support
							them on their journey. This is in addition to the performance review, which gives
							companies a way to track how a persons emotional state can affect their performance.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="feature_item">
						<h4>Finance Applications</h4>
						<p>
							Helped create a new version an internal application to parse of Visa's VCF specification
							and allow importing of bank's files and display them on a front end, which is tailor made
							for each bank that uses the application.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="feature_item">
						<h4>Super Chip8</h4>
						<p>
							As a way to learn low level programming, I have built and completed 
							a Super Chip8 emulator, which can be found here.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="feature_item">
						<h4>Gameboy</h4>
						<p>
							In order to continue to learn assembly, computer engineering and low level programming,
							I am currently developing a Gameboy emulator, which can be found here.
						</p>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="feature_item">
						<h4>Portfolio</h4>
						<p>
							This portfolio that you are viewing right now, is open source and available on my github here.
							It is designed using Vue and hosted on Github Pages.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
	.achievements-header h1 {
		text-align: center;
		color: black;
		font-family: "Heebo", sans-serif;
		font-size: 36px;
		padding-bottom: 70px;
		text-transform: uppercase;
	}

	.feature_area{
		background: #f9f9ff;
		&.feature_tow{
			background: #fff;
			.feature_item{
				background: #f9f9ff;
				&:hover{
					background: #fff;
				}
			}
		}
		&.white_feature{
			background: #fff;
			.feature_item{
				background: #f9f9ff;
				&:hover{
					background: #fff;
				}
			}
		}
	}
	.feature_inner{
		margin-bottom: -30px;
	}
	.feature_item{
		padding: 50px 35px;
		border-radius: 10px;
		@include transition;
		background: #fff;
		margin-bottom: 30px;
		i{
			margin-bottom: 35px;
			display: block;
			&:before{
				margin-left: 0px;
				font-size: 60px;
				color: #e1e1e1;
				line-height: 60px;
			}
		}
		h4{
			color: $dip;
			font-size: 21px;
			font-family: $hee;
			font-weight: bold;
			margin-bottom: 20px;
			text-transform: uppercase;
		}
		p{
			margin-bottom: 0px;
		}
		.main_btn{
			padding: 0px 30px;
			line-height: 38px;
		}
		&:hover{
			box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.08);
			border-color: #fff;
			background: #fff;
			i{
				&:before{
					background: linear-gradient(to right, #8490ff 0%, #62bdfc 70%);
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
		}
	}
</style>