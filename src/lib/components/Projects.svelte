<script>
	const projects = [
		{
			id: 1,
			title: "용사 용복이의 모험",
			description: "터미널에서 동작하는 간단한 게임",
			technologies: ["C", "구조체", "도트애니메이션"],
			github: "https://github.com/sharpscar/clang/tree/main/swordman_yongbok",
			image: "https://res.cloudinary.com/dxwuthcy0/image/upload/v1748993464/344244DC-E19B-4270-9FB8-F003AA29F1CC_an2wms.png",
			video: "https://res.cloudinary.com/dxwuthcy0/video/upload/v1751681895/%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%87%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%85%E1%85%A3%E1%86%BC_dbpeys.mov",
			hasVideo: true
		},
		{
			id: 2,
			title: "지자체 행사관리 프로그램",
			description: "지자체의 각종 행사관리를 담당부서, 공무원분들이 관리하실수 있는 프로그램",
			technologies: ["C++", "QTFramework", "MariaDB", "json"],
			github: "https://github.com/sharpscar/ok_corp",
			image: "https://res.cloudinary.com/dxwuthcy0/image/upload/v1751382262/admin_manage_system.png",
			video: "https://res.cloudinary.com/dxwuthcy0/video/upload/v1751680659/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A2%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3_2025-06-06_16-59-41_erbqnz.webm",
			hasVideo: true
		},
		{
			id: 3, 
			title: "쿠쿠팡팡이츠",
			description: "쿠팡이츠를 클론",
			technologies: ["C++", "Threading", "json", "MariaDB"],
			github: "https://github.com/sharpscar/4team_coupang",
			image: "https://res.cloudinary.com/dxwuthcy0/image/upload/v1751683881/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-07-05_11.50.39_lotyij.png",
			video: "https://res.cloudinary.com/dxwuthcy0/video/upload/v1751680761/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%8F%E1%85%A2%E1%84%89%E1%85%B3%E1%84%90%E1%85%B3_2025-06-19_21-16-25_hwbvii.webm",
			hasVideo: true
		},
		{
			id: 4,
			title: "clang chat program",
			description: "c언어를 활용한 터미널 채팅 프로그램.",
			technologies: ["C", "tcp/ip"],
			github: "https://github.com/sharpscar/clang/tree/main/chat",
			image: "https://res.cloudinary.com/dxwuthcy0/image/upload/v1751684288/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-07-05_11.56.38_bneorb.png",
			video: "https://res.cloudinary.com/dxwuthcy0/video/upload/v1751683236/%E1%84%8E%E1%85%A2%E1%84%90%E1%85%B5%E1%86%BC%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%80%E1%85%B3%E1%84%85%E1%85%A2%E1%86%B7%E1%84%8C%E1%85%A5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%85%E1%85%A3%E1%86%BC_s5tm7k.mov",
			hasVideo: true
		},
		{
			id: 5,
			title: "ai 화재 조기감시 프로그램",
			description: "convolution neural network 합성곱 신경망 딥러닝 모델을 학습시켜 화재를 판별하고 관계기관에 화재정보를 전달하는 프로그램",
			technologies: ["C++", "python", "pytorch","MariaDB","tcp/ip"],
			github: "https://github.com/sharpscar/fire_detection",
			image: "https://res.cloudinary.com/dxwuthcy0/image/upload/v1751684591/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2025-07-05_12.02.47_zzzxo7.png",
			hasVideo: false
		}
		
	];

	let selectedProject = null;
	let videoModal = false;

	function openVideo(project) {
		selectedProject = project;
		videoModal = true;
	}

	function closeVideo() {
		videoModal = false;
		selectedProject = null;
	}
</script>

<section id="projects" class="projects">
	<div class="container">
		<h2>Featured Projects</h2>
		<p class="section-description">
			Here are some of my C++ projects showcasing systems programming, graphics, and performance optimization.
		</p>
		
		<div class="projects-grid">
			{#each projects as project}
				<div class="project-card">
					<div class="project-image">
						<img src={project.image} alt={project.title} />
						<div class="project-overlay">
							<div class="project-links">
								<a href={project.github} target="_blank" rel="noopener noreferrer" class="link-btn">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
									Code
								</a>
								{#if project.hasVideo}
									<button on:click={() => openVideo(project)} class="link-btn video-btn">
										<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
											<path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
										</svg>
										Video
									</button>
								{/if}
							</div>
						</div>
					</div>
					
					<div class="project-content">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						
						<div class="tech-stack">
							{#each project.technologies as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Video Modal -->
{#if videoModal && selectedProject}
	<div class="video-modal" on:click={closeVideo}>
		<div class="video-modal-content" on:click|stopPropagation>
			<button class="close-btn" on:click={closeVideo}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
					<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
				</svg>
			</button>
			<h3>{selectedProject.title}</h3>
			<video controls autoplay muted class="project-video">
				<source src={selectedProject.video} type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</div>
	</div>
{/if}

<style>
	.projects {
		padding: 5rem 2rem;
		background: rgba(255, 255, 255, 0.05);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	h2 {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 1rem;
		color: var(--color-theme-2);
	}

	.section-description {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
		max-width: none;
	}

	.project-card {
		background: rgba(255, 255, 255, 0.9);
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
	}

	.project-image {
		position: relative;
		overflow: hidden;
		height: 200px;
	}

	.project-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.project-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.project-card:hover .project-overlay {
		opacity: 1;
	}

	.project-card:hover .project-image img {
		transform: scale(1.1);
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.link-btn {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		background: var(--color-theme-1);
		color: white;
		text-decoration: none;
		border-radius: 6px;
		font-weight: 500;
		transition: background 0.3s ease;
	}

	.link-btn:hover {
		background: #4f46e5;
		text-decoration: none;
	}

	.video-btn {
		background: var(--color-theme-2) !important;
		border: none;
		cursor: pointer;
	}

	.video-btn:hover {
		background: #0f172a !important;
	}

	.project-content {
		padding: 1.5rem;
	}

	.project-content h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: var(--color-theme-2);
	}

	.project-content p {
		line-height: 1.6;
		margin-bottom: 1.5rem;
		color: #666;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: var(--color-bg-1);
		color: var(--color-theme-2);
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.projects {
			padding: 3rem 1rem;
		}

		h2 {
			font-size: 2rem;
		}

		.projects-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.link-btn {
			padding: 0.5rem 1rem;
			font-size: 0.9rem;
		}
	}

	/* Video Modal Styles */
	.video-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.video-modal-content {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		max-width: 90vw;
		max-height: 90vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.video-modal-content h3 {
		margin: 0 0 1rem 0;
		color: var(--color-theme-2);
		text-align: center;
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		color: #666;
		padding: 0.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background 0.3s ease;
	}

	.close-btn:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	.project-video {
		width: 100%;
		max-width: 800px;
		height: auto;
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		.video-modal-content {
			padding: 1rem;
			margin: 1rem;
		}
		
		.project-video {
			max-width: 100%;
		}
	}
</style>