let main=document.getElementById("number")

console.log("body")
let resturent=[
    {name:"piza hunt",ratings:"4",delivery:"30-35mnts",location:"marathahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/490629b70f89da8a5b93fc199ece335e"},
    {name:"chinese work",ratings:"4",delivery:"25-30mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"},
    {name:"McDonald's",ratings:"4.3",delivery:"25-30mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/f137c72d-1472-4bfc-b59d-3c1eae1d2cb2_237665.jpg"},
    {name:"KFC",ratings:"4.2",delivery:"25-30mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/8ba01310-e5b7-4a90-bef3-98a10bc91238_736494.JPG"},
    {name:"burger king",ratings:"4.3",delivery:"30-35mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"},
    {name:"Domino's pizza",ratings:"4.2",delivery:"25mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8"},
    {name:"Subway",ratings:"4.2",delivery:"30-35mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552"},
    {name:"chaayos chai+snacks=relax",ratings:"4.4",delivery:"25-30mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_581367.JPG"},
    {name:"Wendy's",ratings:"4.1",delivery:"30-35mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f1aa621021a2826088089b89842d4e7c"},
    {name:"samosa party",ratings:"4.3",delivery:"30-35mnts",location:"marthahalli",Image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/thzhbierhb2qxhqsl0bo"},
]
   
  resturent.map((a)=>{
    let body=document.createElement("div")

    let photo=document.createElement("img")
    body.appendChild(photo)
    photo.setAttribute("src" ,a.Image)
     let heading=document.createElement("h1")
     body.appendChild(heading)
     heading.innerHTML=a.name
     let para=document.createElement("p")
     body.appendChild(para)
     para.innerHTML="⭐"+a.ratings
     let delivery=document.createElement("p")
     body.appendChild(delivery)
     delivery.innerHTML="🕛"+a.delivery
     let location=document.createElement("p")
     body.appendChild(location)
     location.innerHTML="📍"+a.location
     
     
    body.style.border="1px solid gray"
    body.style.width="300px"
    body.style.height="400px"
    body.style.boxShadow="rgb(38, 57, 77) 0px 20px 30px -10px";
    body.style.borderRadius="10px"
    body.style.margin="20px 10px"
    body.style.padding="20px 30px"
    main.appendChild(body)
    
    photo.style.width="100%" 
    photo.style.height="200px"
    photo.style.objectFit="cover"
    photo.style.borderRadius="10px"

  })
