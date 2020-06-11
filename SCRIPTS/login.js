$("#but_get").click(() => {
  var user = $("#1").val();
  var password = $("#2").val();
  $("#1").val("");
  if (!user.localeCompare("19MCMI06") && !password.localeCompare("123456789")) {
    window.location.href = "Add.html";
  } else {
    alert("invalid username or password");
  }
});
