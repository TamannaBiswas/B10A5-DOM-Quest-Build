document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "/B10A5-DOM-Quest-Build/blog.html";
});

document.getElementById("donate-now").addEventListener("click", function () {
  const inputDonateMoney = inputFileValue("donate-amound");
  if (inputDonateMoney <= 0 || isNaN(inputDonateMoney)) {
    alert("Invalid donat amound");
    return;
  }
  const donetBalance = parseFloat(
    document.getElementById("donate-taka").innerText
  );
  const DonateMoneyAdd = donetBalance + inputDonateMoney;
  document.getElementById("donate-taka").innerText = DonateMoneyAdd.toFixed(2);

  const textFixtMoney = parseFloat(
    document.getElementById("text-fixt-money").innerText
  );

  const totuoTextFixtMoney = textFixtMoney - inputDonateMoney;
  document.getElementById("text-fixt-money").innerText =
    totuoTextFixtMoney.toFixed(2);

  // history
  const historyItem = document.createElement("div");
  const noakhaliBangladesh = document.getElementById(
    "noakhali-bangladesh"
  ).innerText;
  console.log(noakhaliBangladesh);
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  historyItem.className =
    "border-2 border-solid border-gray-200 p-5 rounded-lg bg-white space-y-4";
  historyItem.innerHTML = `
  <p class="text-gray-500">${inputDonateMoney} ${noakhaliBangladesh}</p>
  <p class="text-gray-500">Date: ${new Date().toLocaleDateString()}  Time: ${hours}:${minutes}:${seconds}</p>
  
  `;

  const historyContaner = document.getElementById("expense-history");
  historyContaner.appendChild(historyItem);
});

document
  .getElementById("donate-now-two")
  .addEventListener("click", function () {
    const inputDonateMoneyTwo = inputFileValue("donate-amound-two");
    if (inputDonateMoneyTwo <= 0 || isNaN(inputDonateMoneyTwo)) {
      alert("Invalid donat amound");
      return;
    }
    const donetBalanceTwo = parseFloat(
      document.getElementById("donate-taka-two").innerText
    );
    const DonateMoneyAbbTwo = donetBalanceTwo + inputDonateMoneyTwo;
    document.getElementById("donate-taka-two").innerText =
      DonateMoneyAbbTwo.toFixed(2);

    const textFixtMoneyTwo = parseFloat(
      document.getElementById("text-fixt-money").innerText
    );

    const totuoTextFixtMoneyTwo = textFixtMoneyTwo - inputDonateMoneyTwo;
    document.getElementById("text-fixt-money").innerText =
      totuoTextFixtMoneyTwo.toFixed(2);

    // history
    const historyItem = document.createElement("div");
    const feniBangladesh = document.getElementById("feni-bangladesh").innerText;
    console.log("noakhaliBangladesh");
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    historyItem.className =
      "border-2 border-solid border-gray-200 p-5 rounded-lg bg-white space-y-4";
    historyItem.innerHTML = `
 <p class="text-gray-500">${inputDonateMoneyTwo} ${feniBangladesh}</p>
 <p class="text-gray-500"> Date: ${new Date().toLocaleDateString()} Time: ${hours}:${minutes}:${seconds}</p>
 
 `;

    const historyContaner = document.getElementById("expense-history");
    historyContaner.appendChild(historyItem);
  });

document
  .getElementById("donate-now-three")
  .addEventListener("click", function () {
    const inputDonateMoneyThree = inputFileValue("donate-amound-three");
    if (inputDonateMoneyThree <= 0 || isNaN(inputDonateMoneyThree)) {
      alert("Invalid donat amound");
      return;
    }
    const donetBalanceThree = parseFloat(
      document.getElementById("donate-taka-three").innerText
    );
    const DonateMoneyAbbThree = donetBalanceThree + inputDonateMoneyThree;
    document.getElementById("donate-taka-three").innerText =
      DonateMoneyAbbThree.toFixed(2);

    const textFixtMoneyThree = parseFloat(
      document.getElementById("text-fixt-money").innerText
    );

    const totuoTextFixtMoneyThree = textFixtMoneyThree - inputDonateMoneyThree;
    document.getElementById("text-fixt-money").innerText =
      totuoTextFixtMoneyThree.toFixed(2);

    // history
    const historyItem = document.createElement("div");
    const quotaMovement = document.getElementById("quota-movement").innerText;
    console.log("quota-movement");
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    historyItem.className =
      "border-2 border-solid border-gray-200 p-5 rounded-lg bg-white space-y-4";
    historyItem.innerHTML = `
    <p class="text-gray-500">${inputDonateMoneyThree} ${quotaMovement}</p>
    <p class="text-gray-500">Date: ${new Date().toLocaleDateString()} Time: ${hours}:${minutes}:${seconds}</p>

    `;

    const historyContaner = document.getElementById("expense-history");
    historyContaner.appendChild(historyItem);
  });

const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
historyBtn.addEventListener("click", function () {
  historyBtn.classList.add("text-black", "font-bold", "py-2.5", "bg-btnColor");
  historyBtn.classList.remove(
    "border-2",
    "border-textGray2",
    "text-textGray2",
    "py-2"
  );

  donationBtn.classList.remove(
    "text-black",
    "font-bold",
    "py-2.5",
    "bg-btnColor"
  );
  donationBtn.classList.add(
    "border-2",
    "border-textGray2",
    "text-textGray2",
    "py-2"
  );
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("expense-history").classList.remove("hidden");
});
donationBtn.addEventListener("click", function () {
  donationBtn.classList.add("text-black", "font-bold", "py-2.5", "bg-btnColor");
  donationBtn.classList.remove(
    "border-2",
    "border-textGray2",
    "text-textGray2",
    "py-2"
  );

  historyBtn.classList.remove(
    "text-black",
    "font-bold",
    "py-2.5",
    "bg-btnColor"
  );
  historyBtn.classList.add(
    "border-2",
    "border-textGray2",
    "text-textGray2",
    "py-2"
  );
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("expense-history").classList.add("hidden");
});
