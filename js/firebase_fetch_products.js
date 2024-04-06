


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi8BrtiEvWbKfM3hol928a0yxAazjfYRU",
    authDomain: "disha-website-34260.firebaseapp.com",
    projectId: "disha-website-34260",
    storageBucket: "disha-website-34260.appspot.com",
    messagingSenderId: "960292523570",
    appId: "1:960292523570:web:2cfa0938e00b74b486762b",
    measurementId: "G-XTC7KZW1DH"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(app);

// Function to fetch data from Firestore
async function fetchData() {
    const querySnapshot = await getDocs(collection(db, "services")); // Assuming your collection name is "services"
    querySnapshot.forEach(doc => {
        const data = doc.data();
        // Update the HTML elements with the fetched data
        const portfolioItem = document.createElement("li");
        portfolioItem.classList.add("grid-item", "selected", "digital", "transition-inner-all");
        portfolioItem.innerHTML = `
            <div class="portfolio-box" data-bottom-top="transform: translateY(40px)" data-top-bottom="transform: translateY(-40px)">
                <div class="portfolio-image bg-medium-gray border-radius-6px">
                    <a href="demo-web-agency-single-project-creative.html"><img src="images/assets/sign.png" alt="" /></a>
                </div>
                <div class="portfolio-caption pt-35px pb-35px md-pt-25px md-pb-25px">
                    <a href="demo-web-agency-single-project-creative.html" class="text-dark-gray text-dark-gray-hover fw-600">${data.service_name_one}</a>
                    <span class="d-inline-block align-middle w-10px separator-line-1px bg-light-gray ms-10px me-10px"></span>
                    <div class="d-inline-block">${data.service_name_two}</div>
                </div>
            </div>
        `;
        document.querySelector(".portfolio-wrapper").appendChild(portfolioItem);
    });
}

export { fetchData };

