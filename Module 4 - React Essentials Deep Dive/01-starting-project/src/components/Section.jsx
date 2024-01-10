export default function Section({title,children,...props}){
        {/* Note that: we have to de structure each and every props of components  */}
        // Lecture 65:  ...props tells javascript to accept all other props from custom components

  return(
  <section {...props}>
    <h2>{title}</h2>
    {children}
  </section>
  ); 
}
