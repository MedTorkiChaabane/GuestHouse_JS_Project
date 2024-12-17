//1-signup client (signup.html)
function signup(){
    //récuperation des données
    var fName=document.getElementById("firstName").value;
    var isNameValid=checkLength(fName,3);
    errorMessage(isNameValid,'fNameError',"First Name should be at least 3 caracters!");
    /********************************************************************* */
    var lName=document.getElementById("lastName").value;
    var islNameValid=checkLength(lName,4);
    errorMessage(islNameValid,'lNameError',"Last Name should be at least 4 caracters!");
    
    /********************************************************************* */
    var email=document.getElementById("email").value;
    var findedMail= checkEmail(email);
    errorMessage(!findedMail,'emailError',"Email already used");
   
    /********************************************************************* */
    var psw=document.getElementById("password").value;
    var isPswValid=checkLength(psw,6);
    errorMessage(isPswValid,'pswError',"Password should be at least 6 caracters!");
    
    /********************************************************************* */
    var cPsw=document.getElementById("confirmPassword").value;
    var isConfirmPsw=isEqual(psw,cPsw);
    errorMessage(isConfirmPsw,'cPswError',"Passwords doesn't match!");
    
    /********************************************************************* */
    var tel=document.getElementById("tel").value;
    var isTelValid=checkPhone(tel,8);
    errorMessage(isTelValid,'telError',"Phone must have 8 numbers!");
    if(isNameValid && islNameValid && isPswValid && isConfirmPsw && isTelValid && !findedMail){
   //create user object
   var usersTab=JSON.parse(localStorage.getItem("users") || "[]");//declaration avant la creation de l'iobjet parce l'id demande usersTab
   var user = {
    id:generateId(usersTab)+1,  
    fName:fName, 
    lName:lName,
    email:email,
    psw:psw,
    cPsw:cPsw,
    tel:tel,
    role:"client"
    };

usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
location.replace('login.html');
    }
}  
//a-function pour vérifier longueur d'une chaine
function checkLength(ch,nb){
    return(ch.length>=nb);
}
//b-function pour vérifier que la chaine 1 et la même que la chaine 2
function isEqual (ch1,ch2){
      return(ch1==ch2);
}
//c-function pour vérifier le numéro de tel 
function checkPhone(value,n){
      return(value.length==n);
}
//d-function qui compare deux numeros verifier price et nights
function isMoreThan(n1,n2){
      return(Number (n1)>n2);
} 
//e-function qui incrimente l'id automatiquement
function generateId(T){
      var max;
      if(T.length==0){
          max=0;
      }
      else {
          max=T[0].id;
          for(var i=1; i<T.length; i++){
              if(T[i].id>max){
                  max=T[i].id;
              }
          }
      }
     
    return max;
}
//f-fonction qui vérifie si l''email existe déja
function checkEmail(ch){
      var usersTab=JSON.parse(localStorage.getItem('users') || "[]");
      var findedUser=null;
      
      //vérification email 
      for(var i=0; i<usersTab.length; i++){
          if((usersTab[i].email==ch) ){
              findedUser=usersTab[i];
              break;
          }
          
      }
      return findedUser;
     
  
}
//g- remplace JSON.parse(localStorage.getItem(key) '[]');
function getKeyFromLS(key){
  return(JSON.parse(localStorage.getItem(key) || "[]"));
}
//h- fonction qui affiche un message s'il ya une erreur de saisie
function errorMessage(valid,id,msg){
      if(!valid){
          document.getElementById(id).innerHTML=msg;
          document.getElementById(id).style.color='red';
      }
      else {
          document.getElementById(id).innerHTML="";
      }
  
}
  
//2- function to register Owner (signupOwner.html)
function signupOwner(){
    //récuperation des données
    var fName=document.getElementById("firstNameOwner").value;
    var isNameValid=checkLength(fName,3);
    errorMessage(isNameValid,'fNameErrorOwner',"First Name should be at least 4 caracters!");
    /********************************************************************* */
    var lName=document.getElementById("lastNameOwner").value;
    var islNameValid=checkLength(lName,4);
    errorMessage(isNameValid,'lNameErrorOwner',"Last Name should be at least 4 caracters!");
  
    /********************************************************************* */
    var email=document.getElementById("emailOwner").value;
    var findedMail= checkEmail(email);
    errorMessage(!findedMail,'emailErrorOwner',"Email already used");
   
    /********************************************************************* */
    var psw=document.getElementById("passwordOwner").value;
    var isPswValid=checkLength(psw,6);
    errorMessage(isPswValid,'pswErrorOwner',"Password should be at least 6 caracters!");
    
    /********************************************************************* */
    var cPsw=document.getElementById("confirmPasswordOwner").value;
    var isConfirmPsw=isEqual(psw,cPsw);
    errorMessage(isConfirmPsw,'cPswErrorOwner',"Passwords doesn't match");
    
    var addressValue=document.getElementById("addressOwner").value;
    var isAddressValid=checkLength(addressValue,6);
    errorMessage(isAddressValid,'addressErrorOwner',"Address should be at least 6 caracters!");
    /********************************************************************* */
    var tel=document.getElementById("telOwner").value;
    var isTelValid=checkPhone(tel,8);
    errorMessage(isTelValid,'telErrorOwner',"Phone must have 8 numbers!");
  
    if(isNameValid && islNameValid && isPswValid && isConfirmPsw && isTelValid && !findedMail && isAddressValid){
   //create user object
   var usersTab=JSON.parse(localStorage.getItem("users") || "[]");//declaration avant la creation de l'iobjet parce l'id demande usersTab
   var user = {
    id:generateId(usersTab)+1,
    fName:fName, 
    lName:lName,
    email:email,
    psw:psw,
    cPsw:cPsw,
    address:addressValue,
    tel:tel,
    role:"owner",
    status:"NOK"
    };
//Save into LS
usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
location.replace('login.html');
    }
}

