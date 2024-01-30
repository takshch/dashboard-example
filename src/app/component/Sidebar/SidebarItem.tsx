import classNames from 'classnames';

type SidebarItemProps = {
  children: React.ReactNode;
  text: string;
  isHighlighted?: boolean;
};

function SidebarItem({
  text,
  children,
  isHighlighted = false,
}: SidebarItemProps) {
  return (
    <div
      className={classNames('sidebar-item', {
        'sidebar-item--highlighted': isHighlighted,
      })}
    >
      <div className="sidebar-item__left">
        <div className="sidebar-item__icon">{children}</div>
        <div className="sidebar-item__text">{text}</div>
      </div>
      <div className="sidebar-item__right"></div>
    </div>
  );
}

export default SidebarItem;
