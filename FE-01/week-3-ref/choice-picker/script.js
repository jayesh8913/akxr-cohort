const textarea= document.getElementById('textarea');
const tag_element= document.getElementById('tags');

textarea.focus();               // this will automatically focus the cursor onthis

textarea.addEventListener('keyup',(e)=>{            // keyup gets triggered whenever the key is pressed down then up sort of
    createtags(e.target.value)

    if(e.key === 'Enter'){                              // whenever enter is hit , it will empty the textarea 
        setTimeout(()=>{
            e.target.value = ''
        },10);

        Randomselect();
    }
})                          

function createtags(input){
    const tags= input.split(",").filter(tag=>tag.trim() !== '').map(tag => tag.trim())             // the filter will only get rid of the empty tags the map will get rid of the extra spaces in the tag

   tag_element.innerHTML='';

   tags.forEach(tag => {
    const tag_element1 = document.createElement('span');
    tag_element1.classList.add('tag');
    tag_element1.innerText=tag;
    tag_element.appendChild(tag_element1)
   });
}




function Randomselect(){
   let times = 30
    const interval =setInterval(()=>{           // causes shifting  
        const randomtag=pickrandomtag()
        highlight(randomtag)

        setTimeout(()=>{
            unhighlight(randomtag)
        },100)
    },100);

    setTimeout(()=>{
        clearInterval(interval);        // to stop the continuation of highlighting and unhighlighting

        setTimeout(()=>{
            const randomTag = pickrandomtag();
            highlight(randomTag);                   // finally stop at that tag
        },100)
    },times*100)
}

function pickrandomtag(){
    const tags =document.querySelectorAll('.tag') // class tag
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlight(tag){
    tag.classList.add('highlight');
}


function unhighlight(tag){
    tag.classList.remove('highlight');
}