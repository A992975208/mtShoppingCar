import classNames from 'classnames'
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeActiveIndex} from "../../store/modules/takeaway";

const Menu = () => {
  const dispatch = useDispatch()
  const {foodsList, activeIndex} = useSelector(state => state.food)
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 添加active类名会变成激活状态 */}
      {menus.map((item, index) => {
        return (
          <div
              onClick={() => {
                dispatch(changeActiveIndex(index))
              }}
            key={item.tag}
            className={classNames(
              'list-menu-item',
                // 根据下标值去判断当前点击的高亮
                activeIndex === index && 'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu
