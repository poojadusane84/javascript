document.getElementById("btn1").addEventListener("click",calcHcl);

function calcHcl(){
    const num1=document.getElementById("num1")
    const num2=document.getElementById("num2")
    const result=document.getElementById("result")
    let first_num=parseInt(num1.value);
    let second_num=parseInt(num2.value);

    let hcf,dvr,div,rem;
    rem=1;
    if(first_num>=second_num)
    {
        div=first_num;
        dvr=second_num;
    }
    else{
        div=second_num;
        dvr=first_num; 
    }

    while(rem>0)
    {
            rem=div%dvr;
            if(rem==0)
            {
                hcf=dvr;
                break;
            }
            else
            {
            div=dvr;
            dvr=rem;
            }

    }
    result.value=hcf;
}