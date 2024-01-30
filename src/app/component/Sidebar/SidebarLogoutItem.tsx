import { SIDEBAR_LOGOUT_ITEM } from '../sidebarData.ts';
import SidebarItem from './SidebarItem';

const { text, icon: LogoutIcon } = SIDEBAR_LOGOUT_ITEM;

function SidebarLogoutItem() {
  return (
    <div className="sidebar-item-logout">
      <SidebarItem text={text}>
        <LogoutIcon />
      </SidebarItem>
    </div>
  );
}

export default SidebarLogoutItem;
