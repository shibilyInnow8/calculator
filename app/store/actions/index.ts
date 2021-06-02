// export action creators
import * as loginActions from './calActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
);
