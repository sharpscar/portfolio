<section id="about" class="about">
	<div class="container">
		<div class="about-content">
			<div class="about-text">
				<h2>소개</h2>
				<p class="intro">
					시스템 프로그래밍, 성능 최적화에 전문성을 가진 
					열정적인 C++ 개발자입니다. 효율적이고 고성능의 애플리케이션을 
					처음부터 구축하는 것을 즐깁니다.
				</p>
				
				<p>
					컴퓨터가 가장 낮은 수준에서 어떻게 작동하는지에 대한 호기심으로 
					소프트웨어 개발 여정을 시작했습니다. 그 이후로 C++를 전문으로 하며 
					메모리 관리, 동시성 프로그래밍, 실시간 시스템 등의 영역에서 
					전문성을 키워왔습니다.
				</p>

				<p>
					코딩을 하지 않을 때는 새로운 알고리즘을 탐구하거나, 
					개발서적을 봅니다. 물론 udemy학습도 꾸준히 하고있습니다.

				</p>

				<div class="skills">
					<h3>기술 스택</h3>
					<div class="skills-grid">
						<div class="skill-category">
							<h4>핵심 C++</h4>
							<ul>
								<li>Modern C++ </li>
								<li>Algorithms</li>
								<li>Memory Management</li>
								<li>TCP/IP</li>
								<li>Threading</li>
							</ul>
						</div>
						
						<div class="skill-category">
							<h4>인공지능, 플랫폼</h4>
							<ul>
								<li>머신 러닝</li>
								<li>딥러닝</li>
								<li>System Programming</li>
								<li>Performance Optimization</li>
							</ul>
						</div>
						
						<div class="skill-category">
							<h4>도구 & 라이브러리</h4>
							<ul>
								<li>Build Systems</li>
								<li>Git & Version Control</li>
								<li>Cross-platform Development</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<div class="about-image">
				<div class="image-container">
					<img src="https://res.cloudinary.com/dxwuthcy0/image/upload/v1751685845/IMG_5402_p7mbi0.jpg" alt="Profile" />
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		padding: 5rem 2rem;
		background: rgba(255, 255, 255, 0.02);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.about-content {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.about-text h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: var(--color-theme-2);
	}

	.intro {
		font-size: 1.3rem;
		font-weight: 500;
		color: var(--color-theme-1);
		margin-bottom: 1.5rem;
		line-height: 1.6;
	}

	.about-text p {
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 1.5rem;
		color: rgba(0, 0, 0, 0.8);
	}

	.skills {
		margin-top: 3rem;
	}

	.skills h3 {
		font-size: 1.8rem;
		margin-bottom: 1.5rem;
		color: var(--color-theme-2);
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
	}

	.skill-category h4 {
		font-size: 1.2rem;
		margin-bottom: 1rem;
		color: var(--color-theme-1);
		font-weight: 600;
	}

	.skill-category ul {
		list-style: none;
		padding: 0;
	}

	.skill-category li {
		padding: 0.5rem 0;
		color: rgba(0, 0, 0, 0.7);
		position: relative;
		padding-left: 1.5rem;
	}

	.skill-category li::before {
		content: '▶';
		position: absolute;
		left: 0;
		color: var(--color-theme-1);
		font-size: 0.8rem;
	}

	.about-image {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.image-container {
		position: relative;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		padding: 4px;
	}

	.image-container img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		display: block;
		background: white;
	}

	@media (max-width: 968px) {
		.about-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.about-image {
			order: -1;
		}

		.image-container {
			max-width: 300px;
			margin: 0 auto;
		}
	}

	@media (max-width: 768px) {
		.about {
			padding: 3rem 1rem;
		}

		.about-text h2 {
			font-size: 2rem;
		}

		.intro {
			font-size: 1.1rem;
		}

		.about-text p {
			font-size: 1rem;
		}

		.skills-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>