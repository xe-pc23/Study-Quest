import Link from "next/link";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/tasks", label: "タスク一覧" },
  { href: "/tasks/new", label: "新規作成" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" href="/">
          <span className="brand-mark">SQ</span>
          <span>Study Quest</span>
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
