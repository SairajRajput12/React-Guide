export default function TabButton({children,onSelect,isSelected}){
    return (
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    );
}
// Lecture 48: 
// react uses the children components to show the text between the components
// the children prop refers to the content between your component tag

// export default function TabButton({children}){
//     return (
//         <li><button>{children}</button></li>
//     );
// }