

function Carts({kn}) {
   
    var styling={border:'3px solid blue', height:'340px',width:'250px',backgroundColor:'skyblue',color:'deeppink',display:'inline-block',
    fontStyle:'italic',borderRadius:'15px', margin:'20px',textAlign:'center'}

    return(
        
            <div>
                <div>
                    {kn.map((ele)=>(
                        <div style={styling}>
                            <img src={ele.images} height='90px' width='200px'/>
                            <div>
                            <p>{ele.productname_}</p>
                            <p>{ele.Brand}</p>
                            <p>{ele.id}</p>
                            <p>{ele.Category}</p>
                            <p>{ele.Price}</p>
                               
                            </div>
                        </div>
                    ))}
                </div>
           
            </div>
        
        
    );
    
}

export default Carts;