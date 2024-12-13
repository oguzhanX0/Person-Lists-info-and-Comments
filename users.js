const getUser = async() => {
    try{
	const getUser = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await getUser.json();
    const cardContain = document.getElementById("PeopleCards")
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
            <li class="list-group-item hood"><i class="fa-solid fa-circle-info iconteam"></i> 
            ${"<b>PERSONAL INFO</b>"}</li>
            <li class="list-group-item">${"<b>ID :</b>"} ${datas.id}</li>
            <li class="list-group-item">${"<b>Name :</b>"} ${datas.name}</li>
            <li class="list-group-item">${"<b>Username :</b>"} ${datas.username}</li>

            <li class="list-group-item hood"><i class="fa-solid fa-map-location-dot iconteam"></i> 
            ${"<b>ADDRESS</b>"}</li>
            <li class="list-group-item">${"<b>Street :</b>"} ${datas.address.street}</li>
            <li class="list-group-item">${"<b>City :</b>"} ${datas.address.city}</li>

            <li class="list-group-item hood"><i class="fa-solid fa-building iconteam"></i> 
            ${"<b>COMPANY</b>"}</li>
            <li class="list-group-item">${"<b>CompanyName :</b>"} ${datas.company.name}</li>
            <li class="list-group-item">${"<b>BS :</b>"} ${datas.company.bs}</li>

            <li class="list-group-item hood"><i class="fa-solid fa-address-card iconteam"></i> 
            ${"<b>CONTACT INFO</b>"}</li>
            <li class="list-group-item">${"<b>Phone :</b>"} ${datas.phone}</li>
            <li class="list-group-item">${"<b>Email :</b>"} ${datas.email}</li>
            <li class="list-group-item">${"<b>Website :</b>"} ${datas.website}</li>
        </ul>
    </div>`).join(" ")
    
    cardContain.innerHTML = Html;
}



