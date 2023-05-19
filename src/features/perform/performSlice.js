import { createSlice } from "@reduxjs/toolkit";

export const performSlice = createSlice({
    name : "perform",
    initialState : {
        title : null,
        text : null,
        image : null
    },
    reducers : {
        performList : (state, action) => {
            state = action.payload;
        }
    }
})


// export const performData = () => async (dispatch) => {
//     try {
//         const response = await fetch('http://api.kcisa.kr/API_CNV_053/request?serviceKey=ba39d8a5-a38f-4462-915f-815eb06bd176&type=json');
//         const data = await response.json();
//         console.log(data)
//         console.log(data.responseText.item)
//     }
//     catch {
//         dispatch(performList('오류'))
//     }
// }

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'http://api.kcisa.kr/API_CNV_053/request?serviceKey=ba39d8a5-a38f-4462-915f-815eb06bd176');
// xhr.onreadystatechange = function () {
// if (this.readyState == 4) {

// console.log('status: ' + this.status);
// console.log('resultCode: ' + $(this.responseText).find('resultCode').text());
// console.log('resultMsg: ' + $(this.responseText).find('resultMsg').text());

// var item = $(this.responseText).find('item');
// $(item).each(function(){

// console.log("title" + $(this).find("title").text());
// console.log("description" + $(this).find("description").text());
// console.log("viewCount" + $(this).find("viewCount").text());
// console.log("url" + $(this).find("url").text());
// console.log("imageObject" + $(this).find("imageObject").text());
// console.log("localId" + $(this).find("localId").text());
// console.log("sourceTitle" + $(this).find("sourceTitle").text());
// console.log("eventSite" + $(this).find("eventSite").text());
// console.log("type" + $(this).find("type").text());
// console.log("contactPoint" + $(this).find("contactPoint").text());
// console.log("charge" + $(this).find("charge").text());
// console.log("audience" + $(this).find("audience").text());
// console.log("period" + $(this).find("period").text());
// });
// };
// }
// xhr.send('');

export const { performList } = performSlice.actions;
export default performSlice.reducer;