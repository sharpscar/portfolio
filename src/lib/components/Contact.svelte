<script>
	let formData = {
		name: '',
		email: '',
		message: ''
	};
	
	let isSubmitting = false;
	let submitStatus = '';

	async function handleSubmit(event) {
		event.preventDefault();
		isSubmitting = true;
		submitStatus = '';

		try {
			// Simulate form submission
			await new Promise(resolve => setTimeout(resolve, 1000));
			
			// Reset form
			formData = { name: '', email: '', message: '' };
			submitStatus = 'success';
			
		} catch (error) {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="contact-content">
			<div class="contact-info">
				<h2>Let's Work Together</h2>
				<p class="contact-description">
					저는 항상 새로운 기회와 협업에 관심이 있습니다.
					어떤 프로젝트가 있든, 그냥 인사하고 싶으시든
					언제든 편하게 연락 주세요!
				</p>

				<div class="contact-methods">
					<div class="contact-method">
						<div class="contact-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.7l-8,5.334L4,8.7V6.297l8,5.333l8-5.333V8.7z"/>
							</svg>
						</div>
						<div class="contact-details">
							<h3>Email</h3>
							<a href="mailto:sharpscar@gmail.com">sharpscar@gmail.com</a>
						</div>
					</div>

					<div class="contact-method">
						<div class="contact-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
							</svg>
						</div>
						<div class="contact-details">
							<h3>LinkedIn</h3>
							<a href="https://www.linkedin.com/in/%EA%B2%BD%ED%83%9C-%EB%B0%95-2717b9141/" target="_blank" rel="noopener noreferrer">
								경태의 링크드인
							</a>
						</div>
					</div>

					<div class="contact-method">
						<div class="contact-icon">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
							</svg>
						</div>
						<div class="contact-details">
							<h3>GitHub</h3>
							<a href="https://github.com/sharpscar" target="_blank" rel="noopener noreferrer">
								github(sharpscar)
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="contact-form-container">
				<form class="contact-form" on:submit={handleSubmit}>
					<div class="form-group">
						<label for="name">Name</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							required
							disabled={isSubmitting}
						/>
					</div>

					<div class="form-group">
						<label for="email">Email</label>
						<input
							type="email"
							id="email"
							bind:value={formData.email}
							required
							disabled={isSubmitting}
						/>
					</div>

					<div class="form-group">
						<label for="message">Message</label>
						<textarea
							id="message"
							bind:value={formData.message}
							rows="6"
							required
							disabled={isSubmitting}
						></textarea>
					</div>

					<button type="submit" class="submit-btn" disabled={isSubmitting}>
						{#if isSubmitting}
							Sending...
						{:else}
							Send Message
						{/if}
					</button>

					{#if submitStatus === 'success'}
						<div class="success-message">
							Thanks for your message! I'll get back to you soon.
						</div>
					{:else if submitStatus === 'error'}
						<div class="error-message">
							Something went wrong. Please try again or contact me directly.
						</div>
					{/if}
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		padding: 5rem 2rem;
		background: rgba(255, 255, 255, 0.05);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.contact-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.contact-info h2 {
		font-size: 2.5rem;
		margin-bottom: 1.5rem;
		color: var(--color-theme-2);
	}

	.contact-description {
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 3rem;
		color: rgba(0, 0, 0, 0.8);
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.contact-method {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.contact-icon {
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		flex-shrink: 0;
	}

	.contact-details h3 {
		font-size: 1.2rem;
		margin: 0 0 0.5rem 0;
		color: var(--color-theme-2);
	}

	.contact-details a {
		color: var(--color-theme-1);
		text-decoration: none;
		font-weight: 500;
	}

	.contact-details a:hover {
		text-decoration: underline;
	}

	.contact-form {
		background: rgba(255, 255, 255, 0.9);
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 500;
		color: var(--color-theme-2);
	}

	.form-group input,
	.form-group textarea {
		width: 100%;
		padding: 1rem;
		border: 2px solid #e1e5e9;
		border-radius: 8px;
		font-size: 1rem;
		font-family: inherit;
		transition: border-color 0.3s ease;
		box-sizing: border-box;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--color-theme-1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 120px;
	}

	.submit-btn {
		width: 100%;
		padding: 1rem 2rem;
		background: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;
		transition: background 0.3s ease, transform 0.2s ease;
	}

	.submit-btn:hover:not(:disabled) {
		background: #4f46e5;
		transform: translateY(-2px);
	}

	.submit-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
		transform: none;
	}

	.success-message,
	.error-message {
		margin-top: 1rem;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		font-weight: 500;
	}

	.success-message {
		background: #d4edda;
		color: #155724;
		border: 1px solid #c3e6cb;
	}

	.error-message {
		background: #f8d7da;
		color: #721c24;
		border: 1px solid #f5c6cb;
	}

	@media (max-width: 968px) {
		.contact-content {
			grid-template-columns: 1fr;
			gap: 3rem;
		}
	}

	@media (max-width: 768px) {
		.contact {
			padding: 3rem 1rem;
		}

		.contact-info h2 {
			font-size: 2rem;
		}

		.contact-description {
			font-size: 1rem;
		}

		.contact-form {
			padding: 1.5rem;
		}

		.contact-method {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
		}

		.contact-methods {
			gap: 1.5rem;
		}
	}
</style>