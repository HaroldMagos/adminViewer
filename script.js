document.getElementById("access-button").addEventListener("click", function() {
    // Replace this URL with your Google Script deployed app URL
    const googleScriptURL = "https://script.google.com/macros/s/your_deployed_app_id/exec";
    window.location.href = googleScriptURL;
});
