const careers = () => {
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
    let head0 = document.createElement("h1");
    let head1 = document.createElement("h1");
    let p0h0 = document.createElement("p")
    let p1h0 = document.createElement("p")
    let p2h0 = document.createElement("p")
    let p0h1 = document.createElement("p")
    let sMedia0 = document.createElement("a");
    let sMedia1 = document.createElement("a");
    let sMedia2 = document.createElement("a");
    let footer = document.createElement("footer");
// adding content to each element
        // headings
        head0.textContent = `Contact Us!`;
        head1.textContent = `Timing`;

        // paras
        p0h0.innerHTML = `Fancy our Restaurant?, come and visit us at: <a href="#">FakeLocation</a>`;
        p1h0.innerHTML = `Or hit us up at out number : <span class="num">+1-444-555-777</span>`;
        p2h0.textContent = `Or visit our Social Media Accounts:-`;
        p0h1.textContent = `Our Restaurant is open 24/7, just come and visit us anytime you like!`;

        // smedia links
        sMedia0.textContent = `FaceBook`;
        sMedia1.textContent = `Instagram`;
        sMedia2.textContent = `Twitter`;
        sMedia0.href = "#";
        sMedia1.href = "#";
        sMedia2.href = "#";
        sMedia0.classList.add("socialMedia");
        sMedia1.classList.add("socialMedia");
        sMedia2.classList.add("socialMedia");

        // footer
        footer.textContent = "THIS IS A PROGRAMMING ASSIGNMENT AND NOT A REAL RESTAURANT";
        footer.classList.add("disclaimer");

    // appending each element to the section
    section.appendChild(head0);
    section.appendChild(p0h0);
    section.appendChild(p1h0);
    section.appendChild(p2h0);
    section.appendChild(sMedia0);
    section.appendChild(sMedia1);
    section.appendChild(sMedia2);
    section.appendChild(head1);
    section.appendChild(p0h1);
    section.appendChild(footer);
    section.id = "contactUs"

    // appending to the DOM
    mainContent.appendChild(section);
    mainContent.id = "mainContent";
    mainContent.style.display = "block";
    content.appendChild(mainContent);
}

export default careers;