import { z } from 'astro/zod';

/** Content Collections の posts と pre-commit 検証で共有する frontmatter スキーマ */
export const postFrontmatterSchema = z.object({
	title: z.string().trim().min(1, 'title は空にできません'),
	category: z.string().trim().min(1, 'category は空にできません'),
	date: z.coerce.date({ error: 'date は YYYY-MM-DD 形式の日付で指定してください' }),
	readingMinutes: z
		.number({ error: 'readingMinutes は正の整数で指定してください' })
		.int()
		.positive('readingMinutes は 1 以上の整数で指定してください'),
	tags: z
		.array(z.string().trim().min(1, 'tags の各要素は空にできません'))
		.min(1, 'tags は 1 つ以上必要です'),
	lead: z
		.array(z.string().trim().min(1, 'lead の各行は空にできません'))
		.min(1, 'lead は 1 行以上必要です'),
});
