import './App.css'

/*
SWIGGY CLONE 
will have 4 things *
* Hea
 - search bar
 - cards
 
*footer
  - self explanatory
*/

const Header = ()=>{
  return <div className='header'>
    <div className='logo'>
      <img src='../public/image.png'></img>
    </div>
    <div className='nav_items'>
      <ul>
        <li>home</li>
        <li>item</li>
        <li>sdfkc</li>
      </ul>
    </div>
  </div>
}

const Card = ()=>{
  return (<div className='res-card' style={{backgroundColor:"#f0f0f0"}}>
    <img className='res-logo' src='https://imgs.search.brave.com/Zt9SLvlHn25rgU0bwOgh8TTn3fdMowRv8LKQw0FBtyA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQy/ODQwOTUxNC9waG90/by9hLW1hbGUtY2hl/Zi1zZXJ2aW5nLWEt/ZmluZS1kaW5pbmct/ZGlzaC1pbi1hLXJl/c3RhdXJhbnQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPU9L/MGxBQ2JLdG82b2lP/amc1eGdVeFkyZlBT/OEN0VDNmWDlIaEsy/bnRRLU09'
     alt='res-logo'></img>
    <h3>suppppppppppp</h3>
  </div>)
}

const Body =()=>{
  return (
    <div className='body'>
      <div className='search'>
        search
      </div>
      <div className='res-container'>
        <Card/>
      </div>
    </div>
  )
}

function App() {

  return (
   <div className='app'>
    <Header/>
    <Body></Body>
   </div>
  )
}

export default App
