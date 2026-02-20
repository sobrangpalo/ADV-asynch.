const output = document.getElementById("output");


const users = [
  { name: "Agie C. Alaton", email: "agie@example.com", city: "Cebu", company: "Alaton Corp" },
  { name: "Kris Joralden Cano-os", email: "kris@example.com", city: "Manila", company: "Cano-os Inc" },
  { name: "Joseph Kyle Blanco", email: "joseph@example.com", city: "Davao", company: "Blanco Co" }
];


async function fetchUser(index=0){
  output.textContent = "Loading..."; 
  output.className = "loading";
  try {
    
    await new Promise(resolve => setTimeout(resolve, 500));
    if(index<0 || index>=users.length) throw new Error("User not found");
    
    const u = users[index];
    output.className = "";
    output.innerHTML = `
      <strong>Name:</strong> ${u.name}<br>
      <strong>Email:</strong> ${u.email}<br>
      <strong>City:</strong> ${u.city}<br>
      <strong>Company:</strong> ${u.company}
    `;
  } catch(e) {
    output.className = "error";
    output.textContent = `Error: ${e.message}`;
  }
}

let userIndex = 0;
document.getElementById("fetch-user").addEventListener("click", () => {
  fetchUser(userIndex);
  userIndex = (userIndex + 1) % users.length;
});
