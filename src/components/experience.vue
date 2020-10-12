<template>
	<b-container class="experience-container pt-5 pb-5">
		<b-row>
			<b-col lg="12" class="experience-header pb-5">
				<h1>My Experience</h1>
			</b-col>
		</b-row>
		<b-row>
			<b-col lg="12">
				<div class="experience-accordion" role="tablist">
					<b-card no-body header-bg-variant="transparent">
						<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-1 variant="transparent">
							<div class="flex-heading d-flex justify-content-between">
								<span class="experience-dates left-item">Oct 2020 - Present Day</span>
								<span class="middle-item">Flynn Canada</span>
								<i class="fas fa-angle-down nav-arrow right-item"></i>
							</div>
						</b-button>
						</b-card-header>
						<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<p>Check back later, as I just started here, so nothing to report so far!</p>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body>
						<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-2 variant="transparent">
							<div class="flex-heading d-flex justify-content-between">
								<span class="experience-dates left-item">Mar 2020 - Sep 2020</span>
								<span class="middle-item">Inlogik</span>
								<i class="fas fa-angle-down nav-arrow right-item"></i>
							</div>
						</b-button>
						</b-card-header>
						<b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									<p>Worked on white label systems which are developed for banks to enter the corporate credit card business, allowing us to write the solution and the banks to cater it to their needs.</p>
									<p>Wrote solutions for importing of various different banks customer/transaction/company files, namely with VCF and CDF specifications (Visa and Mastercard, respectively)</p>
									<p>Worked on setting up various banks for use in our system, namely HSBC HK, Commonwealth Bank of Australia, National Bank of Canada, and ASB Bank New Zealand.</p>
									<p>Extensive experimental testing to bring forward a legacy codebase into a modern, testable, and efficient codebase.</p>
									<p>Worked primarily with ASP.NET Core and followed principles of Domain Driven Design and Event Sourcing, which is catered for the financial industry due to its excellent auditability, and the ability to query data in ways that are not foreseen ahead of time, as all data is preserved, even when deleted, in the event log.</p>
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body>
						<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-3 variant="transparent">
							<div class="flex-heading d-flex justify-content-between">
								<span class="experience-dates left-item">Sep 2019 - Dec 2019</span>
								<span class="middle-item">Your HR System</span>
								<i class="fas fa-angle-down nav-arrow right-item"></i>
							</div>
						</b-button>
						</b-card-header>
						<b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									<p>Received a contract to plan, design, and implement new features on 'Your Hr System' - a web app for managing general HR for small companies.</p>
									<p>Designed and implemented a feature in Your HR System which provides companies the ability to perform Check In's with their staff, ensuring their staff are in a good place mentally, and raise any concerns they might have.</p>
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>

					<b-card no-body>
						<b-card-header header-tag="header" class="p-1" role="tab">
						<b-button block v-b-toggle.accordion-4 variant="transparent">
							<div class="flex-heading d-flex justify-content-between">
								<span class="experience-dates left-item">July 2018 - Feb 2020</span>
								<span class="middle-item">ANZUK Education</span>
								<i class="fas fa-angle-down nav-arrow right-item"></i>
							</div>
						</b-button>
						</b-card-header>
						<b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<b-card-text>
									<p>Designed, developed, maintained and project managed OwnPool, a product for schools to manage their staff.</p>
									<p>Assisted in choosing technical stack for OwnPool: ASP.NET Core, Vue.js, and Microsoft Azure for database, cdn, backend, frontend and other services like logging, blob storage, etc.</p>
									<p>Conducted analysis to address flaky selenium tests which led to integrating the 'Page Object Model' to boost productivity of writing tests for our QA Engineer, and also significantly improving the reliability of our tests.</p>
									<p>Wrote a very extensive API integration between 'OwnPool' and 'Relief Roster', allowing us to be the only company in our market offering immediate agency assistance directly within their own booking portal.</p>
									<p>Designed and implemented our continuous integration and continuous delivery systems, using Microsoft Azure.</p>
								</b-card-text>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>
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

	.experience-accordion button {
		color: white;
		border: none;
		border-radius: 0px;
	}

	.experience-accordion header {
		border: none;
		border-radius: 0px;
		
	}

	.experience-accordion .card {
		background: transparent;
		border-radius: 0px;
	}

	.left-item {
		width: 34%;
		text-align: left;
	}

	.middle-item {
		width: 32%;
		text-align: center;
	}

	.right-item {
		width: 34%;
		text-align: right;
	}
</style>