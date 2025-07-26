
const bill=document.getElementById("bill");
const billConteiner=document.querySelector(".cuenta");
const people=document.getElementById("people");
const peopleConteiner=document.querySelector(".numPeople");
let advertenciaBill=document.createElement("p");
advertenciaBill.textContent="Can´t be zero";
advertenciaBill.classList.add("advertencia");
let advertenciaPeople=document.createElement("p");
advertenciaPeople.textContent="Can´t be zero";
advertenciaPeople.classList.add("advertencia");
const tip=document.querySelectorAll(".tipChoice");
const reset=document.querySelector("#reset")

const custom=document.getElementById("custom");

let valueBill=false;
let valuePeople=false;
let valueBtn=false;
let tipValue;
let customValue=false;
let valueCustom
custom.addEventListener("click",()=>{
    custom.type="number"
})
custom.addEventListener("input",()=>{
        customValue=true;
    valueCustom=custom.value/100;
    showResult();
    })

bill.addEventListener("input", () => {
  if (Number(bill.value) <= 0) {
    billConteiner.style.border = "1px solid red";
    if (!billConteiner.contains(advertenciaBill)) {
      billConteiner.appendChild(advertenciaBill);
    }
    advertenciaBill.style.display = "block";
    valueBill = false;
  } else {
    billConteiner.style.border = "none";
    if (billConteiner.contains(advertenciaBill)) {
      billConteiner.removeChild(advertenciaBill);
    }
    valueBill = true;
    showResult();
  }
});

people.addEventListener("input", () => {
  if (Number(people.value) <= 0) {
    peopleConteiner.style.border = "1px solid red";
    if (!peopleConteiner.contains(advertenciaPeople)) {
      peopleConteiner.appendChild(advertenciaPeople);
    }
    advertenciaPeople.style.display = "block";
    valuePeople = false;
  } else {
    peopleConteiner.style.border = "none";
    if (peopleConteiner.contains(advertenciaPeople)) {
      peopleConteiner.removeChild(advertenciaPeople);
    }
    valuePeople = true;
    showResult();
  }
});


tip.forEach(btn => {
  btn.addEventListener("click", () => {
    tip.forEach(b => {
      b.style.backgroundColor = "var(--Green900)";
      b.style.color = "var(--White)";
    });


    btn.style.backgroundColor = "var(--Green400)";
    btn.style.color = "var(--Green900)";

    valueBtn = true;
    tipValue = btn.value;

    showResult();
  });
});
function showResult(){
if((valueBtn || customValue)&& valueBill && valuePeople){
    if(customValue){
        let tip = Number(bill.value) * valueCustom / Number(people.value);
        let total = Number(bill.value) / Number(people.value) + tip;
        document.querySelector(".tip").innerHTML=`$${tip.toFixed(2)}`
    document.querySelector(".total").innerHTML=`$${total.toFixed(2)}`
    }else{
        let tip = Number(bill.value) * tipValue / Number(people.value);
        let total = Number(bill.value) / Number(people.value) + tip;
        document.querySelector(".tip").innerHTML=`$${tip.toFixed(2)}`
    document.querySelector(".total").innerHTML=`$${total.toFixed(2)}`
    }
}
}

reset.addEventListener("click",()=>{
    bill.value="";
    people.value="";
    custom.value="";
    document.querySelector(".tip").innerHTML=`$0.00`
    document.querySelector(".total").innerHTML=`$0.00`
    custom.type="text"
    tip.forEach((btn) =>{
        btn.style.backgroundColor = "var(--Green900)";
        btn.style.color = "var(--White)";
    })
    valueBill=false;
    valuePeople=false;
    valueBtn=false;
    customValue=false;
})
