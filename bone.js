function res()
{
    
    
    var s;
    s=0;
    var x=document.getElementById("formtest");
    var i;
    var flag;
    flag=0;
    for(i=0;i<x.length;i++)
    {
        if(parseInt(x.elements[i].value)>5 || parseInt(x.elements[i].value)<1)
        {
        alert("enter values from 1 to 5 only in the test");
        break;
        flag=1;
        }
        else
        s=s+parseInt(x.elements[i].value);
    }
    if(flag==0)
    document.getElementById("result").innerHTML="Your Result is "+ s +" out of 75";
    if(flag==1)
    document.getElementById("result").innerHTML="please enter valid data";
    

}

//auto expand textarea
function adjust_textarea(h)
{
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

function validateForm()
            {
                var name=document.forms["form"]["name"].value;
                var age=document.forms["form"]["age"].value;
                var cal=document.forms["form"]["cal"].value;
                var email=document.forms["form"]["email"].value;
                var bio=document.forms["form"]["bio"].value;
                var time=document.forms["form"]["time"].value;
                if(name==""||age==""||cal==""||email==""||bio==""||time=="")
                {
                    alert("All fields are mandatory.")
                    return false;
                }
                var pattern=/^(\w|\d)+@\w+\.\w(2,)$/;
                if(pattern.test(email))
                {
                    alert("Invalid email address.");
                }
                
                if(!(time=="day"||time=="week"))
                {
                    alert("Chart can only be produced for a 'day' or a 'week'.");
                    return false;
                }
                if(age.NaN)
                {
                    alert("Enter age in digits.");
                    return false;
                }
                if(cal.NaN)
                {
                    alert("Enter calories in digits.");
                    return false;
                }
                if(!"/\w*/".test(name))
                {
                    alert("Only alphabets are acceptable in name field.");
                    return false;
                }
                return true;
 }


            
