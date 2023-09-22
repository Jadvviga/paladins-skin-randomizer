import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"
import { vitePreprocess } from '@sveltejs/kit/vite';


const dev = "production" === "development";
export const url = dev ? "" : "/paladins-skin-randomizer"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),


	kit: {
		adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            base: url,
        }
	}
};

export default config;
