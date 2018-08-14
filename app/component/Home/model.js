import * as request from './../../service/requestWrapper';

export default {
    namespace: 'home',
    state: {
        loading: false,
        currentStudentCheckInId: '',
    },
    effects: {
        *checkIn({ payload = {} }, { call, put, select }) {
            const { currentStudentCheckInId } = yield select(state => state.home);
            if (!!currentStudentCheckInId) {
                yield put({ type: 'loading', payload: true });
                const { data, err } = yield call(request.checkIn, { cardId: currentStudentCheckInId, classInstanceId: 356, checkinTime: new Date() });
                yield put({ type: 'loading', payload: false });
                console.log(data);
                console.log(err)
                if (err) {
                    // .... 错误处理
                    return;
                }

            }
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