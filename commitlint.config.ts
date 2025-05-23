import type {UserConfig} from '@commitlint/types';

const Configuration: UserConfig = {
  rules: {
    'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],
    'type-case': [2, 'always', 'pascal-case'], // PascalCase: Feat, Fix, Chore
    'subject-case': [0], // Allow any case in subject
    'header-max-length': [2, 'always', 100],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+): (.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
};

export default Configuration;
