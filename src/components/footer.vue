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

<style>
	.footer_area {
		padding-top:50px;
		padding-bottom:20px;
	}
</style>