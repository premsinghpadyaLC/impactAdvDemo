document.addEventListener("DOMContentLoaded", function() {
    // Your existing code here
    
    document.getElementById("ad")?.addEventListener("click", function() {
        const clickData = {
            publisherId: "publisher123",
            adId: "ad456",
            timestamp: new Date().toISOString(),
            sessionId: Math.random().toString(36).substr(2, 9), 
        };
        localStorage.setItem("clickData", JSON.stringify(clickData));  

        window.location.href = "advertiser.html?sessionId=" + clickData.sessionId;
    });

    document.getElementById("purchaseButton")?.addEventListener("click", function() {
        const urlParams = new URLSearchParams(window.location.search);
        const sessionId = urlParams.get("sessionId");

        const clickData = JSON.parse(localStorage.getItem("clickData"));

        if (clickData && clickData.sessionId === sessionId) {
            console.log("Click data validated", clickData);
        }

        const purchaseData = {
            sessionId: sessionId,
            productId: "product789",
            purchaseAmount: 199.99,
            timestamp: new Date().toISOString(),
        };

        console.log("Purchase event logged:", purchaseData);

        setTimeout(function() {
            alert("Purchase successful! Thank you for your order.");
        }, 500);
    });
});
