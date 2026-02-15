function loadChooseData() {
    fetch("./jsonData/whyChoose.json")
        .then(res => res.json())
        .then(data => {
            displayChooseData(data)
        })
}


const displayChooseData = (chooseData) => {

    const cartContainer = document.querySelector(".cart-container");

    cartContainer.innerHTML = "";

    chooseData.forEach(choose => {
        cartContainer.innerHTML += `
   <div class="space-y-3 bg-slate-100 px-4 py-6 rounded-xl 
            cursor-pointer
            transition-all duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600
            hover:text-white hover:shadow-xl hover:-translate-y-2">
                    <i class="${choose.icon_description} text-4xl"></i>
                    <h1 class="font-bold text-lg">${choose.title}</h1>

                    <p class="text-gray-400">${choose.description}</p>
                </div>

  `
    });
}


loadChooseData();