function addLoan() {
    const input_section = document.getElementById("input");

    const loan_info_divs = document.querySelectorAll(".loan-info");
    const last_loan_info_div = loan_info_divs[loan_info_divs.length - 1]
    const new_loan_info_div = last_loan_info_div.cloneNode(true);
    const add_button = document.getElementById("add-loan-button");

    var loan_number = Number(new_loan_info_div.querySelector("h2").textContent);
    loan_number += 1;
    new_loan_info_div.querySelector("h2").textContent = loan_number;

    input_section.insertBefore(new_loan_info_div, add_button);
}

