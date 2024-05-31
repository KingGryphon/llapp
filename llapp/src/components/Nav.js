

function Nav(){

    return (
        <nav style={{ backgroundColor: '#FBDABB', alignItems: 'center' }}>
            <ul style={{ alignItems: 'center' }}>
                <li style={{display: 'inline-block', margin: '2px'}}><a href="/Home" >Home</a></li>
                <li style={{display: 'inline-block', margin: '2px'}}><a href="/About">About</a></li>
                <li style={{display: 'inline-block', margin: '2px'}}><a href="/Menu">Menu</a></li>
                <li style={{display: 'inline-block', margin: '2px'}}><a href="/Reservations">Reservations</a></li>
                <li style={{display: 'inline-block', margin: '2px'}}><a href="/Order_Online">Order Online</a></li>
                <li style={{display: 'inline-block', margin: '2px'}}><a href="/Login">Login</a></li>
            </ul>
        </nav>
)}

export default Nav