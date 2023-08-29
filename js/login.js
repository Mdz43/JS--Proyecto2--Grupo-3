const $submit = document.getElementById("submit"),
    $Password = document.getElementById("Password"),
    $Username = document.getElementById("Username"),
    $Visible = document.getElementById("Visible");



document.addEventListener("change", (e) => {
    if (e.target === $Visible) {
        if ($Visible.checked === false) $Password.type = "Password";
        else $Password.type = "text";
    }

});


document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        if ($Password.value !== "" && $Username.value !== "") {
            e.preventDefault();

            window.location.href = "administradorWeb.html";

        }
    }
})