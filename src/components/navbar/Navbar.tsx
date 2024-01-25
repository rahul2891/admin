import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://lh3.googleusercontent.com/a/ACg8ocLn6tvE0Z48IueIswTJQzVRudTuhYct8E0OU2VcPVc_rNVe=s96-c" alt="" />
          <span>Rahul</span>
        </div>
        <img src="settings.svg" alt="" className="icon" />

      </div>
    </div>
  )
}

export default Navbar