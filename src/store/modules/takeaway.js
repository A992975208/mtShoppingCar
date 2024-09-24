import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
    name: 'foods',
    initialState: {
        //商品列表
        foodsList: [],
        //菜单激活下标值
        activeIndex: 0,
        //购物车列表
        cartList: []
    },
    reducers: {
        //更改商品列表
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
        //更改菜单激活下标值
        changeActiveIndex(state, action) {
            state.activeIndex = action.payload
        },
        //添加购物车列表
        addCartList(state, action) {
            //是否添加过？以action.payload.id为依据去cartList中查找
            const item = state.cartList.find(item => item.id === action.payload.id)
            //如果item存在，则数量加1，否则添加到cartList中
            item ? item.count++ : state.cartList.push(action.payload)
        },
        //count增加
        increCount(state, action) {
            console.log(action)
            //找到当前要修改谁的id
            const item = state.cartList.find(item => item.id === action.payload.id)
            item.count++
        },
        //count减少
        decreCount(state, action) {
            //找到当前要修改谁的id
            const item = state.cartList.find(item => item.id === action.payload.id)
           if( item.count===0){
               return
           }
           item.count--
        },
        //清空购物车
        clearCart(state,action){
            state.cartList=[]
        }

    }
})

export const {
    setFoodsList,
    changeActiveIndex,
    addCartList,
    increCount,
    decreCount,
    clearCart
} = foodStore.actions
//异步获取数据列表
const fetchGoodList = () => {
    return async (dispatch) => {
        //编写异步逻辑
        const res = await axios.get('http://localhost:3004/takeaway')
        //调用dispatch方法，提交action
        dispatch(setFoodsList(res.data))
    }
}
export default foodStore.reducer
export {fetchGoodList}
