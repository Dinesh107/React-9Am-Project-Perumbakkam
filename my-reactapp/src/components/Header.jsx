import './Header.css';
function Header() {
    const myStyle = {
        color: "green", 
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "bold",
    }
    return (
    <>
     <h1 style={myStyle} >Hello Styling</h1>
     <p>Add a more Style to this page</p>
    </>
)}

export default Header;