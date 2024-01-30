import LayoutCollageIcon from '../../assets/layout-collage.svg';
import UsersIcon from '../../assets/users.svg';
import ClipboardDataIcon from '../../assets/clipboard-data.svg';
import WorldIcon from '../../assets/world.svg';
import MessageIcon from '../../assets/message-circle.svg';
import BasketCheckIcon from '../../assets/basket-check.svg';
import DatabaseExportIcon from '../../assets/database-export.svg';
import SettingsIcon from '../../assets/settings-2.svg';
import LogoutIcon from '../../assets/logout.svg';
import AvatarDataUri from '../../assets/avatar.png';

export const SIDEBAR_MAIN_ITEMS = [
  {
    icon: LayoutCollageIcon,
    text: 'dashboard',
  },
  {
    icon: UsersIcon,
    text: 'customers',
  },
  {
    icon: ClipboardDataIcon,
    text: 'all reports',
  },
  {
    icon: WorldIcon,
    text: 'Geography',
  },
  {
    icon: MessageIcon,
    text: 'conversations',
  },
  {
    icon: BasketCheckIcon,
    text: 'deals',
  },
  {
    icon: DatabaseExportIcon,
    text: 'export',
  },
];

export const SIDEBAR_SETTINGS_ITEM = {
  icon: SettingsIcon,
  text: 'settings',
};

export const SIDEBAR_LOGOUT_ITEM = {
  icon: LogoutIcon,
  text: 'logout',
};

export const USER_DATA = {
  avatar: AvatarDataUri,
  name: 'gustavo xavier',
  role: 'admin',
};
