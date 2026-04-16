document.getElementById("load-btn").addEventListener("click", async () => {

    document.getElementById("status").innerText = "Loading...";

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data Loaded");
            } else {
                reject("Error Loading Data");
            }
        }, 2000);
    });

    promise
        .then((data) => {
            document.getElementById("status").innerText = data;
        })
        .catch((error) => {
            document.getElementById("status").innerText = error;
        })
        .finally(() => {
            console.log("Loading Completed"); // don't overwrite UI
        });

});
  