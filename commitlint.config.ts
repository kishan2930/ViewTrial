import type {UserConfig} from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],
    'type-case': [2, 'always', 'pascal-case'],
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', ['sentence-case']],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(Feat|Fix|Chore): (.+)$/,
      headerCorrespondence: ['type', 'subject'],
    },
  },
};

export default Configuration;
