import * as request from './../../service/requestWrapper';
import { NavigationActions } from 'react-navigation';

// this.props.navigation.dispatch(navigateAction);

export default {
    namespace: 'login',
    state: {
        loading: false,
        phoneNumber: '',
        password: ''
    },
    effects: {
        *login({ payload = {} }, { call, put, select }) {
            const { phoneNumber, password } = yield select(state => state.login);
            if (phoneNumber) {
                // ... 前端本地初步校验  

            }
            if (password) {

            }

            yield put({ type: 'loading', payload: true });
            // const { data, err } = yield call(request.login, payload);
            const { data, err } = yield call(request.login, { email: phoneNumber, password: password });
            yield put({ type: 'loading', payload: false });
            console.log(data);
            console.log(err)
            if (err) {
                // .... 错误处理
                return;
            }
            // yield put({ type: 'loginSuccess', payload: data });
            yield put({ type: 'app/updateProps', payload: { login: true } });

            const navigateAction = NavigationActions.navigate({
                routeName: 'HomeView'
            }); 
            yield put(navigateAction);
            yield put({ type: 'loading', payload: false });
        }
    },
    reducers: {
        'loginSuccess'(state, {
            payload: data
        }) {
 
        },
        'loading'(state, {
            payload: data
        }) {
            return { ...state, loading: data }
        },
        'updateProps'(state, {
            payload: data
        }) {
            return { ...state, ...data };
        }
    }
}