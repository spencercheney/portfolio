export default function basic({style, children}) {
  return (
    <div className="component" style={style}>
      <div className="header">Component</div>
      {children}
    </div>
  )
}