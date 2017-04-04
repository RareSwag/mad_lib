function makeStory() {
    // get form values (2 points)
    var verb1 = document.getElementById('verb1').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var pronoun = document.getElementById('pro').value;
    var verb2 = document.getElementById('verb2').value;
    var  noun4= document.getElementById('noun4').value;
    var  noun5= document.getElementById('noun5').value;
    var  noun6= document.getElementById('noun6').value;
    var  adjective1= document.getElementById('adjective1').value;
    var  noun7= document.getElementById('noun7').value;
    var  noun8= document.getElementById('noun8').value;
    var  noun9= document.getElementById('noun9').value;
    var  verb3= document.getElementById('verb3').value;
    var  adjective2= document.getElementById('adjective2').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    title = verb1 + " At Me!";

    document.getElementById('everythan').style.fontFamily = "Impact,Charcoal,sans-serif";


    // Build story. you can add as many paragraphs as you like. (3 points)
     one = "I'm like " + noun1 + ", who is your mans? " +
"Can't keep my " + noun2 + " in my pants. "+
"My " +  noun3  + " don't love me no more. " +
pronoun + " kick me out I'm like "  + verb2 + ". " +
"That " + noun1 + " don't wanna be friends. " +
"I " + verb3 + " her " + noun4 + ", she amen. "+
"She put her" + noun5 + " on my " +noun6 + ". " +
"She said wanna " + adjective1 + " " +  noun7 + ", I do"
"You put a gun on my" + noun8 +". "+
"I put a" + adjective2 +" in your " + noun9 + ".";

 fun = "<img src='xten.jpg'>"

document.getElementById('image1').innerHTML = fun;


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title1').innerHTML = title;
document.getElementById('paragraph1').innerHTML = one;

}
