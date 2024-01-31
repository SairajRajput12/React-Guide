import NavBar from '../components/Navbar';
const navBarContent = ['Home','About','Services','Contact']; 

export default function RenderedNavBar(){
    return(
        <div className="navbar">
          <NavBar data={navBarContent} appName={"Project management"} />
        </div>
    );
}