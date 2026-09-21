export interface NavItem {
  key: string
  label: string
}

interface SidebarProps {
  items: NavItem[]
  activeKey: string
  onChange: (key: string) => void
}

export const Sidebar = ({ items, activeKey, onChange }: SidebarProps) => {
  return (
    <aside className="sidebar" aria-label="Primary navigation">
      <div className="brand">
        <h1>EcoTwin AI</h1>
        <p>Campus Sustainability Twin</p>
      </div>
      <nav>
        <ul>
          {items.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={item.key === activeKey ? 'nav-button nav-button--active' : 'nav-button'}
                onClick={() => onChange(item.key)}
                aria-current={item.key === activeKey ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
