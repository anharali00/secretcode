md5s = ["c72b969efdbb0ec7a5c44ef967cb2d2c", 'b5b1fcf50f7ac9a16f6e4796c6f82a07', 'be1e0e2cfbcc0d3d8c26465dc50f7f77', 'dc647eb65e6711e155375218212b3964', 'bdfc54c30f65a0e2d6f98a535d34d6bc', 'fe01d67a002dfa0f3ac084298142eccd', '63a9f0ea7bb98050796b649e85481845', '21232f297a57a5a743894a0e4a801fc3'];
solves = ['summer', 'eagle', 'vodka', 'enter', 'ninja', 'orange', 'root', 'admin'];


function clickme()
{
    var value = document.getElementById('input').value;

    if(md5s.includes(value))
    {
        var index = md5s.indexOf(value); // 1

document.getElementById("header").innerHTML = 'Secret Word is: ' + solves[index];
    }
    else
    {
        document.getElementById("header").innerHTML = 'Error: Secret number not recognised';
    }

    
}