<template>
	<footer class="footer_area">
		<div class="container">
			<div class="row footer_inner">
				<div class="col-lg-12">
					<div class="f_widget ab_widget">
						<div class="f_title">
							<h3>Kevin Mallinson Portfolio</h3>
						</div>
						<p>
							If you would like to hire me, please email at kevin@kmallinson.ca or phone +1 647 527 6847.
						</p>
						<p>
							This website was developed by me using Vue. The source code can be found here. The theme which
							this website uses is the Colorlib MeetMe theme, below is the attribution for the Colorlib theme.
						</p>
						<p>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
							Copyright &copy; {{year}}
							All rights reserved | This template is made with
							<i class="fa fa-heart-o" aria-hidden="true"></i> by
							<a href="https://colorlib.com" target="_blank">Colorlib</a>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		year() {
			return new Date().getFullYear();
		}
	}
};
</script>

<style lang="scss">
	.footer_area {
		padding-top:50px;
		padding-bottom:20px;
	}

	.footer_area{
		background: #000;
	}

	.f_title{
		margin-bottom: 35px;
		h3{
			color: #fff;
			font-size: 18px;
			font-weight: bold;
			font-family: $hee;
			margin-bottom: 0px;
		}
	}
	.ab_widget{
		p{
			font-size: 14px;
			line-height: 24px;
			font-family: $rob;
			color: $pfont;
			margin-bottom: 30px;
			a{
				color: $baseColor;
			}
		}
	}
	.news_widget{
		padding-right: 15px;
		p{
			font-size: 14px;
			line-height: 24px;
			font-family: $rob;
			color: $pfont;
			margin-bottom: 15px;
		}
		.input-group{
			input{
				height: 40px;
				background: transparent;
				border-radius: 0px;
				width: 80%;
				border: none;
				padding: 0px 15px;
				border: 1px solid #1e233b;
				font-size: 14px;
				font-family: $rob;
				color: #cccccc;
				outline: none;
				box-shadow: none;
				@include placeholder{
					font-size: 14px;
					font-family: $rob;
					font-weight: normal;
					color: #cccccc;
				}
			}
			.sub-btn{
				border-radius: 0px;
				background-image: -moz-linear-gradient( 0deg, rgb(118,109,255) 0%, rgb(136,243,255) 100%);
				background-image: -webkit-linear-gradient( 0deg, rgb(118,109,255) 0%, rgb(136,243,255) 100%);
				background-image: -ms-linear-gradient( 0deg, rgb(118,109,255) 0%, rgb(136,243,255) 100%);
				outline: none !important;
				box-shadow: none !important;
				padding: 0px;
				border: none;
				width: 42px;
				cursor: pointer;
				color: #fff;
			}
		}
	}
	.social_widget{
		p{
			font-size: 14px;
			line-height: 24px;
			font-family: $rob;
			color: $pfont;
			margin-bottom: 10px;
		}
		.list{
			li{
				margin-right: 17px;
				display: inline-block;
				a{
					color: #cccccc;
					font-size: 14px;
					@include transition;
				}
				&:last-child{
					margin-right: 0px;
				}
				&:hover{
					a{
						color: $baseColor;
					}
				}
			}
		}
	}
	.copy_right_text{
		text-align: center;
		margin-top: 60px;
		p{
			a{
				color: $baseColor;
			}
		}
	}
</style>