export default function Navbar() {
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <>
      <p>CV Builder</p>
      <button onClick={reloadPage}>Reset</button>
    </>
  )
}
