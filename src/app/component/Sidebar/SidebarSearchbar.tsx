import SearchIcon from '../../../assets/search.svg';

function SidebarSearchbar() {
  return (
    <div className="sidebar-searchbar">
      <div className="sidebar-searchbar__icon">
        <SearchIcon />
      </div>
      <div>
        <input className="sidebar-searchbar__input" placeholder="Search" />
      </div>
    </div>
  );
}

export default SidebarSearchbar;
