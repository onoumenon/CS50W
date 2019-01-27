function validateForm() {
    if (isEmpty(document.getElementById('data_3').value.trim())) {
    alert('Name is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_6').value.trim())) {
    alert('Date is required!');
    return false;
    }
    if (isEmpty(document.getElementById('data_7').value.trim())) {
    alert('Time is required!');
    return false;
    }
    return true;
    }
    function isEmpty(str) { return (str.length === 0 || !str.trim()); }
    function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
    }