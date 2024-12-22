import React from 'react';
import Menu from './Menu.jsx';

export default function MenuList({scrollListToChild}) {

    const scrollList= Object.entries(scrollListToChild);
    
    const menuList=[
        {"name":"Home", "link":"#home", "class":"header__menu__item"},
        {"name":"About", "link":"#about", "class":"header__menu__item"},
        {"name":"Skills", "link":"#skill", "class":"header__menu__item"},
        {"name":"My work", "link":"#work", "class":"header__menu__item"},
        {"name":"Testimonial", "link":"#testimonial", "class":"header__menu__item"},
        {"name":"Contact", "link":"#contact", "class":"header__menu__item"}
    ]
    return (
        <nav>
            <ul class="header__menu">
                {   
                    menuList.map((item,i) => 
                        <Menu name={item.name} link={item.link} css={item.class} scrollList={scrollList[i]} />
                    )
                }
            </ul>
        </nav>
    );
}

