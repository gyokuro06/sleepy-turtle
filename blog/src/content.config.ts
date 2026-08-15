import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postFrontmatterSchema } from './schemas/post.mjs';

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: postFrontmatterSchema,
});

export const collections = { posts };
