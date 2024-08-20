


document.getElementById("search-btn").addEventListener("click", (event) => {
    
  const inputValue = document.getElementById("search-bar").value;
  console.log(inputValue);
  document.getElementById("search-bar").value = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
            .then(res=>res.json())
            .then((data)=>{displayMeals(data)}
                );
})



const displayMeals=(items)=>{
    
    const Maincontainer=document.getElementById("main-container");
    Maincontainer.innerHTML="";
    
        items.meals.forEach((item)=>{
            console.log(item)
            const div=document.createElement("div");
            div.classList.add("maincontainerdiv");
            div.classList.add("col-lg-3","col-md-6","col-sm-12");
            div.innerHTML=`<h1 class="food-nm" id="food nm" >${item.strMeal}</h1>
                            <img class="food-img" id="food-img" src=${item.strMealThumb}></img>`;
            Maincontainer.appendChild(div);
        })
    
   
      
    
   
}




