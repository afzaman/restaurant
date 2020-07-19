const contact = () => {
    let content = document.querySelector("#content");
    content.innerHTML = "";

    let contactForm = document.createElement("div");
    contactForm.classList.add('jumbotron') 
    const html = (`<form>
                        <fieldset>
                        <legend>Contact Us</legend>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleTextarea">Comments and Questions</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                        </div>
                        <fieldset class="form-group">
                            <div class="form-check">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" value="" checked="">
                                Please send me interesting info about South Pole Keto.
                            </label>
                            </div>
                        </fieldset>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </fieldset>
                    </form>`);
    contactForm.innerHTML = html;
    content.appendChild(contactForm)
}
export default contact;