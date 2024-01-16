export default function Button({insert}){
    return(
       <div className="clickable">
            <button onClick={insert} className="create">Create Note</button>

       </div>
    );
}