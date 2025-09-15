md5s = ["96d9632f2951f1c312f2518648839e9a", '0800fc577294c34e0b28ad2839435945', '0cc175b9c0f1b6a831c399e269772661', '8843d7f92416211de9ebb963ff4ce281', 'c9d19f273d6c3f61b20f3c8a582a4ad9'];
solves = ['Elvis', 'Ice', 'Game', 'Hunter', 'Tiger'];


function clickme()
{
    var value = document.getElementById('input').value;

    if(md5s.includes(value))
    {
        var index = md5s.indexOf(value);

document.getElementById("header").innerHTML = 'Secret Word is: ' + solves[index];
    }
    else
    {
        document.getElementById("header").innerHTML = 'Error: Secret number not recognised';
    }

    
}