//3- function to register admin (signupAdmin.html)
function signupAdmin(){
    //récuperation des données
    var fName=document.getElementById("firstNameAdmin").value;
    var isNameValid=checkLength(fName,3);
    errorMessage(isNameValid,'fNameAdminError',"First Name should be at least 3 caracters!");
    /********************************************************************* */
    var lName=document.getElementById("lastNameAdmin").value;
    var islNameValid=checkLength(lName,4);
    errorMessage(islNameValid,'lNameAdminError',"Last Name should be at least 4 caracters!");
    
    /********************************************************************* */
    var email=document.getElementById("emailAdmin").value;
    var findedMail= checkEmail(email);
    errorMessage(!findedMail,'emailAdminError',"Email already used");
   
    /********************************************************************* */
    var psw=document.getElementById("passwordAdmin").value;
    var isPswValid=checkLength(psw,6);
    errorMessage(isPswValid,'PswAdminError',"Password should be at least 6 caracters!");
    
    /********************************************************************* */
    var cPsw=document.getElementById("confirmPasswordAdmin").value;
    var isConfirmPsw=isEqual(psw,cPsw);
    errorMessage(isConfirmPsw,'cPswAdminError',"Passwords doesn't match!");
    
    /********************************************************************* */
    var tel=document.getElementById("telAdmin").value;
    var isTelValid=checkPhone(tel,8);
    errorMessage(isTelValid,'telAdminError',"Phone must have 8 numbers!");
    if(isNameValid && islNameValid && isPswValid && isConfirmPsw && isTelValid && !findedMail){
   //create user object
   var usersTab=JSON.parse(localStorage.getItem("users") || "[]");//declaration avant la creation de l'iobjet parce l'id demande usersTab
   var user = {
    id:generateId(usersTab)+1,
    fName:fName, 
    lName:lName,
    email:email,
    psw:psw,
    cPsw:cPsw,
    tel:tel,
    role:"admin"
    };
//Save into LS
usersTab.push(user);
localStorage.setItem('users',JSON.stringify(usersTab));
location.replace('login.html');
    }
}

//4- function to login after verification of email & pwd (login.html)
function login(){
    
    //récupeération des données
    var emailValue=document.getElementById("email").value;
    var pswValue=document.getElementById("password").value;
    //récupération du tableau de la BD.
    var usersTab=JSON.parse(localStorage.getItem('users') || "[]");
    //Initialisation findedUser
    var findedUser=null;
    
    //vérification email & psw et parcours du tableau userTab
    for(var i=0; i<usersTab.length; i++){
        if((usersTab[i].email==emailValue) && (usersTab[i].psw==pswValue)){
            findedUser=usersTab[i];
            break; //si on la condition est vérifiée on récupére userTab[i] et on arrête la recherche
        }
        
    }
    //si findedUser différent de nulle cad exist on récupére l'id et on passe à la page index.html.
    if(findedUser){ 
        if(findedUser.role=="client"){ //user trouvé client
            localStorage.setItem('connectedUserId', findedUser.id);//Récuperer l'id user pour créer une session.
            location.replace('displayHouses.html');
        
        }else if(findedUser.role=="owner"){ //user trouvé store
            if(findedUser.status=="NOK"){
                document.getElementById("loginError").innerHTML="Account not yet verified";
                document.getElementById("loginError").style.color="red";
            }
            else{
            localStorage.setItem('connectedUserId', findedUser.id);//Récuperer l'id user pour créer une session.
            location.replace('addHouse.html');
            }
        }
        else{
            localStorage.setItem('connectedUserId', findedUser.id);//Récuperer l'id user pour créer une session.
            location.replace('admin.html');
        }
       
    }
    else {
        document.getElementById('loginError').innerHTML="Please check email or psw !";
        document.getElementById('loginError').style.color='red';
    }

}

//5- function to add House (addHouse.html)
function addHouse(){
    //récuperation des données
    var houseName=document.getElementById("houseName").value;
    var isHouseNameValid=checkLength(houseName,4);
    errorMessage(isHouseNameValid,"houseNameError","House Name should be at least 4 caracters!");
   //******************************************************************* */
    var country=document.getElementById("houseCountry").value;
    var isHouseCountryValid=checkLength(country,4);
    errorMessage(isHouseCountryValid,"houseCountryError","Country should be at least 4 caracters!");
    //******************************************************************* */
    var place=document.getElementById("housePlace").value;
    var isHousePlaceValid=checkLength(place,4);
    errorMessage(isHousePlaceValid,"housePlaceError","place should be at least 6 caracters!");
    //******************************************************************* */
    var description=document.getElementById("houseDescription").value;
    var isHouseDescriptionValid=checkLength(description,10);
    errorMessage(isHousePlaceValid,"houseDescriptionError","place should be at least 10 caracters!");
   
    var connectedUserId=localStorage.getItem('connectedUserId');
    if(isHouseNameValid && isHouseCountryValid && isHousePlaceValid && isHouseDescriptionValid){  //if all condition are valid create object and save into DB.
  
    var housesTab=JSON.parse(localStorage.getItem("houses") || "[]");
    //création de l'objet product
    var house = {
    id:generateId(housesTab)+1,
    houseName:houseName, 
    country:country,
    place:place,
    description:description,
    idOwner:connectedUserId
};

//Save into LS
housesTab.push(house);
localStorage.setItem('addedHouseId',JSON.stringify(house.id));
localStorage.setItem('houses',JSON.stringify(housesTab));
location.replace("addRooms.html");
   }
}

