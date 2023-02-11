import { bindActionCreators } from 'redux';
import { useAppDispatch } from './redux';
import { AllActionCreators } from './../store/slices/AllActionCreators';

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(AllActionCreators, dispatch);
};
