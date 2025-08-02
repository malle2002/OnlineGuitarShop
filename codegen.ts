import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://graphql-api-brown.vercel.app/api/graphql',
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/generated/': {
      preset: 'client',
      plugins: [],
    },
    'src/generated/modules.d.ts': {
      plugins: ['typescript-graphql-files-modules'],
    },
  },
};

export default config;
