import { forwardRef } from "react";

const About = forwardRef(function About({},ref){
    return(
        <dialog ref={ref} className="about">
            <h1>About is making notes !!</h1>
            <p>To-do apps are digital tools designed to help users manage tasks, organize their schedules, and increase productivity. They serve as electronic task lists that users can access from their smartphones, tablets, or computers!</p>

            <form method="dialog" className="form">  
            {/* this button closes the dialog */}
                <button>Close</button>
            </form>
        </dialog>
    );
})

export default About; 