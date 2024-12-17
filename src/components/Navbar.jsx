import '../styles/Navbar.css'

export default function Navbar() {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <div className="nav">
      <p>CV Builder</p>
      <button onClick={reloadPage}>Reset</button>
    </div>
  )
}
