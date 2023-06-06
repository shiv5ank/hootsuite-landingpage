function Footer(){
    let footerStyle={
        width:'100%',
        height:"300px",
        display:"flex",
        justifyContent:"space-between",
        marginTop: "80px"
    }
    return (
        <div style={footerStyle}>
            <div style={{height:"100%",width:"30%"}}>
            <i class="fa-solid fa-rocket fa-8x" style={{color:'#f0bf2e'}}></i>
            <h2>2,500</h2>
            <p>enterprise organisations succesfully launched</p>
            </div>
            <div style={{height:"100%",width:"30%"}}>
            <i class="fa-solid fa-certificate fa-8x" style={{color:'#f0bf2e'}}></i>
            <h2>45,000</h2>
            <p>enterprise users onboard seamlessly</p>
            </div>
            <div style={{height:"100%",width:"30%"}}>
            <i class="fa-solid fa-comment fa-8x" style={{color:'#f0bf2e'}}></i>
            <h2>200,000+</h2>
            <p>professional trained on product and strategy</p>
            </div>
            
        </div>
    )
}

export default Footer;