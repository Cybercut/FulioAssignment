const textarea=document.getElementById("textarea1");
function f1(t){let e=t.value;textarea.style.fontSize=e+"px"}
function f2(t){"bold"==textarea.style.fontWeight?(textarea.style.fontWeight="normal",t.classList.remove("active")):(textarea.style.fontWeight="bold",t.classList.add("active"))}
function f3(t){"italic"==textarea.style.fontStyle?(textarea.style.fontStyle="normal",t.classList.remove("active")):(textarea.style.fontStyle="italic",t.classList.add("active"))}
function f4(t){"underline"==textarea.style.textDecoration?(textarea.style.textDecoration="none",t.classList.remove("active")):(textarea.style.textDecoration="underline",t.classList.add("active"))}
function f5(t){textarea.style.textAlign="left"}
function f6(t){textarea.style.textAlign="center"}
function f7(t){textarea.style.textAlign="right"}
function f8(t){"uppercase"==textarea.style.textTransform?(textarea.style.textTransform="none",t.classList.remove("active")):(textarea.style.textTransform="uppercase",t.classList.add("active"))}
function f9(){textarea.style.fontWeight="normal",textarea.style.textAlign="left",textarea.style.fontStyle="normal",textarea.style.textTransform="capitalize",textarea.value=""}
function f10(t){let e=t.value;textarea.style.color=e}
window.addEventListener("load",()=>{textarea.value=""});
