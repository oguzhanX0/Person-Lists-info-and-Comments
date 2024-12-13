const urlParams = new URLSearchParams(window.location.search);
let allUserId = urlParams.get('userId');

try{
if(!allUserId){
    allUserId = prompt('Please enter a UserID between 1 and 10')
}
if( allUserId === "" || allUserId < 0 || allUserId > 10 || isNaN(allUserId)){
        throw Error("Please enter a UserID between 1 and 10")
    } 

allUserId = Number(allUserId)
}catch(error){
    console.log(error);
    alert("Geçerli bir ID giriniz");
    throw error
}



const getUser = async() => {
    try{
	const getUser = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${allUserId}`);
    const data = await getUser.json();
    const cardContain = document.getElementById("PeopleCards2")
    AllCards(cardContain,data)
    }catch(err){
        console.log("Hata Varrrr:" + err);
    }

};

getUser()



function AllCards(cardContain,data){ 
    const Html =  data.map( datas => 
      `<div class="allContacts">
          <ul class="list-group">
            ${"<b class='Head'>UserID</b>"}
              <li class="list-group-item">${"<b>ID :</b>"} ${datas.userId}</li>
            ${"<b class='Head'>Id</b>"}</li>
              <li class="list-group-item">${"<b>ID :</b>"} ${datas.id}</li>
               ${"<b class='Head'>Title</b>"}</li>
              <li class="list-group-item">${"<b>Title :</b>"} ${datas.title}</li>
              ${"<b class='Head'>Body</b>"}</li>
              <li class="list-group-item">${"<b>Body :</b>"} ${datas.body}</li>
          </ul>
      </div>`).join(" ")
      
      cardContain.innerHTML = Html;
  }

  



