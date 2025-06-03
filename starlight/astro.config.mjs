// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Vue.js',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
  {
    label: 'Getting Started',
    autogenerate: { directory: 'getting-started' }
  },
  {
    label: 'Essentials',
    autogenerate: { directory: 'essentials' }
  },
  {
    label: 'Components In-Depth',
    autogenerate: { directory: 'components' }
  },
  {
    label: 'Reusability',
    autogenerate: { directory: 'reusability' }
  },
  {
    label: 'Built-in Components',
    autogenerate: { directory: 'components' }
  },
  {
    label: 'Scaling Up',
    autogenerate: { directory: 'scalingup' }
  }
]
      
}),
  
],		

		});
	