//6- function to add room (addRoom.html)
function addRoom(){
    //récuperation des données
    var roomName=document.getElementById("roomName").value;
    var isRoomNameValid=checkLength(roomName,4);
    errorMessage(isRoomNameValid,"roomNameError","Room Name Sould be at least 4 caracters!");
   //******************************************************************* */
    var surface=document.getElementById("roomSurface").value;
    var isRoomSurfaceValid=isMoreThan(surface,4);
    errorMessage(isRoomSurfaceValid,"roomSurfaceError","Surface should be more than 4 m²!");
   //******************************************************************* */
    var price=document.getElementById("roomPrice").value;
    var isRoomPriceValid=isMoreThan(price,0);
    errorMessage(isRoomPriceValid,"roomPriceError","Price should be more than 0!");
    //******************************************************************* */
    var nights=document.getElementById("roomNights").value;
    var isRoomNightsValid=isMoreThan(nights,10);
    errorMessage(isRoomNightsValid,"roomNightsError","Nights should be more than 10!");
    //******************************************************************* */
    var category=document.getElementById("roomCategory").value;   
    var addedHouseId=localStorage.getItem('addedHouseId');
    if( isRoomSurfaceValid && isRoomPriceValid && isRoomNightsValid ){  //if all condition are valid create object and save into DB.
  
    var roomsTab=JSON.parse(localStorage.getItem("rooms") || "[]");
    //création de l'objet Room
    var room = {
    id:generateId(roomsTab)+1,
    roomName:roomName,
    surface:surface, 
    price:price,
    nights:nights,
    category:category,
    idHouse:addedHouseId
};

//Save into LS
roomsTab.push(room);
localStorage.setItem('rooms',JSON.stringify(roomsTab));
location.reload();
   }
}

//7- function to display all Houses save in element (displayHouses.html)
function displayHouses(){
    var housesTab=JSON.parse(localStorage.getItem('houses') || '[]');
    var content='';
    for (var i=0; i<housesTab.length;i++){
        //utilisation des backtick `` (retour à la ligne , utilisation des variables)
        content=content+`
        <div class="col-md-4 " style="padding-top: 2%;">
        
            
                <div  id="houseDescriptions" class="image">
                    <img src="images/${i+1}.jpg" class="img-responsive" alt="image" style="width:500px; height:250px;">
                    <h3 style="text-align:center;">${housesTab[i].houseName}</h3><br>
                    <h4 id="houseDetail">Country: ${housesTab[i].country}</h4><br>
                    <h4 id="houseDetail">Place: ${housesTab[i].place}</h4><br>
                    <h4 id="houseDetail">Description: ${housesTab[i].description}</h4><br>
                    <button   id="but3" type="submit" value="submit" class="book-now-btn" onclick="goToDisplayedHouse(${housesTab[i].id})" >More info</button>
                
                </div>
    
       
        </div>
    <div class="clear"></div>
    `;

    }
    document.getElementById('houseDiv').innerHTML=content;
}
//7-a function save displayedHouseId and go to displayHouseRooms.html (displayHouses.html onclick)
function goToDisplayedHouse(id){
    localStorage.setItem('displayedHouseId',id)
    
    location.replace('displayHouseRooms.html');
}
//9- fonction qui affiche d'une façon dynamique les rooms d'une house sélectionnée.(displayHouseRooms.html)
function displayHouseRooms(){
    var displayedHouseId=localStorage.getItem('displayedHouseId');
    var roomsTab=JSON.parse(localStorage.getItem('rooms') || '[]');
    var content='';
    var j=0;
    for (var i=0; i<roomsTab.length;i++){
        //utilisation des backtrick `` (retour à la ligne , utilisation des variables)
        
        if(roomsTab[i].idHouse==displayedHouseId){
            
            j=j+1;
        content=content+`
        <div class="col-md-4 " style="padding-top: 2%;">
        
            
                <div id="houseDescriptions" class="image">
                    <img id="imageRoom" src="images/r${j}.png" class="img-responsive" alt="image" >
                    <div id="houseDetail"><label for="house"> House: </label> ${searchObj(roomsTab[i].idHouse,'houses').houseName}</div>
                    <div id="houseDetail"><label for="surf"> Room: </label> ${roomsTab[i].roomName} </div>
                    <div id="houseDetail"><label for="surf"> Surface: </label> ${roomsTab[i].surface} m²</div>
                    <div id="houseDetail"><label for="price"> price: </label><span id="displayHouseRoomsPrice"> ${roomsTab[i].price}<span> DT</div>
                    <div id="houseDetail"><label for="cat"> Category: </label> ${roomsTab[i].category}</div>
                    <div>
                         
						</div>
                        <button  id="but3" type="submit" value="submit" class="book-now-btn" onclick="goToDisplayedRoom(${roomsTab[i].id})" >Display</button>
                
                     </div>
    
       
                </div>
    <div class="clear"></div>
    `;
        }
    }
    document.getElementById('roomsDiv').innerHTML=content;
   

}
//9-a function save displayedRoomId and to bookRoom.html (displayHouseRooms.html onclick)
function goToDisplayedRoom(id){
    localStorage.setItem('displayedRoomId',id)
    
    location.replace('bookRoom.html');
}

//10- function qui retourne un objet cherché selon son id and key (utiliser dans plusieurs pages)
function searchObj(id,key){
    var T=JSON.parse(localStorage.getItem(key) || '[]');
    var findedObj=null;
    for(var i=0; i<T.length;i++){
    if(T[i].id==id){
        findedObj=T[i];
        break;
    }
}
return findedObj;
}

//11- function display selected room to book (bookRoom.html)
function displayedSelectedRoom(){
    var displayedRoomId=localStorage.getItem('displayedRoomId');
    var findedRoom=searchObj(displayedRoomId,'rooms');
    document.getElementById('house').innerHTML=searchObj(findedRoom.idHouse,'houses').houseName;
    document.getElementById('roomName').innerHTML=findedRoom.roomName;
    document.getElementById('surf').innerHTML=findedRoom.surface;
    document.getElementById('price').innerHTML=findedRoom.price;
    document.getElementById('cat').innerHTML=findedRoom.category;
}

//12- fonction permet de faire le booking (bookRoom.html onclick)
function bookRoom(){
    var displayedRoomId=localStorage.getItem('displayedRoomId');
    var findedRoom=searchObj(displayedRoomId,'rooms');
    var userId=localStorage.getItem('connectedUserId')
    var qty=document.getElementById('qty').value;
    if(Number(qty)>0 && Number(qty) <= findedRoom.nights){
    var ordersTab=JSON.parse(localStorage.getItem('orders') || '[]');
    //Creation d'objet
    var order={
        id:generateId(ordersTab)+1,
        userId:userId,
        roomId:displayedRoomId,
        qty:qty
    }
    ordersTab.push(order);
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    updateStock(displayedRoomId,Number(qty));
    location.replace('basket.html');
    }
    else if(Number(qty)<0) {
    document.getElementById('qtyError').innerHTML="Unvalid quantity!";
    document.getElementById('qtyError').style.color="red";
    }else{
        document.getElementById('qtyError').innerHTML="Number of nights not available!";
        document.getElementById('qtyError').style.color="red";
    }
}

