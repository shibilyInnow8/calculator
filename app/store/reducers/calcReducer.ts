import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';
interface actionInterface {
  data: string;
}
interface IState {
  calReducerValue: boolean;
}
const initialState: IState = {
  calReducerValue: '',
};
export const calcReducer = createReducer(initialState, {
  [types.UPDATE_VALUE](state:IState, action: actionInterface) {
    return { ...state, calReducerValue: action.data };
  },
});
