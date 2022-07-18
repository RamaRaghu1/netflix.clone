import React ,{useEffect,useState}from 'react'
import "./Nav.css"

function Nav(){
    const [show, handleShow] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else {
                handleShow(false);
            }
        });
        
    },[]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
    <img
    className="nav__logo"
    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    alt='Netflix Logo'
    
    />
    <img
    className="nav__avatar"
    src="https://tse1.mm.bing.net/th?id=OIP.4l745LKOzMIKiNgqGO6cLQHaHa&pid=Api&P=0&w=167&h=167"
    alt='Avatar Logo'
    
    />

        

    </div>
  )
}

export default Nav