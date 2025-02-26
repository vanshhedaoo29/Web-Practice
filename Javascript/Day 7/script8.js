// 2️⃣ Variables & Data Types (5 Questions)
// Check if "JavaScript" contains "Script" without using .includes().

let str = "JavaScript";

// Using Index Of
if(str.indexOf("Script")=== -1){     // Method 1
    console.log(false);
}
else{
    console.log(true);
}

if(str.indexOf("Scripta")=== -1){
    console.log(false);
}
else{
    console.log(true);
}

// Using search
if(str.search("Script")=== -1){     // Method 2
    console.log(false);
}
else{
    console.log(true);
}

if(str.search("Scripta")=== -1){
    console.log(false);
}
else{
    console.log(true);
}