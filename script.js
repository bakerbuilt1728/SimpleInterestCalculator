function compute()
{
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;

    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;

    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML = 'If you deposit <span class="result_number">$'+parseInt(principal).toLocaleString()+'</span>, <br/>at an interest rate of <span class="result_number">'+rate+'%</span>. <br/>You will receive an amount of <span class="result_number">$'+parseFloat(interest).toLocaleString()+'</span>, <br/>in the year <span class="result_number">'+year+'</span>  <br/>'
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
