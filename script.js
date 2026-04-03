

const convert = document.getElementById('button')
convert.addEventListener('click', function(){ 
    const enterTem =parseFloat(document.getElementById('tem').value);
    const convertType = document.getElementById('tem-Type').value;
    const totalResult = document.getElementById('result')

    let result ;
    if(convertType ==='celsius'){
         result = (5/9)*(enterTem-32)
                 totalResult.innerText = "Result:"+`${enterTem}f`+ result.toFixed(2) + "°C";
                }else if(convertType ==='fahrenheit'){
                    result = (9/5)*(enterTem + 32)
                    totalResult.innerText = "Result: " +`${enterTem}c`+ "-->"+ result.toFixed(2) + " °F";

    }
});