//12-a function permet le mise à jour du stock(nights) après le booking (bookRoom.html)
function updateStock(id,qty){
    var roomsTab=JSON.parse(localStorage.getItem('rooms')||'[]');
    for(var i=0; i<roomsTab.length; i++){
        if(roomsTab[i].id==id){
            roomsTab[i].nights=roomsTab[i].nights-qty;
            break;
        }
    }
    localStorage.setItem('rooms',JSON.stringify(roomsTab));
}

//13- Fonction qui affiches les commande d'un client (basket.html)
function displayMyOrders(){
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var cUserId=localStorage.getItem('connectedUserId'); 
    var content='';
    var totalSum=0;
    var myOrdersTab=[];
    for(var i=0; i<ordersTab.length;i++){
        
        if(ordersTab[i].userId==cUserId){
            myOrdersTab.push(ordersTab[i]);
        }
    }
    for(var i=0; i<myOrdersTab.length;i++){
        totalSum=totalSum+ myOrdersTab[i].qty*searchObj(myOrdersTab[i].roomId,"rooms").price;
        content=content+`
        <tr>
        <td>
          ${myOrdersTab[i].id}
        </td>
        <td>
          ${searchObj(searchObj(myOrdersTab[i].roomId,"rooms").idHouse,"houses").houseName}
        </td>
        <td>
        ${searchObj(myOrdersTab[i].roomId,"rooms").roomName}
        </td>
        <td>
          ${searchObj(myOrdersTab[i].roomId,"rooms").category}
        </td>
        <td>
          ${searchObj(myOrdersTab[i].roomId,"rooms").price}
        </td>
        <td>
          ${myOrdersTab[i].qty}
        </td>
        <td>
          ${myOrdersTab[i].qty*searchObj(myOrdersTab[i].roomId,"rooms").price}
        </td>
        <td><button class="btn btn-warning" onclick="deleteOrder(${myOrdersTab[i].id})">CANCEL</button>
        
        </td>
        
    </tr>`;
        }
    
    content=content+`<tr><td>  </td><td>  </td><td></td><td></td><td></td><td style="text-align:right;">Total Order : </td><td>${totalSum}</td><td><button class="btn btn-success" onclick="goToPayPage()">Pay Now</button></td><tr>`;
    document.getElementById("orderDiv").innerHTML=content;
}
//13-a Fonction qui supprime une commande et faire le mise à jour du stock (basket.html)
function deleteOrder(id){
    var ordersTab=JSON.parse(localStorage.getItem('orders') || '[]');
    var pos=searchOrderPositionById(id);
    var order=searchObj(id,'orders');
    var roomsTab=getKeyFromLS('rooms');
    for(var i=0;i<roomsTab.length;i++){
        if(roomsTab[i].id==ordersTab[pos].roomId){
            roomsTab[i].nights=Number(roomsTab[i].nights)+Number(order.qty);
            break;
        }

    }
    ordersTab.splice(pos,1);
    localStorage.setItem('rooms', JSON.stringify(roomsTab));
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    location.reload();
}
//13-b Fonction qui retourne la position d'un élement dans un tableau selon son id
function searchOrderPositionById(id){
    var position;
    var ordersTab=JSON.parse(localStorage.getItem('orders') || '[]');
    for(var i=0; i<ordersTab.length;i++){
        if(ordersTab[i].id==id){
            position=i;
            break;
        }
    }
    return position;
}
//13-c Fonction qui affiche la page pay.html (basket.html)
function goToPayPage(){
    location.replace("pay.html");
}

//14- Fonction qui affiche tout les maisons pour l'admin (dashboard admin admin.html)
function displayAdminHouses(){  
    housesTab=getKeyFromLS("houses");
    var content='';
    for(var i=0; i<housesTab.length; i++){
        content=content+`
        <tr>
          <td > ${housesTab[i].id}</td>
          <td >${housesTab[i].houseName}</td>
          <td >${housesTab[i].country}</td>
          <td >${housesTab[i].place}</td>
          <td >${searchObj(housesTab[i].idOwner,'users').fName} ${searchObj(housesTab[i].idOwner,'users').lName}</td>
          <td >
                <button class="btn btn-danger" onclick="deleteHouseByAdmin(${i})">delete</button>
         </td>
		</tr>
        

        `;
    }
    document.getElementById("adminHousesDiv").innerHTML=content;
}

//14-a Fonction qui supprime une maison selon son position i (dashboard admin admin.html) 
function deleteHouseByAdmin(pos){
    var housesTab=getKeyFromLS('houses');
    var roomsTab=getKeyFromLS('rooms');
    for(var i=0;i<roomsTab.length;i++){
        if(roomsTab[i].idHouse==housesTab[pos].id)
        {
            roomsTab.splice(i,1);
            i--;
        }
    }
    localStorage.setItem('rooms',JSON.stringify(roomsTab));
    housesTab.splice(pos,1);
    localStorage.setItem('houses',JSON.stringify(housesTab));
    location.reload();
}

