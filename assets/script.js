var itemColor = "#ffffff";

//list of objects
var objects = [{imgsrc: "assets/imgs/1.png", title: "small empty wild tiger balm tin", description: "my grandmother used to always carry some tiger balm with her for her joint pain, mine is empty but the shape and the feel of the small tin comforts me somehow.", identity: "i am a cis gay man.", color: "rgba(248, 223, 229, 1)"}, {imgsrc: "assets/imgs/2.png", title: "purple stuffed sheep named baba", description: "i’ve had it since i was a kid and sleep w it at night.", identity: "i am trans.", color: "rgba(236, 242, 250, 1)"}, {imgsrc: "assets/imgs/3.png", title: "take no shit / do no harm pin", description: "it sums up how I feel about life and is a good reminder of taking care of myself and others.", identity: "i am pansexual.", color: "rgba(250, 244, 240, 1)"}, {imgsrc: "assets/imgs/4.png", title: "doc martens", description: "my fiancée gave them to me in high school when we first started dating; she gifted me something so useful. she gave me a new way to express myself, she gave me a new support, she gave me something that i still wear to this day almost 9 years later.", identity: "i am a cisgender woman who is queer.", color: "rgba(190, 180, 180, 1)"}, {imgsrc: "assets/imgs/5.png", title: "crysanthemum plant in a lacy white pot", description: "it was a present from my grandma when i stayed there for a while after my grandad died. gardening with her is a really happy memory since i feel like we got to know each other as people a lot more. also i’m proud of raising the flowers healthily with her advice (have had limited success in the past haha).", identity: "i am a bisexual woman.", color: "rgba(240, 221, 216, 1)"}, {imgsrc: "assets/imgs/6.png", title: "the vast fields of ordinary, rainbow boys, and money boy", description: "reading a bunch of books about being young and gay really helped me resolve my inner conflict and realize the beauty + color of living life gay, if that makes sense. a lot of the imagery I had seen or read was just plain negative, but reading lgbt fiction that presented a more ideal situation really helped me.", identity: "i am gay.", color: "rgba(218, 190, 170, 1)"}, {imgsrc: "assets/imgs/7.png", title: "a stuffed doggie", description: "my father gave it to me when i was a kid.", identity: "i am somewhere in the asexual spectrum.", color: "rgba(237, 245, 250, 1)"}, {imgsrc: "assets/imgs/8.png", title: "a friendship bracelet from my best friend", description: "it says gay af on it and it’s kind of indicative of my finally being out and proud and represents my found queer family so well. every time i see it on my arm (and i wear it near constantly) i’m reminded of my best friend and it just fills me with the warm fuzzies.", identity: "i am trans nonbinary agender, bi/pan asexual.", color: "rgba(255, 214, 192, 1)"}, {imgsrc: "assets/imgs/9.png", title: "my keys", description: "now that i’m renting my own apartment and live alone, my keys represent a hard-earned and bitter struggle to build a home for myself after being homeless. they’re on a silver carabiner because 1) im queer & 2) it lets me feel the weight of them on my hip & touch them to make sure they’re there at a moment’s notice.", identity: "i am genderqueer & transmasc. i don’t have a label for my sexuality.", color: "rgba(244, 255, 255, 1)"}, {imgsrc: "assets/imgs/10.png", title: "my phone", description: "it connects me to my long distance boyfriend and my friends that keep me going.", identity: "i am a gay non-binary person.", color: "rgba(206, 159, 153, 1)"}, {imgsrc: "assets/imgs/11.png", title: "a very oversized olive green knitted sweater", description: "it was my dad’s favourite sweater, knitted by my mom, and he very recently passed away.", identity: "i am bisexual/queer.", color: "rgba(218, 207, 253, 1)"}, {imgsrc: "assets/imgs/12.png", title: "green stegosaurus stuffed toy", description: "my partner gave it to me for our anniversary last year.", identity: "i am non-binary.", color: "rgba(255, 244, 187, 1)"}, {imgsrc: "assets/imgs/13.png", title: "my pillow", description: "i use it to comfort me throughout the day and also acts as a way for me to sleep when i can!", identity: "i am bisexual and non-binary.", color: "rgba(255, 177, 183, 1)"}, {imgsrc: "assets/imgs/14.png", title: "mini green spatula with a snowflake pattern", description: "i like mini things a lot and it’s super useful. i use it whenever i can and i’m in the kitchen a lot so it’s my favorite tool. it was one of those things you kind of question at first but then you end up loving it. i lost the spatula for a while, but i found it and it was nice to have a good thing that also served as a constant.", identity: "i am pan and likely agender though i’m still figuring out my identity.", color: "rgba(247, 221, 188, 1)"}, {imgsrc: "assets/imgs/15.png", title: "nintendo switch", description: "video games are basically my from of relaxation/meditation since it’s really hard for me to calm down without something more engrossing to focus on.", identity: "i am non-binary & queer.", color: "rgba(201, 224, 254, 1)"}, {imgsrc: "assets/imgs/16.png", title: "i choose you pikachu plushie", description: "it is my oldest and most loved item! always in my bed, as a kid i knew i loved it because when i would make plans of what to do if a fire started in my house, it was the first thing i grabbed. most kissed item in my house for sure!", identity: "i am non-binary, sapphic.", color: "rgba(255, 215, 158, 1)"}, {imgsrc: "assets/imgs/17.png", title: "my late cat’s collar", description: "growing up, there were always animals in the house and i loved every one of them, but shadow was the first pet i had a deep connection with. he was my baby, and putting him down due to his declining health was one of the hardest days of my life. he’s been gone almost three years now, but i wear his collar as a bracelet almost every day.", identity: "i am a queer transman.", color: "rgba(255, 246, 255, 1)"}, {imgsrc: "assets/imgs/18.png", title: "my headphones", description: "lets me block out what’s going on around me when what’s going on around me is overwhelming and bad and lets me feel connected instead of drifting by listening to music/video/podcasts while i try to make it through the day.", identity: "i am bisexual.", color: "rgba(192, 209, 255, 1)"}, {imgsrc: "assets/imgs/19.png", title: "my stuffed rathalos", description: "it helps me sleep more comfortably at night (i have a need to hug something or i can’t sleep as well).", identity: "i am non-binary lesbian (they/she pronouns).", color: "rgba(255, 231, 213, 1)"}, {imgsrc: "assets/imgs/20.png", title: "my blue gameboy color", description: "i grew up as an asian child in a predominantly white school with a 2nd language and communicating, whether in english or not, was never my strong point. generally being a quiet and quite boring person, i always went to my gameboy color with tetris that i could just zone out to and play when i’d get bored or so. just fitting the shapes in with ease gave me life.", identity: "i am non-binary lesbian (they/she pronouns).", color: "rgba(255, 231, 213, 1)"}, {imgsrc: "assets/imgs/21.png", title: "childhood stuffed bear", description: "he’s been my friend since the beginning through happy and sad times! especially during teenage years when i felt like no one understood. also he’s very cute and super huggable.", identity: "i am asexual.", color: "rgba(255, 208, 183, 1)"}]



