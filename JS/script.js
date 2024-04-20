const testimoneals = [
    {
        photoUrl:
            "https://images.unsplash.com/photo-1713480841832-119811c52783?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I recently had the pleasure of working with Job and I must say it was a life-changing experience.That guidance and support helped me to truly understand the importance of living life on my own terms.",
        name: "Histlar",
    },
    {
        photoUrl:
            "https://images.unsplash.com/photo-1713338018831-62f304267c26?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: " Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent neque arcu fermentum vitae mauris non tincidunt auctor mauris. In dignissim, mauris quis accumsan viverra, urna mauris commodo enim, et pellentesque leo enim a felis.",
        name: "MR. Egle",
    },
    {
        photoUrl:
            "https://images.unsplash.com/photo-1712992510624-3bb00e23fe76?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet nisi hendrerit, blandit ipsum eget, finibus justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed justo lorem. Donec varius.",
        name: "MR. Moon",
    },
    {
        photoUrl:
            "https://plus.unsplash.com/premium_photo-1713163890188-6807aa2641de?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Phasellus pellentesque sed dolor a efficitur. Suspendisse ut tellus tellus. Morbi pretium eros convallis turpis ullamcorper, ac eleifend est dapibus. Mauris quis hendrerit neque, vel volutpat nibh. Mauris quam neque, porttitor ac dignissim.",
        name: "MR. Earth",
    },
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userEl = document.querySelector(".user");

let index = 0;

function updeateSlider() {
    const { photoUrl, text, name } = testimoneals[index];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    userEl.innerText = name;
    index++;
    if (index === testimoneals.length) {
        index = 0;
    }
    setTimeout(function () {
        updeateSlider();
    }, 5000);
}

updeateSlider();
