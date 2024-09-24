import{configureStore} from "@reduxjs/toolkit";
//导入foodStore模块
import foodReducer from "./modules/takeaway";
const store = configureStore({
    reducer:{
        food:foodReducer,
        //菜单激活下标值
        activeIndex:0
    }
})
export default store
