import Header from './Header'

function Nav(){

    return (
        <nav style={{ backgroundColor: '#FBDABB', alignItems: 'center' }}>
            <Header style={{alignItems: 'left'}}/>
            <div >
                <ul style={{ alignItems: 'right' }}>
                    <li style={{display: 'inline-block', margin: '2px'}}><a href="/Home" >Home</a></li>
                    <li style={{display: 'inline-block', margin: '2px'}}><a href="/About">About</a></li>
                    <li style={{display: 'inline-block', margin: '2px'}}><a href="/Menu">Menu</a></li>
                    <li style={{display: 'inline-block', margin: '2px'}}><a href="/Reservations">Reservations</a></li>
                    <li style={{display: 'inline-block', margin: '2px'}}><a href="/Order_Online">Order Online</a></li>
                    <li style={{display: 'inline-block', margin: '2px'}}><a href="/Login">Login</a></li>
                </ul>
            </div>
        </nav>
)}

export default Nav