//15- Fonction qui affiche tout les chambres  (dashboard admin admin.html)
function displayAdminRooms(){
    roomsTab=getKeyFromLS("rooms");
    var content='';
    for(var i=0; i<roomsTab.length; i++){
        content=content+`
        <tr>
          <td > ${roomsTab[i].id}</td>
          <td > ${searchObj(searchObj(searchObj(roomsTab[i].id,'rooms').idHouse,'houses').idOwner,'users').id}</td>
          <td > ${searchObj(searchObj(searchObj(roomsTab[i].id,'rooms').idHouse,'houses').idOwner,'users').fName} ${searchObj(searchObj(searchObj(roomsTab[i].id,'rooms').idHouse,'houses').idOwner,'users').lName}</td>
          <td > ${searchObj(searchObj(roomsTab[i].id,'rooms').idHouse,'houses').houseName}</td>
          <td >${roomsTab[i].roomName}</td>
          <td >${roomsTab[i].price}</td>
          <td >${roomsTab[i].category}</td>
          <td >${roomsTab[i].nights}</td>
          <td >
                <button class="btn btn-success" onclick="goToDisplayedRoomAdmin(${roomsTab[i].id})">Display</button>
                <button class="btn btn-warning" onclick="updateRoomByAdmin(${roomsTab[i].id})">Update</button>
                <button class="btn btn-danger" onclick="deleteRoomByAdmin(${i})">delete</button>
         </td>
		</tr>
        

        `;
    }
    document.getElementById("adminRoomsDiv").innerHTML=content;
}
//15-a Fonction qui supprime une maison selon son position i (dashboard admin admin.html) 
function deleteRoomByAdmin(pos){
    var roomsTab=getKeyFromLS('rooms');
    roomsTab.splice(pos,1);
    localStorage.setItem('rooms',JSON.stringify(roomsTab));
    location.reload();
}
//15-b Fonction qui affiche les information d'un formulaire après clique sur le boutton update  (dashboard admin admin.html)
function updateRoomByAdmin(id){
    var room=searchObj(id,'rooms');    
    var form=`
    <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div class="col-md-12 form-group">
                                    <input type="number" class="form-control" id="newPrice" value=${room.price}  >
                                </div>	
    
                                <div class="col-md-12 form-group">
                                    <input type="number" class="form-control" id="newNights" value=${room.nights}  >
                                </div>
                                
                    
                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="btn btn-success" onclick="validateEditRoom(${room.id})">Validate</button>
                                    
                                </div>
                            </div>
    `;
    
    
    
        document.getElementById('formulaireDiv').innerHTML=form;
}
//15-c Fonction pour modifier le nombre de nuit et le prix d'une chambre  (dashboard admin admin.html)
function validateEditRoom(id){
    var newPrice=document.getElementById('newPrice').value;
    var newNight=document.getElementById('newNights').value;
    var roomsTab=getKeyFromLS('rooms');
    for(var i=0;i<roomsTab.length;i++){
        if(roomsTab[i].id==id){
            roomsTab[i].price=newPrice;
            roomsTab[i].nights=newNight;
            break;
        }
    }
localStorage.setItem('rooms', JSON.stringify(roomsTab));
location.reload();
}
//15-d Fonction qui affiche la chambre d'une commande (dashboard admin admin.html)
function goToDisplayedRoomAdmin(id){
    localStorage.setItem('displayedRoomId',id)
    
    location.replace('bookRoomAdmin.html');
}
//16- Function qui affiche tout les utilisateurs  (dashboard admin admin.html) 
function displayAdminUsers(){
    var usersTab=getKeyFromLS("users");
    var search=document.getElementById("searchValue").value;
    var content='';
    if(!search){
    for(var i=0; i<usersTab.length; i++){
        if(usersTab[i].role!="admin"){
            if(usersTab[i].status=="NOK"){
        content=content+`
        <tr>
         <td>${usersTab[i].id}</td>
         <td>${usersTab[i].fName}</td>
         <td>${usersTab[i].lName}</td>
         <td>${usersTab[i].email}</td>
         <td>${usersTab[i].tel}</td>
         <td>${usersTab[i].role}</td>
         <td>${usersTab[i].status}</td>
         <td>
                    <button class="btn btn-warning" onclick="validateUserByAdmin(${usersTab[i].id})">Validate</button>
                    <button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})">delete</button>
         </td>
		</tr>
        

        `}
        else {
            content=content+`
        <tr>
         <td>${usersTab[i].id}</td>
         <td>${usersTab[i].fName}</td>
         <td>${usersTab[i].lName}</td>
         <td>${usersTab[i].email}</td>
         <td>${usersTab[i].tel}</td>
         <td>${usersTab[i].role}</td>
         <td>${usersTab[i].status}</td>
         <td>
                   
                    <button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})">delete</button>
         </td>
		</tr>`
        }
        }
    }
    } else{
    for(var i=0; i<usersTab.length; i++){
        if(usersTab[i].fName==search || usersTab[i].email==search || usersTab[i].tel==search|| usersTab[i].role==search){
        if(usersTab[i].role!="admin"){
            if(usersTab[i].status=="NOK"){
        content=content+`
        <tr>
         <td>${usersTab[i].id}</td>
         <td>${usersTab[i].fName}</td>
         <td>${usersTab[i].lName}</td>
         <td>${usersTab[i].email}</td>
         <td>${usersTab[i].tel}</td>
         <td>${usersTab[i].role}</td>
         <td>${usersTab[i].status}</td>
         <td>
                    <button class="btn btn-warning" onclick="validateUserByAdmin(${usersTab[i].id})">Validate</button>
                    <button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})">delete</button>
         </td>
		</tr>
        

        `}
        else {
            content=content+`
        <tr>
         <td>${usersTab[i].id}</td>
         <td>${usersTab[i].fName}</td>
         <td>${usersTab[i].lName}</td>
         <td>${usersTab[i].email}</td>
         <td>${usersTab[i].tel}</td>
         <td>${usersTab[i].role}</td>
         <td>${usersTab[i].status}</td>
         <td>
                   
                    <button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})">delete</button>
         </td>
		</tr>`
        }
        }
    }
}
    }
    document.getElementById("adminUsersDiv").innerHTML=content;
}
//16-a Function qui supprime un utilisateur selon son id (dashBoard admin admin.html)
function deleteUserByAdmin(id){
    var users=getKeyFromLS("users");
    var position;
    for(var i=0; i<users.length;i++){
        if(users[i].id==id){
            position=i;
        }
    }
    users.splice(position,1);
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}
//16-b Fonction qui donne accès au propriétaire 'NOK'-->'OK' (dashBoard admin admin.html)
function validateUserByAdmin(id){
    var users=getKeyFromLS('users');
    for(var i=0; i<users.length;i++){
        if(users[i].id==id){
            users[i].status='OK';
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}
//17- Function qui affiche tout les orders pour l'admin (dashBoard admin admin.html)  
function displayAdminOrders(){
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var content='';
    var totalSum=0;
    for(var i=0; i<ordersTab.length;i++){
        totalSum=totalSum+ ordersTab[i].qty*searchObj(ordersTab[i].roomId,"rooms").price;
        content=content+`
        <tr>
        <td>
          ${ordersTab[i].id}
        </td>
        <td>
          ${searchObj(ordersTab[i].userId,"users").fName }  ${searchObj(ordersTab[i].userId,"users").lName}
        </td>
        <td>
          ${searchObj(ordersTab[i].userId,"users").email}
        </td>
        <td>
          ${searchObj(searchObj(ordersTab[i].roomId,"rooms").idHouse,"houses").houseName}
        </td>
        <td>
        ${searchObj(ordersTab[i].roomId,"rooms").roomName}
      </td>
        <td>
          ${searchObj(ordersTab[i].roomId,"rooms").category}
        </td>
        <td>
          ${ordersTab[i].qty}
        </td>
        <td>
          ${searchObj(ordersTab[i].roomId,"rooms").price}
        </td>
        
        <td>
        ${ordersTab[i].qty*searchObj(ordersTab[i].roomId,"rooms").price}
        </td>
        
    </tr>`;
   
    }
    content=content+`<tr><td>  </td><td></td><td></td><td></td><td></td><td></td><td></td><td style="text-align:right;">Total Order : </td><td>${totalSum}</td><tr>`;
    document.getElementById("adminOrdersDiv").innerHTML=content;
}

//18- Fonction qui affiche les maisons d'un propriétaire, elle permet aussi l'ajout d'une chambre ou la supprission d'une maison (owner.html)
function displayOwnerHouses(){
    var housesTab=getKeyFromLS("houses");
    var connectedUserId=localStorage.getItem('connectedUserId');
    var content='';
    for(var i=0;i<housesTab.length;i++){
        if(housesTab[i].idOwner==connectedUserId){
            content=content+`
            <tr>
              <td> ${housesTab[i].id}</td>
              <td>${housesTab[i].houseName}</td>
              <td>${housesTab[i].country}</td>
              <td>${searchObj(housesTab[i].idOwner,'users').fName} ${searchObj(housesTab[i].idOwner,'users').lName}</td>
             
              <td>
              <button class="btn btn-success" onclick="addRoomsByOwner(${housesTab[i].id})">Add Room</button>
                    <button class="btn btn-danger" onclick="deleteHouseByAdmin(${i})">delete</button>
             </td>
            </tr>
            
    
            `;

        }
    }
    document.getElementById("ownerHousesDiv").innerHTML=content;
}
//18-a Fonction qui permet l'ajout d'une chambre (Dashboard Owner owner.html)
function addRoomsByOwner(idHouse){
 localStorage.setItem("addedHouseId",idHouse);
 location.replace("addRooms.html");
}
//19- Fonction qui affiche les chambres d'un propriètaire (Dashboard Owner owner.html)
function displayOwnerRooms(){
    var roomsTab=getKeyFromLS("rooms");
    var connectedUserId=localStorage.getItem('connectedUserId');
    var myRooms=[];
    for(var i=0; i<roomsTab.length;i++){
        if(searchObj(roomsTab[i].idHouse,'houses').idOwner==connectedUserId){
            myRooms.push(roomsTab[i]);
        }
    }
    var content='';
    for(var i=0; i<myRooms.length; i++){
        content=content+`
        <tr>
          <td> ${myRooms[i].id}</td>
          <td>${myRooms[i].roomName}</td>
          <td>${myRooms[i].surface}</td>
          <td>${myRooms[i].price}</td>
          <td>${myRooms[i].nights}</td>
          <td>${searchObj(myRooms[i].idHouse,'houses').houseName}</td>
          <td>
                <button class="btn btn-warning" onclick="updateRoomByAdmin(${myRooms[i].id})">Update</button>
                <button class="btn btn-danger" onclick="deleteRoomByAdmin(${searchPositionById(myRooms[i].id,'rooms')})">delete</button>
         </td>
		</tr>
        

        `;
    }
    document.getElementById("ownerRoomsDiv").innerHTML=content;
}
//19-a Fonction qui recherche l'indice d'un élément dans un tableau
function searchPositionById(id,key){
    var position;
    var T=JSON.parse(localStorage.getItem(key) || '[]');
    for(var i=0; i<T.length;i++){
        if(T[i].id==id){
            position=i;
            break;
        }
    }
    return position;
}

//20- Fonction qui affiche les orders d'un Owner (Dashboard Owner owner.html)
function displayOwnerOrders(){
    var roomsTab=getKeyFromLS("rooms");
    var connectedUserId=localStorage.getItem('connectedUserId');
    var myRooms=[];
    for(var i=0; i<roomsTab.length;i++){
        if(searchObj(roomsTab[i].idHouse,'houses').idOwner==connectedUserId){
            myRooms.push(roomsTab[i]);
        }
    }
    var ordersTab=getKeyFromLS("orders");
    var myOrders=[];
    for(var i=0; i<myRooms.length;i++){
        for(var j=0;j<ordersTab.length; j++){
            if(myRooms[i].id==ordersTab[j].roomId){
                myOrders.push(ordersTab[j]);
            }
        }

    }
    var content='';
    var total=0;
    for(var i=0; i<myOrders.length; i++){
        total=total+myOrders[i].qty*searchObj(myOrders[i].roomId,"rooms").price;
        content=content+`
        <tr>
       
        <td>${myOrders[i].id}</td>
        <td>${myOrders[i].roomId}</td>
        <td>${searchObj(searchObj(myOrders[i].roomId,"rooms").idHouse,'houses').houseName}</td>
        <td>${searchObj(myOrders[i].roomId,"rooms").roomName}</td>
        <td>${searchObj(myOrders[i].roomId,"rooms").price}</td>
        <td>${ordersTab[i].qty}</td>
        <td>${myOrders[i].qty*searchObj(myOrders[i].roomId,"rooms").price}</td>
        
		</tr>
        `;
    }
    document.getElementById("ownerOrdersDiv").innerHTML=content+`<tr><td></td><td></td><td></td><td></td><td></td><td style="text-align:right;">Total Order : </td><td>${total}</td><tr>`;
}

//20- Fonction qui efface le connectedUserId pour faire le logOut (header LOG OUT)
function logout(){
    localStorage.removeItem('connectedUserId');
    location.replace("index.html");
 }

//21- Fonction qui recherche une maison selon le nom ou le pays ou le place(searchHouse.html)
 function searchHouse(){
    var searchValue=document.getElementById('searchHouse').value;
    var findedHouses=[];
    var findedRooms=[];
    var houses=getKeyFromLS('houses');
    var rooms=getKeyFromLS('rooms');
    for(var i=0;i<houses.length;i++){
        if(houses[i].houseName==searchValue || houses[i].country==searchValue || houses[i].place==searchValue){
            findedHouses.push(houses[i]);
        }
    }
    for(var i=0;i<rooms.length;i++){
        if(rooms[i].category==searchValue ){
            findedRooms.push(rooms[i]); 
        }
    }
     findedRooms=sortByPrice(findedRooms);

    var content='';
   
    if(findedHouses.length){
        for (var i=0; i<findedHouses.length;i++){
        content=content+`
        <div class="col-md-4 " style="padding-top: 2%;">
        
            
        <div id="houseDescriptions" class="image">
            <img src="images/${i+1}.jpg" class="img-responsive" alt="image" style="width:500px; height:250px;">
            <div id="houseDetail">
            <h3><a>${findedHouses[i].houseName}</a></h3><br>
            <h4>Country: ${findedHouses[i].country}</h4><br>
            <h4>Place: ${findedHouses[i].place}</h4><br>
            <h4>Description: ${findedHouses[i].description}</h4><br>
            <button  id="but3" type="submit" value="submit" class="book-now-btn" onclick="goToDisplayedHouse(${findedHouses[i].id})" >More Info</button>
            </div>
        </div>


      </div>
     <div class="clear"></div>
    
       `;
    }
    document.getElementById("searchDiv").innerHTML=content;
    }else if(findedRooms.length){
        for (var i=0; i<findedRooms.length;i++){
            content=content+`
            <div class="col-md-3 " style="padding-top: 2%;">
            
                
            <div id="houseDescriptions" class="image">
                <img src="images/r${i+1}.png" class="img-responsive" alt="image" style="width:500px; height:250px;">
                <div id="houseDetail">
                <h3><a>House:${searchObj(findedRooms[i].idHouse,'houses').houseName}</a></h3><br>
                <h3><a>Country:${searchObj(findedRooms[i].idHouse,'houses').country}</a></h3><br>
                <h3><a>Room:${findedRooms[i].roomName} </a></h3><br>
                <h3><a>Price:<span id="displayHouseRoomsPrice">${findedRooms[i].price} DT</span></a></h3><br>
                <h4>Category: ${findedRooms[i].category}</h4><br>
                
                <button id="but3"  type="submit" value="submit" class="book-now-btn" onclick="goToDisplayedRoom(${findedRooms[i].id})" >DISPLAY</button>
                </div>
            </div>
    
    
    </div>
    <div class="clear"></div>
        
        `;
      }
    document.getElementById("searchDiv").innerHTML=content;
    }
    else
    {
     document.getElementById("searchDiv").innerHTML=`<div style="text-align:center; color:red;"> no results for the search "${searchValue}"! Please enter valid input!</div>`;
    }
 }

//21-a Fonction qui permet le tri d'un tableau d'objet selon le critère de prix
function sortByPrice(T){
    
    return(T.sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1)));
    
}

