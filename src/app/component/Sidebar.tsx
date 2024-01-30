import LogoIcon from '../../assets/brand.svg';
import SidebarSearchbar from './Sidebar/SidebarSearchbar';
import SidebarItem from './Sidebar/SidebarItem';
import {
  USER_DATA,
  SIDEBAR_MAIN_ITEMS,
  SIDEBAR_SETTINGS_ITEM,
} from './sidebarData';
import SidebarLogoutItem from './Sidebar/SidebarLogoutItem';
import Avatar from './Avatar';
import Tag from './Tag';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__brand">
        <LogoIcon />
      </div>
      <div className="sidebar__content">
        <SidebarSearchbar />
        {SIDEBAR_MAIN_ITEMS.map(({ text, icon: Icon }, index) => (
          <SidebarItem key={index} text={text} isHighlighted={index === 0}>
            <Icon />
          </SidebarItem>
        ))}
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__user">
          <Avatar src={USER_DATA.avatar} text={USER_DATA.name} />
          <div className="sidebar__user-details">
            <div className="sidebar__user-name">{USER_DATA.name}</div>
            <Tag text={USER_DATA.role} />
          </div>
        </div>
        <div className="sidebar__content">
          {[SIDEBAR_SETTINGS_ITEM].map(({ text, icon: Icon }, index) => (
            <SidebarItem key={index} text={text}>
              <Icon />
            </SidebarItem>
          ))}
          <SidebarLogoutItem />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
