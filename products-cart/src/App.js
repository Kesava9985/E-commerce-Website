import logo from './logo.svg';

import './App.css';
import Header from './Header';
import Hello from './Hello';
// import Brand from './Brand';
// import Min from './Min';
// import Max from './Max';
// import Category from './Category';
import { useState } from 'react';
import Carts from './Cart'
import Products from './Products';







function App() { 

  var [arr,setarr]=useState(Products);
  var [cart,setCart]=useState([]);
  var [cartdis,setCartdis]=useState(false);
  var kanna={border:'3px solid blue', height:'340px',width:'250px',backgroundColor:'skyblue',color:'deeppink',display:'inline-block',
fontStyle:'italic',borderRadius:'15px', margin:'20px',textAlign:'center'}
var ammu={marginLeft:'550px',color:'deeppink',fontStyle:'italic'}
  
 
var hello1=()=>{
  var brnd=document.getElementById('kc').value;
  var catgry=document.getElementById('aa').value;
  var mip=document.getElementById('dd').value;
  var mxp=document.getElementById('kk').value;
  var sa=document.getElementById('ss').value;
  if( brnd!=""&&catgry!=""&&mip!=""&&mxp!=""&&sa!=""){
  var cc=Products.filter((ele)=>{
    return ele.Brand==brnd && ele.Category==catgry &&  ele.Price>=mip &&  ele.Price<=mxp &&  ele.productname_.includes(sa)})
  setarr(cc)
  }
  
  // if( brnd!=""&&catgry!=""&&mip!=""&&mxp!=""&&sa==""){
  //   var cc=Products.filter((ele)=>{
  //     return ele.Brand==brnd && ele.Category==catgry&&  ele.Price>=mip &&  ele.Price<=mxp  })
  //   setarr(cc)
  //   }
  // if( brnd!=""&&catgry!=""&&mip!=""&&mxp==""&&sa==""){
  //   var cc=Products.filter((ele)=>{
  //     return ele.Brand==brnd && ele.Category==catgry&&  ele.Price>=mip  })
  //   setarr(cc)
  //   }
  //   if( brnd!=""&&catgry!=""&&mxp!=""&&mip==""&&sa==""){
  //     var cc=Products.filter((ele)=>{
  //       return ele.Brand==brnd && ele.Category==catgry&&  ele.Price<=mxp  })
  //     setarr(cc)
  //     }
  
   
//----------------four----------------------
      if( brnd==""&&catgry!=""&&mip!=""&&mxp!=""&&sa!=""){ 
        var cc=Products.filter((ele)=>{
          return  ele.Category==catgry&&  ele.Price>=mip &&  ele.Price<=mxp && ele.productname_.includes(sa) })
        setarr(cc)
        }
        if( brnd!=""&&catgry!=""&&mip!=""&&mxp!=""&&sa==""){
          var cc=Products.filter((ele)=>{
            return ele.Brand==brnd && ele.Category==catgry&&  ele.Price>=mip &&  ele.Price<=mxp  })    
          setarr(cc)
          }
          if( brnd!=""&&catgry==""&&mip!=""&&mxp!=""&&sa!=""){
            var cc=Products.filter((ele)=>{
              return ele.Brand==brnd &&  ele.Price>=mip &&  ele.Price<=mxp && ele.Price.includes(sa) })
            setarr(cc)
            }
            if( brnd!=""&&catgry!=""&&mip==""&&mxp!=""&&sa!=""){
              var cc=Products.filter((ele)=>{
                return ele.Brand==brnd && ele.Category==catgry &&  ele.Price<=mxp &&  ele.Price.includes(sa)  })
              setarr(cc)
              }
              if( brnd!=""&&catgry!=""&&mip!=""&&mxp==""&&sa!=""){
                var cc=Products.filter((ele)=>{
                  return ele.Brand==brnd && ele.Category==catgry &&  ele.Price>=mip &&  ele.Price.includes(sa)  })
                setarr(cc)
                }

         
//--------------Three-with-Brand----------------------
        if( brnd!=""&&catgry!=""&&mip!=""&&mxp==""&&sa==""){
          var cc=Products.filter((ele)=>{
            return  ele.Brand==brnd &&  ele.Category==catgry && ele.Price>=mip })
          setarr(cc)
          }
          if( brnd!=""&&catgry==""&&mip!=""&&mxp!=""&&sa==""){
            var cc=Products.filter((ele)=>{
              return  ele.Brand==brnd &&  ele.Price>=mip &&  ele.Price<=mxp  })
            setarr(cc)
            }
        if( brnd!=""&&catgry==""&&mip==""&&mxp!=""&&sa!=""){
          var cc=Products.filter((ele)=>{
            return  ele.Category==catgry &&  ele.Price<=mxp  && ele.productname_.includes(sa) })
          setarr(cc)
          }
//-------------Three-with-Category-------------
          if( brnd==""&&catgry!=""&&mip!=""&&mxp!=""&&sa==""){
            var cc=Products.filter((ele)=>{
              return ele.Category==catgry &&  ele.Price>=mip &&   ele.Price<=mxp})
            setarr(cc)
            }
            if( brnd==""&&catgry!=""&&mip==""&&mxp!=""&&sa!=""){
              var cc=Products.filter((ele)=>{
                return  ele.Category==catgry &&  ele.Price<=mxp  && ele.productname_.includes(sa) })
              setarr(cc)
              }
              if( brnd!=""&&catgry!=""&&mip==""&&mxp==""&&sa!=""){
                var cc=Products.filter((ele)=>{
                  return  ele.Brand==brnd  && ele.Category==catgry &&   ele.productname_.includes(sa) })
                setarr(cc)
                }

   //------------Three-With-mip------------------------
                if( brnd==""&&catgry==""&&mip!=""&&mxp!=""&&sa!=""){
                  var cc=Products.filter((ele)=>{
                    return   ele.Price>=mip &&   ele.Price<=mxp && ele.includes(sa)})
                  setarr(cc)
                  }
                  if( brnd!=""&&catgry==""&&mip!=""&&mxp!=""&&sa==""){
                    var cc=Products.filter((ele)=>{
                      return    ele.Brand==brnd  &&  ele.Price>=mip &&   ele.Price<=mxp   })
                    setarr(cc)
                    }
                    if( brnd!=""&&catgry!=""&&mip!=""&&mxp==""&&sa==""){
                      var cc=Products.filter((ele)=>{
                        return  ele.Brand==brnd  && ele.Category==catgry &&   ele.Price==mip })
                      setarr(cc)
                      }    
                      
   //------------Three-With-mxp------------------------
                if( brnd!=""&&catgry==""&&mip==""&&mxp!=""&&sa!=""){
                  var cc=Products.filter((ele)=>{
                    return   ele.Brand==brnd  && ele.Price>=mxp &&  ele.includes(sa)})
                  setarr(cc)
                  }
                  if( brnd!=""&&catgry==""&&mip!=""&&mxp!=""&&sa==""){
                    var cc=Products.filter((ele)=>{
                      return    ele.Category==catgry  &&  ele.Price>=mxp &&   ele.includes(sa)   })
                    setarr(cc)
                    }
                               
// 2 . doubles-with brands
            if( brnd!=""&&catgry!=""&& mip==""&&mxp==""&&sa==""){
              var cc=Products.filter((ele)=>{
                return ele.Brand==brnd && ele.Category==catgry })
              setarr(cc)
              }
            if( brnd!=""&&catgry==""&&mip!=""&&mxp==""&&sa==""){
              var cc=Products.filter((ele)=>{
                return  ele.Brand==brnd   && ele.Price<=mip })
              setarr(cc)
              }
              if( brnd!=""&&catgry==""&&mip==""&&mxp!=""&&sa==""){
                var cc=Products.filter((ele)=>{
                  return ele.Brand==brnd   && ele.Price>=mxp })
                setarr(cc)
                }
                if( brnd!=""&&catgry==""&&mip==""&&mxp==""&&sa!=""){
                  var cc=Products.filter((ele)=>{
                    return  ele.Brand==brnd   && ele.productname_.includes(sa) })
                  setarr(cc)
                  }
// doubles-with catgry
              if( brnd!=""&&catgry!=""&& mip==""&&mxp==""&&sa==""){
                var cc=Products.filter((ele)=>{
                  return ele.Brand==brnd && ele.Category==catgry })
                setarr(cc)
                }
              if( brnd==""&&catgry!=""&&mip!=""&&mxp==""&&sa==""){
                var cc=Products.filter((ele)=>{
                  return  ele.Category==catgry   && ele.Price<=mip })
                setarr(cc)
                }
                if( brnd==""&&catgry!=""&&mip==""&&mxp!=""&&sa==""){
                  var cc=Products.filter((ele)=>{
                    return ele.Category==catgry   && ele.Price>=mxp })
                  setarr(cc)
                  }
                  if( brnd==""&&catgry!=""&&mip==""&&mxp==""&&sa!=""){
                    var cc=Products.filter((ele)=>{
                      return  ele.Category==catgry   && ele.productname_.includes(sa) })
                    setarr(cc)
                    }
 //doubles - with min
                      if( brnd!=""&&catgry==""&& mip!=""&&mxp==""&&sa==""){
                        var cc=Products.filter((ele)=>{
                          return ele.Brand==brnd && ele.Price>=mip })
                        setarr(cc)
                        }
                      if( brnd==""&&catgry!=""&&mip!=""&&mxp==""&&sa==""){
                        var cc=Products.filter((ele)=>{
                          return  ele.Category==catgry   && ele.Price>=mip })
                        setarr(cc)
                        }
                        if( brnd==""&&catgry==""&&mip!=""&&mxp!=""&&sa==""){
                          var cc=Products.filter((ele)=>{
                            return ele.Price>=mip   && ele.Price<=mxp })
                          setarr(cc)
                          }
                          if( brnd==""&&catgry==""&&mip!=""&&mxp==""&&sa!=""){
                            var cc=Products.filter((ele)=>{
                              return  ele.Price>=mip  && ele.productname_.includes(sa) })
                            setarr(cc)
                            } 
  //doubles - with mxp
                          if( brnd!=""&&catgry==""&& mip==""&&mxp!=""&&sa==""){
                            var cc=Products.filter((ele)=>{
                              return ele.Brand==brnd && ele.Price<=mxp })
                            setarr(cc)
                            }
                          if( brnd==""&&catgry!=""&&mip==""&&mxp!=""&&sa==""){
                            var cc=Products.filter((ele)=>{
                              return  ele.Category==catgry   && ele.Price<=mxp })
                            setarr(cc)
                            }
                            if( brnd==""&&catgry==""&&mip!=""&&mxp!=""&&sa==""){
                              var cc=Products.filter((ele)=>{
                                return ele.Price>=mip   && ele.Price<=mxp })
                              setarr(cc)
                              }
                              if( brnd==""&&catgry==""&&mip==""&&mxp!=""&&sa!=""){
                                var cc=Products.filter((ele)=>{
                                  return  ele.Price<=mxp  && ele.productname_.includes(sa) })
                                setarr(cc)
                                } 
 // 1. singles
            if( brnd!=""&&catgry==""&& mip==""&&mxp==""&&sa==""){
              var cc=Products.filter((ele)=>{
                return ele.Brand==brnd })
              setarr(cc)
              }
              if( brnd==""&&catgry!=""&&mip==""&&mxp==""&&sa==""){
              var cc=Products.filter((ele)=>{
                return  ele.Category==catgry  })
              setarr(cc)
              }
             
                if( brnd==""&&catgry==""&&mip!=""&&mxp==""&&sa==""){
                  var cc=Products.filter((ele)=>{
                    return   ele.Price>=mip })
                  setarr(cc)
                  }
                  if( brnd==""&&catgry==""&&mip==""&&mxp!=""&&sa==""){
                    var cc=Products.filter((ele)=>{
                      return  ele.Price<=mxp  })
                    setarr(cc)
                    }
                    if( brnd==""&&catgry==""&&mip==""&&mxp==""&&sa!=""){
                      var cc=Products.filter((ele)=>{
                        return ele.productname_.includes(sa) })
                      setarr(cc)
                      }
//////////////////////////////////////////////////////////////////////////////////////////////////////
if( brnd!=""&&catgry==""&&mip==""&&mxp!=""&&sa!=""){
  var cc=Products.filter((ele)=>{
    return  ele.Brand==brnd &&  ele.Price>=mip &&  ele.Price<=mxp && ele.productname_.includes(sa) })
  setarr(cc)
  }
  if( brnd!=""&&catgry==""&&mip!=""&&mxp!=""&&sa!=""){
    var cc=Products.filter((ele)=>{
      return  ele.Brand==brnd &&  ele.Price<=mxp  && ele.productname_.includes(sa) })
    setarr(cc)
    }
    
    




    }
    var kesava=(ele)=>{
        // cart.push(ele);
        // var cartDummy=[]
        // cartDummy.push(ele)
        setCart([...cart,ele])
        // console.log(ele)
    }
      

   const toggleBtn=()=>{

    setCartdis(!cartdis);
   }
     return (
    <div >
      <div className='row' onClick={toggleBtn}><Header/></div>
      {cartdis?<Carts kn={cart}/>:''}
      <div className='row'><Hello/></div>
    <div style={{marginLeft:'320px'}}>      
        Brand:<select id='kc' onChange={hello1}>
        <option value="">---Select---</option>
        <option value="Samsung">Samsung</option>
        <option value="LG">LG</option>
        <option value="Nokia">Nokia</option>
        <option value="Lenevo">Lenevo</option>
        <option value="Panasonic">Panasonic</option>
        <option value="Sony">Sony</option>
        <option value="Intel">Intel</option>
        <option value="Apple">Apple</option>
        <option value="Microsoft">Microsoft</option>
        <option value="Toshiba">Toshiba</option>
        <option value="One-plus">One-plus</option>
        <option value="Hitachi">Hitachi</option>
        <option value="Huawei">Huawei</option>
        <option value="Voltes">Voltes</option>
        <option value="Ecil">Ecil</option>
        <option value="Vivo">Vivo</option>
        <option value="Nikon">Nikon</option>
        <option value="Lee">Lee</option>
        <option value="Nike">Nike</option>
        <option value="Puma">Puma</option>
        <option value="Allen-Solly">Allen-Solly</option>
        <option value="Gucci">Gucci</option>
        <option value="Louis-Vuitton">Louis-Vuitton</option>
 </select>
 
 
        Category:<select id='aa' onChange={hello1}>
        <option value="">---Select---</option>
        <option value="Fashion">Fashion</option>
        <option value="Winter-Wear">Winter-Wear</option>
        <option value="Foot-Wear">Foot-Wear</option>
        <option value="Accessories">Accessories</option>
        <option value="Electronic">Electronic</option>
     
       
 </select>
        Min-Price:<select id='dd' onChange={hello1}>
        <option value="">---Select---</option>
        <option value="1000">1000</option>
        <option value="1500">1500</option>
        <option value="2000">2000</option>
        <option value="2500">2500</option>
        <option value="3000">3000</option>
     
       
 </select>
        Max-Price:<select id='kk' onChange={hello1}>
        <option value="">---Select---</option>
        <option value="5000">5000</option>
        <option value="15000">15000</option>
        <option value="40000">40000</option>
        <option value="50000">50000</option>
        <option value="70000">70000</option>
     </select>
     <input type='text' placeholder='Search Here' id='ss' onChange={hello1}/>
     
     </div>



 

                       <div style={ammu} ><h1>{arr.length}   -Items-Fetched</h1></div>

                         {arr.map((ele)=><div style={kanna}>
                                                    <p>{ele.productname_}</p>
                                                    <img src={ele.images} height='90px' width='220px'/> 
                                                    <p>{ele.Brand}</p>
                                                    <p>{ele.id}</p>
                                                    <p>{ele.Category}</p>
                                                    <p>{ele.Price}</p>
                                                    <button className='btn btn-primary' onClick={()=>{
                                                    kesava(ele)}}>Add-To-Cart</button>
                                                    
                                                    </div>)}
                                                    
                                                  


    </div>
  );
}

export default App;
