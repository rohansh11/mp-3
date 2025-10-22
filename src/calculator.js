export function addition(){
    let x = Number(document.getElementById("first-number").value);
    let y = Number(document.getElementById("second-number").value);
    let z = x+y;
    document.getElementById("output").innerHTML = String(z);
    
    if (z<0)
        document.getElementById("output").style.color="red";
    else
        document.getElementById("output").style.color="black";
}

export function subtraction(){
    let x = Number(document.getElementById("first-number").value);
    let y = Number(document.getElementById("second-number").value);
    let z = x-y;
    document.getElementById("output").innerHTML = String(z);
    
    if (z<0)
        document.getElementById("output").style.color="red";
    else
        document.getElementById("output").style.color="black";
}


export function multiplication(){
    let x = Number(document.getElementById("first-number").value);
    let y = Number(document.getElementById("second-number").value);
    let z = x*y;
    document.getElementById("output").innerHTML = String(z);
    
    if (z<0)
        document.getElementById("output").style.color="red";
    else
        document.getElementById("output").style.color="black";
}



export function division(){
    let x = Number(document.getElementById("first-number").value);
    let y = Number(document.getElementById("second-number").value);
    let z = x/y;
    document.getElementById("output").innerHTML = String(z);
    
    if (z<0)
        document.getElementById("output").style.color="red";
    else
        document.getElementById("output").style.color="black";
}



export function power(){
    let x = Number(document.getElementById("first-number").value);
    let y = Number(document.getElementById("second-number").value);
    let z = 1;

    for(let i=0; i<y; i++)
        z = z * x;
    document.getElementById("output").innerHTML = String(z);
    
    if (z<0)
        document.getElementById("output").style.color="red";
    else
        document.getElementById("output").style.color="black";
}


export function clearbutton(){
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}