import HeaderBottomMenuList from './HeaderBottomMenuList.jsx';
import HeaderBottomSearch from './HeaderBottomSearch.jsx';

export default function HeaderBottom(){
    return (
        <div class="nav_area">
        <div class="inner">
            <HeaderBottomMenuList />
            <HeaderBottomSearch />
        </div>
    </div>
    );
}