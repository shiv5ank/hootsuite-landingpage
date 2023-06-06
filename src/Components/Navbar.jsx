function Navbar(){
    let navDivStyle={
        width:"100%",
        height:"80px",
        marginTop:"10px",
        marginLeft:"10px",
        display:"flex",
        justifyContent:"space-evenly"
    }
    return (
        <div style={navDivStyle}>
            <div style={{width:"50%",height:'100%',display:"flex",justifyContent:"space-evenly"}}>
                <i class="fa-solid fa-feather fa-2x" style={{position:"absolute",left:"60px",top:"20px"}}></i>
                <h2 style={{marginTop:"23px",marginLeft:"50px"}}>HootSuite</h2>
                <div style={{display:"flex",justifyContent:"space-between",width:'500px',alignItems:"center",marginLeft:'70px'}}>
                <a herf="/">Platforms</a>
                <a herf="/">Plans</a>
                <a herf="/">Enterprise</a>
                <a herf="/">Resource</a>
                <a herf="/">Education</a>
                </div>
                
            </div>
            <div style={{width:"40%",height:"100%",display:"flex",justifyContent:"space-evenly",alignItem:"center"}}>
                <p style={{marginTop:"30px", marginLeft:"35px"}}>Contact Us</p>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p>Login</p>
                    <button style={{height:"30px",background:'green',border:"none",color:"white",width:"100px", marginLeft:"30px"}}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;