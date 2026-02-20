document.getElementById("fetch-user").addEventListener("click", async () => {
  const output = document.getElementById("output");
  output.textContent = "Loading...";

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();

    output.textContent = `Name: ${user.name}, Email: ${user.email}`;
  } catch (error) {
    output.textContent = `Error: ${error.message}`;
  }
});