function changeBackgroundColor(object){
//    document.body.style.background = this.color;
//    console.log(color);
    console.log(this);
        var bgColor = object.getAttribute("color");
    document.body.style.background = bgColor;

}

function bgWhite(){
     document.body.style.background = "white";
}


function populateCards(){
    //creates cards based on how many different objects there are in the list
    for(var i=0; i< objects.length; i++){

        var item = document.createElement("figure");
        var itemText = document.createElement("figcaption");

        //item image
        var itemImg = document.createElement("img");
        itemImg.setAttribute("src", objects[i].imgsrc);

        var canvas = document.createElement("canvas");
        var itemCanvas = canvas.getContext("2d");
        itemCanvas.drawImage(itemImg, 0, 0);

        //item name
        var itemName = document.createElement("h2");
        itemName.setAttribute("class", "title");
        var itemNameText = document.createTextNode(objects[i].title);
        itemName.appendChild(itemNameText);
        itemText.appendChild(itemName);

        //item description
        var itemDesc = document.createElement("p");
        itemDesc.setAttribute("class", "description");
        var itemDescText = document.createTextNode(objects[i].description);
        itemDesc.appendChild(itemDescText);
        itemText.appendChild(itemDesc);

        //item identity
        var itemIden = document.createElement("p");
        itemIden.setAttribute("class", "identity");
        var itemIdenText = document.createTextNode(objects[i].identity);
        itemIden.appendChild(itemIdenText);

        item.setAttribute("color", objects[i].color);
        itemColor = objects[i].color;

        item.appendChild(itemImg);
        item.appendChild(itemText);
        item.appendChild(itemIden);
        item.setAttribute("onmouseover", "changeBackgroundColor(this);")
        item.setAttribute("onmouseOut", "bgWhite();");


        var objectList = document.getElementById("catalogue");
        objectList.appendChild(item);

        console.log(item);
        console.log(itemColor);
    }
}

function populateFeatured(){
    //creates cards based on how many different objects there are in the list
    var featured = getRandom(objects, 5);
    
    for(var i=0; i< featured.length; i++){

        var item = document.createElement("figure");
        var itemText = document.createElement("figcaption");

        //item image
        var itemImg = document.createElement("img");
        itemImg.setAttribute("src", featured[i].imgsrc);

        //item name
        var itemName = document.createElement("h2");
        itemName.setAttribute("class", "title");
        var itemNameText = document.createTextNode(featured[i].title);
        itemName.appendChild(itemNameText);
        itemText.appendChild(itemName);

        //item description
        var itemDesc = document.createElement("p");
        itemDesc.setAttribute("class", "description");
        var itemDescText = document.createTextNode(featured[i].description);
        itemDesc.appendChild(itemDescText);
        itemText.appendChild(itemDesc);

        //item identity
        var itemIden = document.createElement("p");
        itemIden.setAttribute("class", "identity");
        var itemIdenText = document.createTextNode(featured[i].identity);
        itemIden.appendChild(itemIdenText);

        item.appendChild(itemImg);
        item.appendChild(itemText);
        item.appendChild(itemIden);

        var objectList = document.getElementById("featured");
        objectList.appendChild(item);

    }
}


function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}