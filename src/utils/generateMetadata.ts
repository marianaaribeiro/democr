import type { Metadata } from 'next';

async function generateMetadata(meta: {
	title: string;
	description: string;
	cardImage: string;
	robots: string;
	favicon: string;
	url: string;
}): Promise<Metadata> {
	return {
		title: meta.title,
		description: meta.description,
		referrer: 'origin-when-cross-origin',
		keywords: ['M.A.', 'fdk', 'fdk react', 'saas'],
		authors: [{ name: 'Vercel', url: 'https://vercel.com/' }],
		creator: 'M.A.',
		publisher: 'M.A.',
		robots: meta.robots,
		icons: { icon: meta.favicon },
		metadataBase: new URL(meta.url),
		openGraph: {
			url: meta.url,
			title: meta.title,
			description: meta.description,
			images: [meta.cardImage],
			type: 'website',
			siteName: meta.title
		},
		twitter: {
			card: 'summary_large_image',
			site: '@M.A.',
			creator: '@M.A.',
			title: meta.title,
			description: meta.description,
			images: [meta.cardImage]
		}
	};
}

export default generateMetadata;