//22- fonction qui génère un header dynamique (tout les pages)
function generateHeader(){
    var connectedUserId=localStorage.getItem('connectedUserId');
    var content='';
    var connectedUserId= searchObj(connectedUserId,'users');
    if(connectedUserId){
        //user is connected
        if(connectedUserId.role=="client"){
        content=`
        
        <li><a  data-hover="Home" href="index.html" ><span>Home</span></a></li>
        <li><a data-hover="Houses"  href="displayHouses.html"><span>Houses</span></a></li>
        <li><a data-hover="Basket"  href="basket.html"><span>BASKET</span></a></li>
        <li><a data-hover="Search"  href="searchHouse.html"><span>Search</span></a></li>
        <li><a data-hover="Contact"  href="contact.html"><span>Contact</span></a></li>
        <li><a data-hover="Profile" href="profile.html"><span id="userColor">Hi: ${connectedUserId.fName} ${connectedUserId.lName}</span></a></li>
        <li><a data-hover="LOG OUT" onclick="logout()"><span>LOG OUT</span></a></li>
       `
        }else if(connectedUserId.role=="owner"){
            content=`
            <li><a  data-hover="Home" href="index.html" ><span>Home</span></a></li>
            <li><a data-hover="ADD HOUSE"  href="addHouse.html"><span>Add House</span></a></li>
            <li><a data-hover="DashBoard Owner"  href="owner.html"><span>DashBoard Owner</span></a></li>
            <li><a data-hover="Contact"  href="contact.html"><span>Contact</span></a></li>
            <li><a data-hover="Profile" href="profile.html"><span id='userColor'> Hi: ${connectedUserId.fName} ${connectedUserId.lName}</span></a></li>
            <li><a data-hover="LOG OUT" onclick="logout()"><span>LOG OUT</span></a></li>`
        }else{
            content=`
            <li><a  data-hover="Home" href="index.html" ><span>Home</span></a></li>
            <li><a data-hover="DashBoard Admin"  href="admin.html"><span>DashBoard Admin</span></a></li>
            <li><a data-hover="Contact"  href="contact.html"><span>Contact</span></a></li>
            <li><a data-hover="Profile" href="profile.html"><span id="userColor"> Hi: ${connectedUserId.fName} ${connectedUserId.lName}</span></a></li>
            <li><a data-hover="LOG OUT" onclick="logout()"><span>LOG OUT</span></a></li>`
        }
    }  
    else{
        //user is not connected
        content=`
        <ol>
        <li><a  data-hover="Home" href="index.html" ><span>Home</span></a></li>
        <li><a data-hover="Contact"  href="contact.html"><span>Contact</span></a></li>
        <li><a  data-hover="SIGN UP Client" href="signup.html"><span>SiGN UP Client</span></a>  <a data-hover="SIGN UP Owner" href="signupOwner.html"><span>SIGN UP Owner</span></a> </li>
        <li><a data-hover="LOG IN"  href="login.html"><span>LOG IN</span></a></li>`
		
    }
    document.getElementById('headerId').innerHTML=content;
}

