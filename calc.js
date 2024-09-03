const clr=document.getElementById("clear");
const ac=document.getElementById("AC");
const one=document.getElementById("1");
const two=document.getElementById("2");
const thr=document.getElementById("3");
const fou=document.getElementById("4");
const fiv=document.getElementById("5");
const six=document.getElementById("6");
const sev=document.getElementById("7");
const eig=document.getElementById("8");
const nin=document.getElementById("9");
const dot=document.getElementById(".");
const div=document.getElementById("/");
const mul=document.getElementById("*");
const sub=document.getElementById("-");
const add=document.getElementById("+");
const inp=document.getElementById("inp");
const equal=document.getElementById("equal");

let  c="";

function handleClick(event){
    c=c+event.target.id;
    inp.textContent=c;
    console.log(c);
    console.log(event.target.id);
}



clr.addEventListener('click',handleClear=()=>{
    c="";
    inp.textContent="";
})

ac.addEventListener('click',handleAC=()=>{
    c=c.slice(0,-1);
    inp.textContent=c;
})
equal.addEventListener('click',calculate)

function calculate() {
    let num1 = '';
    let op = null;
    let num2 = '';
  
    for (let i = 0; i < c.length; i++) {
      const ch = c[i];
      if (ch === '+' || ch === '-' || ch === '*' || ch === '/') {
        op = ch;
        num1 = parseFloat(num1);
        
      } else if (!op) {
        num1 += ch;
      } else {
        num2 += ch;
      }
      
    }
  
    num2 = parseFloat(num2);
  
    switch (op) {
      case '+':
        inp.textContent = num1 + num2;
        break;
      case '-':
        inp.textContent = num1 - num2;
        break;
      case '*':
        inp.textContent = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          inp.textContent = "Error";
        } else {
          inp.textContent = num1 / num2;
        }
        break;
    }
  }