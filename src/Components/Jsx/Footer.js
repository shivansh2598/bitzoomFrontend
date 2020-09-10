import React , {Component} from 'react'
import '../Css/footer.css'
class Footer extends Component
{
    render()
    {
        return(
            <div className='foot'>
             <span style={{marginTop:'1px', fontSize:'15px',textDecoration:'none'}}>
                 Special Thanks To :-<span style={{color:'red'}}> Divyansh Jamuar bhaiya & Sushant bhaiya </span>
                 <br/>
                 A project made by team void naim ( members :-<span style={{color:'red'}}> Angel, Rahul, Shivansh & Suvid  </span>).
             </span>
            <a href='https://www.facebook.com/profile.php?id=100008331427652' ><i className="fa fa-facebook-square" style={{fontsize:'100px',color:'red', marginLeft:'10px'}}></i></a>
            <a href='https://www.linkedin.com/in/shivansh-sinha-633124171/' ><i className="fa fa-linkedin" style={{fontsize:'100px',color:'red', marginLeft:'10px'}}></i></a> 
            </div>       
        )
    }
}
export default Footer