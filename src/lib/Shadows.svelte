<figure>
	<img
		class:-scale-x-100={Math.random() < 0.5}
		class:-scale-y-100={Math.random() < 0.5}
		src="/assets/shadows.webp"
		alt=""
		width={626} height={ 417}
		loading="eager"
	/>
</figure>

<style>
	figure {
		pointer-events: none;
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		mix-blend-mode: multiply;
	}

	img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		scale: 1.05;
		animation: sway 45s ease-in-out infinite alternate;
	}

	@keyframes sway {
		0% {
			transform: translateX(-2%) translateY(-2%);
		}
		25% {
			transform: translateX(2%) translateY(2%);
		}
		50% {
			transform: translateX(2%) translateY(-2%);
		}
		75% {
			transform: translateX(-2%) translateY(2%);
		}
		100% {
			transform: translateX(-2%) translateY(-2%);
		}
	}
</style>
