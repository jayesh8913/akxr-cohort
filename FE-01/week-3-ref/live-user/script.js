const result = document.getElementById('result');
const filter = document.getElementById('filter')

const list_items = [];
getdata()

filter.addEventListener('input',(e)=>filterData(e.target.value))

function filterData(searched_item){
    list_items.forEach(item=>{
        if(item.innerText.toLowerCase().includes(searched_item.toLowerCase())){
            item.classList.remove('hide')                                                   // go to the last css element to understand hide class 
        } else {
            item.classList.add('hide')
        }
    })

}

async function getdata(){
    const res = await fetch('https://randomuser.me/api?results=50');

    const {results} = await res.json();          // get only the result array of the res
     //console.log(results)
    // clear results each time while we get data else it appends to the list causing redundancy
    result.innerHTML=''

    results.forEach(user => {
       // console.log(user)
       const li= document.createElement('li');

       list_items.push(li);

       li.innerHTML= `
       <img src="${user.picture.large}" alt ="${user.name.first}">
       <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city},${user.location.state}, ${user.location.country}</p>
       </div>
       `

       result.appendChild(li)
    });

}

getdata()