//23- affiche le profile de connectedUser (profile.html)
function displayProfileConnectedUser(){
    userId=getKeyFromLS('connectedUserId');
    connectedUser=searchObj(userId,'users');
    var form=`
    <div><h3 id="profileFName">First Name:${connectedUser.fName} <span id="profileFNameDiv"></span> </h3></div><br>
    <div><h3 id="profileFName">Last Name: ${connectedUser.lName}  <span id="profileLNameDiv"></span> </h3></div><br>
    <div> <h3 id="profileFName">Telephone: ${connectedUser.tel} <span id="profileTelDiv"></span></h3></div><br>
    <div> <h3 id="profileFName">Email: ${connectedUser.email} <span id="profileEmailDiv"></span> </h3></div><br>
    <button id="but3" type="submit" value="submit" class="btn btn-primary" onclick="editProfile(${userId})">Edit Profile</button>
    <div id="editProfile"></div>`
 
    document.getElementById('formulaireDiv').innerHTML=form;
}

//23-a Fonction qui affiche les information d'un formulaire après clique sur le boutton EDIT PROFILE  (profile.html)
function editProfile(id){
    var connectedUser=searchObj(id,'users');   
  
    
    var form=`
    <div class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                <div class="col-lg-12 form-group">
                                     
                                    <input type="text" class="form-control" id="newFName" value="${connectedUser.fName}">
                                </div>	
    
                                <div class="col-lg-12 form-group">
                                    <input type="text" class="form-control" id="newLName" value="${connectedUser.lName}" >
                                </div>
                                <div class="col-lg-12 form-group">
                                <input type="number" class="form-control" id="newTel" value=${connectedUser.tel} >
                                </div>
                                <div class="col-lg-12 form-group">
                                <input type="text" class="form-control" id="newEmail" value="${connectedUser.email}" >
                                </div>
                               


                                <div class="col-lg-12 form-group">
                                    <button id="but3" type="submit" value="submit" class="btn btn-primary" onclick="validateEdit(${connectedUser.id})">Validate</button>
                                    
                                </div>
                            </div>
    `;
    
    
    
        document.getElementById('formulaireDiv').innerHTML=form;
}

