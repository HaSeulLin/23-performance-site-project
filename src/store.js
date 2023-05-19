import { configureStore } from '@reduxjs/toolkit'

//리듀서 연결
import performSlice from './features/perform/performSlice'

export default configureStore({
    reducer : {
        performList : performSlice
    },
})