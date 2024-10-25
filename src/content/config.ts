import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tech: z.array(z.string()),
        desc: z.string().optional()
    })
});

export const collections = {
    'project': projectCollection
};