//23-b Fonction pour modifier les informations d'un utilisateur  (profile.html)
function validateEdit(id){
    var newFName=document.getElementById('newFName').value;
    var newLName=document.getElementById('newLName').value;
    var newTel=document.getElementById('newTel').value;
    var newEmail=document.getElementById('newEmail').value;
    var usersTab=getKeyFromLS('users');
    for(var i=0;i<usersTab.length;i++){
        if(usersTab[i].id==id){
            usersTab[i].fName=newFName;
            usersTab[i].lName=newLName;
            usersTab[i].tel=newTel;
            usersTab[i].email=newEmail;
            break;
        }
    }
localStorage.setItem('users', JSON.stringify(usersTab));
location.reload();
}

//24- Fonction qui affiche une facture d'un client
function myOrdersPay(){
    var ordersTab=JSON.parse(localStorage.getItem('orders')||'[]');
    var cUserId=localStorage.getItem('connectedUserId');
    var connectedUser=searchObj(cUserId,'users'); 
    var content='';
    var totalSum=0;
    var myOrdersTab=[];
    for(var i=0; i<ordersTab.length;i++){
        
        if(ordersTab[i].userId==cUserId){
            myOrdersTab.push(ordersTab[i]);
        }
    }
    for(var i=0; i<myOrdersTab.length;i++){
        totalSum=totalSum+ myOrdersTab[i].qty*searchObj(myOrdersTab[i].roomId,"rooms").price;
        content=content+`
        <tr>
      
        <td>
          ${searchObj(searchObj(myOrdersTab[i].roomId,"rooms").idHouse,"houses").houseName}
        </td>
        <td>
        ${searchObj(myOrdersTab[i].roomId,"rooms").roomName}
        </td>
        <td>
          ${searchObj(myOrdersTab[i].roomId,"rooms").category}
        </td>
        <td>
          ${searchObj(myOrdersTab[i].roomId,"rooms").price}
        </td>
        <td>
          ${myOrdersTab[i].qty}
        </td>
        <td>
          ${myOrdersTab[i].qty*searchObj(myOrdersTab[i].roomId,"rooms").price}
       
    </tr>`;
        }
    
    content=content+`<tr><td>  </td><td></td><td></td><td></td><td style="text-align:right;">Total : </td><td id="purchaseTotal">${totalSum} DT</td><td></td><tr>`;
    document.getElementById("orderDiv").innerHTML=content;
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hour=date.getHours();
    min=date.getMinutes();
    sec= date.getSeconds();
    document.getElementById("purchaseDate").innerHTML=day + "/" + month + "/" + year+" "+hour+":"+min+":"+sec;
    
    document.getElementById("idInvoice").innerHTML=day+""+month+""+year+""+hour+""+min+""+sec;
    document.getElementById("userName").innerHTML=connectedUser.fName +' '+ connectedUser.lName;
    document.getElementById("userMail").innerHTML=connectedUser.email;
    document.getElementById("userTel").innerHTML=connectedUser.tel;
}

