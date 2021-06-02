/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as calcReducer from './calcReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(calcReducer, loadingReducer, themeReducer);
