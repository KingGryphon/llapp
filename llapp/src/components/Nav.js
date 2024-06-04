import Header from './Header'


const styling = {
    display: 'grid-row',
    margin: '2px',
    gridAutoRow: '100px',
};
function Nav(){

    return (
        <nav style={{ backgroundColor: '#FBDABB', display: 'inline-block' }}>

            <div style={{display: 'grid'}}>
                <Header style={{alignItems: 'left', display: 'grid'}}/>

                <ul style={{ alignItems: 'center' }}>
                    <li style={styling}><a href="/Home" >Home</a></li>
                    <li style={styling}><a href="/About">About</a></li>
                    <li style={styling}><a href="/Menu">Menu</a></li>
                    <li style={styling}><a href="/Reservations">Reservations</a></li>
                    <li style={styling}><a href="/Order_Online">Order Online</a></li>
                    <li style={styling}><a href="/Login">Login</a></li>
                </ul>
            </div>
        </nav>
)}

export default Nav