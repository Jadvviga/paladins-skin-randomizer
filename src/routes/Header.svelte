<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<header>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="{base}/">Randomizer</a>
			</li>
			<li aria-current={$page.url.pathname === '/statistics' ? 'page' : undefined}>
				<a href="{base}/statistics">statistics</a>
			</li>
			<li aria-current={$page.url.pathname === '/gallery' ? 'page' : undefined}>
				<a href="{base}/gallery">Gallery</a>
			</li>
		</ul>
	</nav>
	<h4>
		Paladins skin randomizer
	</h4>
	<span style="flex: 1;"/>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: rgba(255, 255, 255, 0.7);
	}

	nav {
		display: flex;
		flex: 1;
		justify-content: start;
		align-items: center;
	}

	h4 {
		align-items: center;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1.6rem;
		padding: 0.5em 0;
		margin: auto;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		padding: 0 1.5em
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
