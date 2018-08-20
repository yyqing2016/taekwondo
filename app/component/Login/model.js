import * as request from './../../service/requestWrapper';
import { NavigationActions } from 'react-navigation';

export default {
    namespace: 'login',
    state: {
        loading: false,
        cardNumber: '',
    },
    effects: {
        *login({ payload = {} }, { call, put, select }) {
            const { cardNumber } = yield select(state => state.login);

            console.log(cardNumber)
            if (!!cardNumber) {
                yield put({ type: 'loading', payload: true });
                const { data, err } = yield call(request.login, { cardNumber: cardNumber });
                if (data) {
                    console.log(data);
                    console.log(NavigationActions)
                    if (data.events && data.events.length > 0) {
                        console.log("events", data.events)
                        yield put({ type: 'home/updateProps', payload: { events: data.events } });
                    }
                    if (data.classes && data.classes.length > 0) {
                        console.log("classes", data.classes)
                        yield put({ type: 'home/updateProps', payload: { classes: data.classes } });
                    }
                    let resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'THomeView' })//要跳转到的页面名字
                        ]
                    });
                    payload.navigation.dispatch(resetAction);
                    yield put({ type: 'loading', payload: false });
                }
                console.log(err)
                if (err) {
                    // .... 错误处理
                    return;
                }

            }
        }
    },
    reducers: {
        'loading'(state, {
            payload: data
        }) {
            return { ...state, loading: data }
        },
        'updateProps'(state, {
            payload: data
        }) {
            console.log(data)
            return { ...state, ...data };
        }
    }
}