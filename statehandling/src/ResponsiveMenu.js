import "./App.css";

export default function ResponsiveMenu(props) {
    return (
        // <div className="menu" style={{left: props.status ? "0" : "-100%"}}> it can be also used
        <div className={`menu ${props.status ? "activemenu" : ""}`}>
           <ul>
            <li>Home</li>
            <li>Services</li>
            <li>about</li>
            <li>Contact us</li>
            <li>SignUp</li>
           </ul>
        </div>
    );
}