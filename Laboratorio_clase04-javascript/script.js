document.getElementById("load-users").addEventListener("click", function () {
    fetch("https://reqres.in/api/users?page=1")
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("user-list");
            document.getElementById("user-table").style.display = "table";
            userList.innerHTML = "";
            data.data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.first_name} ${user.last_name}</td>
                    <td>${user.email}</td>
                    <td><img src="${user.avatar}" alt="${user.first_name} ${user.last_name}"></td>
                `;
                userList.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error al obtener los usuarios:", error);
        });
});
