<section class="hero">
	<div class="container">
		<h1>경태의 포트폴리오 페이지에 오신걸 환영합니다.</h1>
		<p class="tagline">C++ Developer & Systems Programmer</p>
		<p class="description">
			c++, python언어에 강점이 있습니다. 			<br>
			물론 웹개발 언어에도 약간의 지식이 있습니다.
			php(laravel), javascript(node,express),python(django)
		</p>
		<div class="cta">
			<a href="#projects" class="btn primary">View My Work</a>
			<a href="#contact" class="btn secondary">Get In Touch</a>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
	}

	.container {
		max-width: 800px;
	}

	h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.tagline {
		font-size: 1.5rem;
		color: var(--color-theme-2);
		margin-bottom: 1.5rem;
		font-weight: 500;
	}

	.description {
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2rem;
		border-radius: 8px;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn.primary {
		background: var(--color-theme-1);
		color: white;
	}

	.btn.primary:hover {
		background: #4f46e5;
		transform: translateY(-2px);
		text-decoration: none;
	}

	.btn.secondary {
		background: transparent;
		color: var(--color-theme-2);
		border: 2px solid var(--color-theme-2);
	}

	.btn.secondary:hover {
		background: var(--color-theme-2);
		color: white;
		transform: translateY(-2px);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		.tagline {
			font-size: 1.2rem;
		}

		.description {
			font-size: 1rem;
		}

		.cta {
			flex-direction: column;
			align-items: center;
		}

		.btn {
			width: 200px;
		}
	}
</style>