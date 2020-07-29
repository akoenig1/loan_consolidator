function addLoan() {
    const input_section = document.getElementById("input");

    const loan_info_divs = document.querySelectorAll(".loan-info");
    const last_loan_info_div = loan_info_divs[loan_info_divs.length - 1];
    const new_loan_info_div = last_loan_info_div.cloneNode(true);
    const add_button = document.getElementById("add-loan-button");
    
    new_loan_info_div.getElementsByClassName("remove-loan-button")[0].setAttribute("onclick", "return this.parentNode.remove();");
    input_section.insertBefore(new_loan_info_div, add_button);
}
