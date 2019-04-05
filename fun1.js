

// function doSomething(name)
// {
//     console.log(`Hi,my name is ${name}!`);
// }

// doSomething("bhadresh");
// doSomething("gosai");
// doSomething("abhishek");

// let funName = function(name){
//     console.log(`hi! my name is ${name}`);
// }

// funName("bhadresh");
// funName("gosai");
// funName("abhishek");

function ask(que,y,n)
{
    if(confirm(que))
    {
        y();
    }
    else{
        n();
    }
}

function yes()
{
    console.log("yes, i like this!");
}
function no()
{
    console.log("no, i dont like this!");
}

ask("do you like Advance JavaScript?",yes,no);