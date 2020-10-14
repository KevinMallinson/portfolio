<template>
	<div class="timeline">
		<div class="entries">
			<div class="entry">
				<div class="title" @click="showModal('Flynn Group')" v-b-modal="'work-bio-modal'">
					<span>Flynn Group</span>
					<small>October 2020 - Present</small>
				</div>
				<div class="body">
					<p>
						<br /><br /><br /><br />
					</p>
				</div>
			</div>
			<div class="entry">
				<div class="title big" @click="showModal('Inlogik')" v-b-modal="'work-bio-modal'">
					<span>Inlogik</span>
					<small>March 2020 - September 2020</small>
				</div>
				<div class="body">
					<p>
						<br /><br /><br /><br />
					</p>
				</div>
			</div>
			<div class="entry">
				<div class="title" @click="showModal('Your HR System')" v-b-modal="'work-bio-modal'">
					<span>Your HR System</span>
					<small>September 2019 - December 2019</small>
				</div>
				<div class="body">
					<p>
						<br /><br /><br /><br />
					</p>
				</div>
			</div>
			<div class="entry">
				<div class="title big" @click="showModal('ANZUK Education')" v-b-modal="'work-bio-modal'">
					<span>ANZUK Education</span>
					<small>July 2018 - February 2020</small>
				</div>
			</div>
		</div>

		<b-modal id="work-bio-modal" :title="bioShowing" size="xl" ok-only>
			<div v-if="bioShowing === 'Flynn Group'">
				<p>Check back later, as I just started here, so nothing to report so far!</p>
			</div>

			<div v-else-if="bioShowing === 'Inlogik'">
				<p>Worked on white label systems which are developed for banks to enter the corporate credit card business, allowing us to write the solution and the banks to cater it to their needs.</p>
				<p>Wrote solutions for importing of various different banks customer/transaction/company files, namely with VCF and CDF specifications (Visa and Mastercard, respectively)</p>
				<p>Worked on setting up various banks for use in our system, namely HSBC HK, Commonwealth Bank of Australia, National Bank of Canada, and ASB Bank New Zealand.</p>
				<p>Extensive experimental testing to bring forward a legacy codebase into a modern, testable, and efficient codebase.</p>
				<p>Worked primarily with ASP.NET Core and followed principles of Domain Driven Design and Event Sourcing, which is catered for the financial industry due to its excellent auditability, and the ability to query data in ways that are not foreseen ahead of time, as all data is preserved, even when deleted, in the event log.</p>
			</div>

			<div v-else-if="bioShowing === 'Your HR System'">
				<p>Received a contract to plan, design, and implement new features on 'Your Hr System' - a web app for managing general HR for small companies.</p>
				<p>Designed and implemented a feature in Your HR System which provides companies the ability to perform Check In's with their staff, ensuring their staff are in a good place mentally, and raise any concerns they might have.</p>
			</div>

			<div v-else-if="bioShowing === 'ANZUK Education'">
				<p>Designed, developed, maintained and project managed OwnPool, a product for schools to manage their staff.</p>
				<p>Assisted in choosing technical stack for OwnPool: ASP.NET Core, Vue.js, and Microsoft Azure for database, cdn, backend, frontend and other services like logging, blob storage, etc.</p>
				<p>Conducted analysis to address flaky selenium tests which led to integrating the 'Page Object Model' to boost productivity of writing tests for our QA Engineer, and also significantly improving the reliability of our tests.</p>
				<p>Wrote a very extensive API integration between 'OwnPool' and 'Relief Roster', allowing us to be the only company in our market offering immediate agency assistance directly within their own booking portal.</p>
				<p>Designed and implemented our continuous integration and continuous delivery systems, using Microsoft Azure.</p>
			</div>

			<div v-else>
				Oops, can't pull up the requested information. Try again.
			</div>
		</b-modal>
	</div>
</template>

<script>
export default {
	data() {
		return {
			bioShowing: ''
		};
	},
	methods: {
		showModal(bioToShow) {
			this.bioShowing = bioToShow;
		}
	}
};
</script>

<style scoped lang="scss">
.timeline {
	@media (min-width: 768px) {
		&:before {
			content: '';
			position: absolute;
			top: 0px;
			left: 50%;
			bottom: 0px;
			transform: translateX(-50%);
			width: 4px;
			background-color: black;
		}
	}

	.entries {
		width: calc(100% - 80px);
		max-width: 800px;
		margin: auto;
		position: relative;

		.entry {
			@media (min-width: 768px) {
				width:calc(50% - 80px);
				float:left; 
			}

			padding:20px;
			clear:both;
			text-align:right;

			&:not(:first-child) {
				margin-top:-60px;
			}

			.title {
				&:hover {
					color: black;
					cursor: pointer;
				}
				
				transition: all .3s;
				font-size:22px;
				margin-bottom:0px;
				position: relative;
				color:#fff;

				span {
					display: block;
					width: 100%;
					border-bottom: 1px solid white;
				}

				small {
					display: block;
				}

				@media (min-width: 768px) {
					&:before {
						right: -108px;
						transform: translateY(-50%);
						content: '';
						position: absolute;
						width: 16px;
						height: 16px;
						border: 4px solid black;
						background-color: white;
						border-radius: 100%;
						top: 50%;
						z-index: 1000;
					}

					&.big:before {
						transform:translate(4px,-50%);
						width:24px;
						height:24px;
					}
				}
			}

			&:nth-child(2n) {
				text-align:left;

				@media (min-width: 768px) {
					float:right;

					.title {
						&:before {
							left:-108px;
						}

						&.big:before {
							transform:translate(-4px,-50%);
						}
					}
				}
			}
		}
	}

	margin:0;
	height:100%;
}
</style>