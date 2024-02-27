import Links from "./Links";


export default function NavBar({data,appName}){
    console.log(data); 
    return(
        <nav className="nav">
        <span><h1>{appName}</h1></span> 
        <div className='nav-links1'>
          {data.map((arrayE,index) => <Links key={index} data1={arrayE} />)}
        </div>
       </nav>
    );
}