const initialPageLoad = () => {
    const container = document.getElementById("content");
    const title = document.createElement("div");
    title.innerText = "This Restaurant";
    container.appendChild(title);
    const img = document.createElement("img");
    img.src = "https://bakingamoment.com/wp-content/uploads/2020/03/IMG_7844-chocolate-babka.jpg";
    container.appendChild(img);
}
export default initialPageLoad