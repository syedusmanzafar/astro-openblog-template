interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
}

export const siteConfig: SiteConfig = {
	author: 'DanielCG',
	title: 'Astro Theme OpenBlog',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	lang: 'en-US',
	ogLocale: 'en_US',
	shareMessage: 'Share this post' // Message to share a post on social media
}
