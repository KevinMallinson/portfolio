<template>
	<div class="about-container">
		<b-container class="pt-5 pb-5">
			<b-row>
				<b-col lg="6" md="6" sm="12" xs="12">
					<b-row>
						<b-col cols="12" class="pb-3">
							<h4>About Me</h4>
						</b-col>
						<b-col cols="12">
							<p>
								Since I was young, I had a passion for code. Cultivated when I was 16 by making
								a very successful mod for Tony Hawk's Underground 2, along with other hobby projects.
								Eventually I decided that since I loved coding, it was to be my career - and it was a great choice.
								Being able to do what I love every day, engaging my mind with complex problems and solving them is 
								such a rewarding feeling and the reason I enjoy what I do, day in and day out.
							</p>
						</b-col>
						<b-col cols="12">
							<p>
								Next to this, you will see my most practiced skills, which I often perform my professional work in. 
								These are in order: .NET Core, C#, ASP.NET Core, JavaScript, Vue, and Entity Framework Core.
							</p>
						</b-col>
					</b-row>
				</b-col>
				<b-col lg="6" md="6" sm="12" cols="12">
					<b-row>
						<b-col lg="4" md="6" sm="6" cols="6">
							<img class="experience-image" src="@/assets/img/logos/netcore.png" />
						</b-col>
						<b-col lg="4" md="6" sm="6" cols="6">
							<img class="experience-image" src="@/assets/img/logos/csharp.png" />
						</b-col>
						<b-col lg="4" md="6" sm="6" cols="6">
							<img class="experience-image" src="@/assets/img/logos/aspnetcore.png" />
						</b-col>
						<b-col lg="4" md="6" sm="6" cols="6">
							<img class="experience-image" src="@/assets/img/logos/js.png" />
						</b-col>
						<b-col lg="4" md="6" sm="6" cols="6">
							<img class="experience-image" src="@/assets/img/logos/vue.png" />
						</b-col>
						<b-col lg="4" md="6" sm="6" cols="6">
							<img class="experience-image" src="@/assets/img/logos/efcore.png" />
						</b-col>
					</b-row>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<style>
	.experience-image {
		max-width: 100%;
		max-height: 100%;
	}

	.about-container {
		background: #f9f9ff;
	}
</style>