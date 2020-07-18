const menu = () => {
    //Cache the DOM sections
    let body = document.querySelector("body")
    let content = document.querySelector("#content");
    let oldMain = document.querySelector("#mainContent")
    if (oldMain){
        content.removeChild(oldMain);
    }

    // creating Elements
    let mainContent = document.createElement("div");
    let section = document.createElement("section");
    
    let menu1box = document.createElement("div");
    let menu1name = document.createElement("h1");
    let menu1desc = document.createElement("p");
    let menu1img = document.createElement("img");
    let menu2box = document.createElement("div");
    let menu2name = document.createElement("h1");
    let menu2desc = document.createElement("p");
    let menu2img = document.createElement("img");
    let menu3box = document.createElement("div");
    let menu3name = document.createElement("h1");
    let menu3desc = document.createElement("p");
    let menu3img = document.createElement("img");

    let footer = document.createElement("footer");
// adding content to each element
        // headings
        menu1name.textContent = `POLEBURGER - Å 10.00`;
        menu2name.textContent = `PENGUIN CLUB - Å 7.00`;
        menu3name.textContent = `COD ICEFISH FILLET -Å 7.00`;

        // paras
        menu1desc.textContent = `Locally sourced seal, frozen tomatoes, camerilzed onions, mushrooms, and avocado slices on an crisp butter lettuce wrap.`;
        menu2desc.textContent = `Hand-filleted marinated penguin breast, green leaf lettuce, frozen tomatoes, crisp walrus bacon, avocado & mayo, served on crisp butter lettuce wrap.`;
        menu3desc.textContent = `Line-caught, sushi-grade Cod Icefish steak with a teriyaki glaze, crisp shredded lettuce, fresh tomatoes & tartar sauce.`;

        //images
        menu1img.src = "./img/POLEBURGER.jpg";
        menu2img.src = "./img/PENGUIN CLUB.jpg"
        menu3img.src = "./img/COD ICEFISH FILLET.jpg"

        //classes & styles
        menu1box.classList.add("card" , "text-white", "bg-secondary", "m-3");
        menu1name.classList.add("card-title", "mb-3");
        menu1desc.classList.add("card-text");
        menu2box.classList.add("card" , "text-white", "bg-secondary", "m-3");
        menu2name.classList.add("card-title", "mb-3");
        menu2desc.classList.add("card-text");
        menu3box.classList.add("card" , "text-white", "bg-secondary", "m-3");
        menu3name.classList.add("card-title", "mb-3");
        menu3desc.classList.add("card-text");

        menu1img.style.width = "100%";
        menu2img.style.width = "100%";
        menu3img.style.width = "100%";

        menu1box.style.maxWidth = "600px";
        menu2box.style.maxWidth = "600px";
        menu3box.style.maxWidth = "600px";

    // appending each element to the section
    section.appendChild(menu1box);
    menu1box.appendChild(menu1name);
    menu1box.appendChild(menu1desc);
    menu1box.appendChild(menu1img);
    section.appendChild(menu2box);
    menu2box.appendChild(menu2name);
    menu2box.appendChild(menu2desc);
    menu2box.appendChild(menu2img);
    section.appendChild(menu3box);
    menu3box.appendChild(menu3name);
    menu3box.appendChild(menu3desc);
    menu3box.appendChild(menu3img);
    section.id = "menu"

    // appending to the DOM
    mainContent.appendChild(section);
    mainContent.id = "mainContent";
    mainContent.style.display = "block";
    content.appendChild(mainContent);
}
export default menu;