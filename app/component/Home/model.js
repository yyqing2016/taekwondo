import * as request from './../../service/requestWrapper';

export default {
    namespace: 'home',
    state: {
        loading: false,
        currentStudentCheckInId: '',
        events: [],
        ongoingClasses: [],
        upComingClasses: [],
        classes:[],
    },
    effects: {
        *checkIn({ payload = {} }, { call, put, select }) {
            const { currentStudentCheckInId } = yield select(state => state.home);
            if (!!currentStudentCheckInId) {
                yield put({ type: 'loading', payload: true });
                const { data, err } = yield call(request.checkIn, { data: [{ cardId: currentStudentCheckInId, classInstanceId: 356, checkinTime: new Date() }] });
                yield put({ type: 'loading', payload: false });
                if (data) {
                    console.log(data)
                }
                if (err) {
                    console.log(err)
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