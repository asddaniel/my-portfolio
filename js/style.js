

function getElement_transform(element){
   console.log(element)
   return {
    x:element.offsetLeft,
    scaleX:element.offsetWidth/100
   }
}
function getElement_transformY(element){
    
    return {
     y:element.offsetTop,
     scaleY:element.offsetHeight/100
    }
 }

function animate_items(element){
     const indicator = document.querySelector(".indicator");
     const property_transform = getElement_transform(element)
     indicator.style.setProperty('transform', 'translateX('+property_transform.x+'px) scaleX('+property_transform.scaleX+')')
     console.log(property_transform);

}
function animate_items1(element){
    const indicator = document.querySelector(".indicator-responsive");
    const property_transform = getElement_transformY(element)
    indicator.style.setProperty('transform', 'translateY('+property_transform.y+'px) ')
    console.log(property_transform);

}

let items = document.querySelector(".navbar-nav")
items.childNodes.forEach(element => {
    if(element.nodeType==1){
        element.addEventListener("click", (e)=>{
            // console.log(e)
            animate_items(e.target)
            animate_items1(e.target)
            // console.log(e)
        })
    }
});

const observer = new IntersectionObserver((entries)=>{
    
    for(const entry of entries){
        
            
            if(entry.isIntersecting){
                // entry.target.classList.add('apparaitre');
                let sticky = document.querySelectorAll(".sticky-text");
                let bars = document.querySelectorAll(".sticky-bar");
                bars.forEach(element => {
                    element.classList.remove("bg-blue");
                    element.classList.add("bg-white")
                });
                sticky.forEach(element => {
                    element.classList.remove("text-blue")
                    element.classList.add("text-white")
                });
               
                // console.log(entry.target)
            }else{
                let sticky = document.querySelectorAll(".sticky-text");
                sticky.forEach(element => {
                    element.classList.remove("text-white")
                    element.classList.add("text-blue")
                });

                let bars = document.querySelectorAll(".sticky-bar");
                bars.forEach(element => {
                    element.classList.remove("bg-white");
                    element.classList.add("bg-blue")
                });

            }
        
      
        //document.querySelector('.nav-bar').classList.toggle('inactive')
    }
}, {
    threshold: 0.25
})
observer.observe(document.querySelector("#projet"))






//hamburger menu

let dynamicIcon = document.querySelector(".nav-toggler")
let nav = document.querySelector(".nav-menu");
// let content = document.querySelector(".home");
dynamicIcon.addEventListener("click", function(e){
    dynamicIcon.classList.toggle('active');
    nav.classList.toggle("active");
    // content.classList.toggle("active");

})


const observer1 = new IntersectionObserver((entries)=>{
    
    for(const entry of entries){
        
            
            if(entry.isIntersecting){
                entry.target.classList.add('apparaitre');
                observer1.unobserve(entry.target)
                // let sticky = document.querySelectorAll(".sticky-text");
                // let bars = document.querySelectorAll(".sticky-bar");
                // bars.forEach(element => {
                //     element.classList.remove("bg-blue");
                //     element.classList.add("bg-white")
                // });
                // sticky.forEach(element => {
                //     element.classList.remove("text-blue")
                //     element.classList.add("text-white")
                // });
               
                // console.log(entry.target)
            }
        
      
        //document.querySelector('.nav-bar').classList.toggle('inactive')
    }
}, {
    threshold: 0.25
})
observer1.observe(document.querySelector("#nom"))
observer1.observe(document.querySelector("#description"))
observer1.observe(document.querySelector("#contact"))
observer1.observe(document.querySelector("#view"))
// observer1.observe(document.querySelector("#sticky-mail"))
// observer1.observe(document.querySelector("#sticky-link"))
observer1.observe(document.querySelector("#title-skills"))
for(let i=1; i<=9; i++){
    observer1.observe(document.querySelector("#skills-"+i));
}
observer1.observe(document.querySelector("#tech-title"))
for(i=1; i<=17; i++){
    observer1.observe(document.querySelector("#tech-"+i))
}
observer1.observe(document.querySelector("#design-multi"))
observer1.observe(document.querySelector("#project-title"))
observer1.observe(document.querySelector("#pj-1"))
observer1.observe(document.querySelector("#pj-2"))
observer1.observe(document.querySelector("#pj-3"))
observer1.observe(document.querySelector("#pj-4"))