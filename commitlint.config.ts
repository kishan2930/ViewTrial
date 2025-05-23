import type {UserConfig} from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['Feat', 'Fix', 'Chore']],
    'type-case': [2, 'always', 'pascal-case'],
  },
};

export default Configuration;
