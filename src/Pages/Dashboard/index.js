import React,{useState} from 'react'
import './dashboard.scss'
import DisplayAllSops from '../../components/DisplayAllSops'
import ShowPromotion from '../../components/ShowPromotion';

function Dashboard() {
  const[tabs,setTabs]=useState(1)
    const toggleTab = (index) => {
        setTabs(index);
      };
  return (
    <div className="container">
            <div className="terms-condition">
                <h2  className={tabs === 1 ? "active-term-heading" : "tabs"}
          onClick={() => toggleTab(1)}>DashBoard</h2>
                <h2 className={tabs === 2 ? "active-term-heading" : "tabs"}
          onClick={() => toggleTab(2)}> Shops</h2>
                <h2  className={tabs === 3 ? "active-term-heading" : "tabs"}
          onClick={() => toggleTab(3)}>Pricing</h2>
                <h2  className={tabs === 4 ? "active-term-heading" : "tabs"}
          onClick={() => toggleTab(4)}>Promotions</h2>
            </div>

            {/*---------------- TAB 1 ------------------*/}
            <div   className={tabs === 1 ? "active-main-grid-terms" : "hide-element"} >
               
            <div className="main-grid-terms">
            <div className="main-textarea">
                <h1>DashBoard</h1>
                </div>
           </div>
            </div>
           

        {/*---------------- TAB 2 ------------------*/}
            <div   className={tabs === 2 ? "active-main-grid-terms" : "hide-element"}>
            <div className="main-grid-terms">
            <div className="main-textarea">
            <h1>Your Shops </h1>
              <DisplayAllSops />
              </div>
            </div>
            </div>

         {/*---------------- TAB 3 ------------------*/}
            <div  className={tabs === 3 ? "active-main-grid-terms" : "hide-element"}>
            <div className="main-grid-terms">
            <div className="main-textarea">
                <h1>Pricing</h1>
            </div>
            </div>
            </div>

             {/*---------------- TAB 4 ------------------*/}
            <div  className={tabs === 4 ? "active-main-grid-terms" : "hide-element"}>
            <div className="main-grid-terms">
             <div className="main-textarea">
                <h1>Your Promotions</h1>
                <ShowPromotion />
            </div>
            </div>
            </div>
            
        </div>
    )
}



export default Dashboard
