function consolidate () {
    // Gather user input loan information
    const loans = document.querySelectorAll(".loan-info");
    const number_of_loans = loans.length;
    
    // Validate all info has been input
    //for(var i = 0; i < loans.length; i++){
    //    if(loans[i].)
    //} 

    // Calculate total loan value
    var total_loan_value = 0;
    for(var i = 0; i < number_of_loans; i++){
        var loan_value = Number(loans[i].querySelector("#loan-amount").value);
        total_loan_value += loan_value;
    } 

    // Calculate consolidated interest rate
    var consolidated_interest_rate = 0;
    for(var i = 0; i < number_of_loans; i++){
        var interest_rate = Number(loans[i].querySelector("#loan-interest-rate").value);
        var loan_weight = Number(loans[i].querySelector("#loan-amount").value) / total_loan_value;
        var weighted_interest_rate = interest_rate * loan_weight;
        consolidated_interest_rate += weighted_interest_rate;
    } 

    // Output calculated values
    document.getElementById("total-loan-value").textContent = total_loan_value;
    console.log(total_loan_value);
    document.getElementById("consolidated-interest-rate").textContent = consolidated_interest_rate;
    console.log(consolidated_interest_rate);
}