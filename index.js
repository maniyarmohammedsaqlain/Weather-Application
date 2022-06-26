const btn1=document.getElementById('btn1')
const city=document.getElementById("city")
const invalidtext= document.getElementById("invalidtext")
const btn2=document.getElementById('btn2')
const rload=document.getElementById("relaod")
const infol=document.getElementById("infol")
let api;
let apikey="e7daf56a6e2172f83136bba32f78b538"
function valdw(){
    if(city.value!=""){
        requestapi(city.value)
    }
    if(city.value==""){
        invalidtext.innerHTML="*****Please Enter Valid City*****"
    }
}
function requestapi(_cityname){
    api=`https://api.openweathermap.org/data/2.5/weather?q=${_cityname}&appid=${apikey}`
    fetchdata()
}
function weatherdetails(info){
    const a= new Date()
    const b=a.getDate()
    const c=a.getMonth()+1
    const d=a.getFullYear()
    const e=a.getHours()
    const f=a.getMinutes()
    if(info.cod==404){
        invalidtext.innerText="*****invalid city*****"
    }
    else{
        invalidtext.innerText=" "
        document.getElementById("info0").innerText=info.name
        document.getElementById("info11").innerText=info.weather[0].description
        document.getElementById("info2").innerText=Math.round(info.main.temp-273.5)
        document.getElementById("info3").innerText=info.main.humidity
        document.getElementById("info4").innerText=info.wind.speed
    }
    if(document.getElementById("infol").innerText=info.sys.country!="IN"){
        document.getElementById("infol").innerText=info.sys.country
        document.getElementById("info5").innerText="-"
    }
    else{
        document.getElementById("infol").innerText=info.sys.country
        document.getElementById("info5").innerText=b+"/"+c+"/"+d
    }
}
function loction(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSucess,onError);
    }else{
        alert("your browser does not supports location")
    }
}
function onSucess(position){
    const{latitude,longitude}=position.coords
    api=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`
    fetchdata()
}
function fetchdata(){
    fetch(api)
    .then((data)=>{
        return data.json()
    }).then((finaldata)=>{
        weatherdetails(finaldata)
    }).catch((error)=>{
        alert(error)
    })
}
function onError(error){
    alert("unable to fetch data")
}
rload.addEventListener("click",()=>{
    location.reload()
})










// const gfd=document.getElementById("h2tag")
// const btn=document.getElementById("btn")
// const btn2=document.getElementById("btn2")
// const gfd2=document.getElementById("h2tag2")
// let aaa;
// let error;
// fetch('https://api.covid19api.com/summary').then((apidata)=>{
//     return apidata.json()
// }).then((actualdata)=>{
//     btn.addEventListener("click",()=>{
//         aaa=actualdata.Countries[76].NewConfirmed
//         gfd.innerText=aaa
//     })
//     btn2.addEventListener('click',()=>{
//         bbb=actualdata.Global.TotalConfirmed
//         gfd2.innerText=bbb
//     })
// }).catch((error)=>{
//     alert("unabale to fetch data")
// })



// fetch('https://api.covid19api.com/summary').then( (data)=>{
//     return data.json()
// }).then((datafinal)=>{
//     console.log(datafinal);
// }).catch((error)=>{
//     alert("maniyarmohammedsaqlain unable to fetch data")
// }) gy