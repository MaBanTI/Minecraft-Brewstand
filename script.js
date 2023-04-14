var Bottle = false;
var Fuel = false;
var Fuel_display;

if (Fuel <= 0) {
    Fuel = false;
}

function fuel() {
    Fuel = true;
    Fuel_display = document.getElementById('Fuel_Bar_id').value = 100;
}

function GlasBottle() {
    Bottle = true;
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

}


function Magmacreme() {
    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Ingredient-Brewing').src = 'img/Items/Magmacreme_MC.png';
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

    var MagmaValue = document.getElementById('BrewingBar_id').value;

    if (Bottle == true && 0 < Fuel_display && Fuel == true) {
        if (MagmaValue < 100) {
            setTimeout(ValueMagma, 100);  
        } if (MagmaValue >= 100) {
            document.getElementById('Fuel_Bar_id').value = Fuel_display = Fuel_display - 10;
            document.getElementById('Ingredient-Brewing').src = 'img/Darkgray_Placeholder.png';
            document.getElementById('BrewingBar_id').value = 0; 

            Bottle = false;

            document.getElementById('Potion1').src = 'img/Items/Potions/FireResistance.gif';
            document.getElementById('Potion2').src = 'img/Items/Potions/FireResistance.gif';
            document.getElementById('Potion3').src = 'img/Items/Potions/FireResistance.gif';

            document.getElementById('Potion_Name_ID').innerHTML = 'Fire Resistance';
        }
        function ValueMagma() {
            MagmaValue = MagmaValue + 1;
            document.getElementById('BrewingBar_id').value = MagmaValue; 
            Magmacreme();
        }
    } else if (Bottle == false || Fuel == false) {
        if (Bottle == false && Fuel == true) {
            alert('To create a Potion, you will need a valid Fuel ressource (Blaze Dust) and a host that will hold the Effects of your Potions (Water Bottle). Then you only need to click on an Ingredient (Hotbar) and let it brew!');
        } else if (Bottle == true && Fuel == false) {
            alert('Good, you know that you will need something to pour your potions into, now you need to burn the Effects for your Potion out of your Ingredient of choice, for that, clicki on the Blaze Dust (Fuel) and then on the Ingredient in the Hotbar!');
        } else {
            alert('If you do not know where to start, I will help, first you need a host that you can put your Effects onto, then you will need some kind of fuel to burn the Effects out of your Ingredient, that means, clock on the Water Bottle in the Hotbar, and then on the Blazedust in the upper sector (queue is not relevant), now you choose an Ingredient (Hotbar) and there you go!')
        }
    }

    
}


function Ghasttear() {
    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Ingredient-Brewing').src = 'img/Items/Ghasttear_MC.png';
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

    var GhastValue = document.getElementById('BrewingBar_id').value;

    if (Bottle == true && 0 < Fuel_display && Fuel == true) {
        if (GhastValue < 100) {
            setTimeout(ValueGhast, 100);  
        } if (GhastValue >= 100) {
            document.getElementById('Fuel_Bar_id').value = Fuel_display = Fuel_display - 10;
            document.getElementById('Ingredient-Brewing').src = 'img/Darkgray_Placeholder.png';
            document.getElementById('BrewingBar_id').value = 0; 

            Bottle = false;

            document.getElementById('Potion1').src = 'img/Items/Potions/Regeneration.gif';
            document.getElementById('Potion2').src = 'img/Items/Potions/Regeneration.gif';
            document.getElementById('Potion3').src = 'img/Items/Potions/Regeneration.gif';

            document.getElementById('Potion_Name_ID').innerHTML = 'Regeneration';
        }
        function ValueGhast() {
            GhastValue = GhastValue + 1;
            document.getElementById('BrewingBar_id').value = GhastValue; 
            Ghasttear();
        }
    } else if (Bottle == false || Fuel == false) {
        if (Bottle == false && Fuel == true) {
            alert('To create a Potion, you will need a valid Fuel ressource (Blaze Dust) and a host that will hold the Effects of your Potions (Water Bottle). Then you only need to click on an Ingredient (Hotbar) and let it brew!');
        } else if (Bottle == true && Fuel == false) {
            alert('Good, you know that you will need something to pour your potions into, now you need to burn the Effects for your Potion out of your Ingredient of choice, for that, clicki on the Blaze Dust (Fuel) and then on the Ingredient in the Hotbar!');
        } else {
            alert('If you do not know where to start, I will help, first you need a host that you can put your Effects onto, then you will need some kind of fuel to burn the Effects out of your Ingredient, that means, clock on the Water Bottle in the Hotbar, and then on the Blazedust in the upper sector (queue is not relevant), now you choose an Ingredient (Hotbar) and there you go!')
        }
    }
}


function GlisteringMelon() {
    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Ingredient-Brewing').src = 'img/Items/Glistering_Melon_MC.png';
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

    var MelonValue = document.getElementById('BrewingBar_id').value;

    if (Bottle == true && 0 < Fuel_display && Fuel == true) {
        if (MelonValue < 100) {
            setTimeout(ValueMelon, 100);  
        } if (MelonValue >= 100) {
            document.getElementById('Fuel_Bar_id').value = Fuel_display = Fuel_display - 10;
            document.getElementById('Ingredient-Brewing').src = 'img/Darkgray_Placeholder.png';
            document.getElementById('BrewingBar_id').value = 0; 

            Bottle = false;

            document.getElementById('Potion1').src = 'img/Items/Potions/Healing.gif';
            document.getElementById('Potion2').src = 'img/Items/Potions/Healing.gif';
            document.getElementById('Potion3').src = 'img/Items/Potions/Healing.gif';

            document.getElementById('Potion_Name_ID').innerHTML = 'Healing';
        }
        function ValueMelon() {
            MelonValue = MelonValue + 1;
            document.getElementById('BrewingBar_id').value = MelonValue; 
            GlisteringMelon();
        }
    } else if (Bottle == false || Fuel == false) {
        if (Bottle == false && Fuel == true) {
            alert('To create a Potion, you will need a valid Fuel ressource (Blaze Dust) and a host that will hold the Effects of your Potions (Water Bottle). Then you only need to click on an Ingredient (Hotbar) and let it brew!');
        } else if (Bottle == true && Fuel == false) {
            alert('Good, you know that you will need something to pour your potions into, now you need to burn the Effects for your Potion out of your Ingredient of choice, for that, clicki on the Blaze Dust (Fuel) and then on the Ingredient in the Hotbar!');
        } else {
            alert('If you do not know where to start, I will help, first you need a host that you can put your Effects onto, then you will need some kind of fuel to burn the Effects out of your Ingredient, that means, clock on the Water Bottle in the Hotbar, and then on the Blazedust in the upper sector (queue is not relevant), now you choose an Ingredient (Hotbar) and there you go!')
        }
    }
}


function Blazedust() {
    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Ingredient-Brewing').src = 'img/Items/Blaze_Dust_MC.png';
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

    var BlazeValue = document.getElementById('BrewingBar_id').value;

    if (Bottle == true && 0 < Fuel_display && Fuel == true) {
        if (BlazeValue < 100) {
            setTimeout(ValueBlaze, 100);  
        } if (BlazeValue >= 100) {
            document.getElementById('Fuel_Bar_id').value = Fuel_display = Fuel_display - 10;
            document.getElementById('Ingredient-Brewing').src = 'img/Darkgray_Placeholder.png';
            document.getElementById('BrewingBar_id').value = 0; 

            Bottle = false;

            document.getElementById('Potion1').src = 'img/Items/Potions/Strength.gif';
            document.getElementById('Potion2').src = 'img/Items/Potions/Strength.gif';
            document.getElementById('Potion3').src = 'img/Items/Potions/Strength.gif';

            document.getElementById('Potion_Name_ID').innerHTML = 'Strength';
        }
        function ValueBlaze() {
            BlazeValue = BlazeValue + 1;
            document.getElementById('BrewingBar_id').value = BlazeValue; 
            Blazedust();
        }
    } else if (Bottle == false || Fuel == false) {
        if (Bottle == false && Fuel == true) {
            alert('To create a Potion, you will need a valid Fuel ressource (Blaze Dust) and a host that will hold the Effects of your Potions (Water Bottle). Then you only need to click on an Ingredient (Hotbar) and let it brew!');
        } else if (Bottle == true && Fuel == false) {
            alert('Good, you know that you will need something to pour your potions into, now you need to burn the Effects for your Potion out of your Ingredient of choice, for that, clicki on the Blaze Dust (Fuel) and then on the Ingredient in the Hotbar!');
        } else {
            alert('If you do not know where to start, I will help, first you need a host that you can put your Effects onto, then you will need some kind of fuel to burn the Effects out of your Ingredient, that means, clock on the Water Bottle in the Hotbar, and then on the Blazedust in the upper sector (queue is not relevant), now you choose an Ingredient (Hotbar) and there you go!')
        }
    }
}


function Spidereye() {
    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Ingredient-Brewing').src = 'img/Items/Spider_Eye_MC.png';
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

    var SpiderValue = document.getElementById('BrewingBar_id').value;

    if (Bottle == true && 0 < Fuel_display && Fuel == true) {
        if (SpiderValue < 100) {
            setTimeout(ValueSpider, 100);  
        } if (SpiderValue >= 100) {
            document.getElementById('Fuel_Bar_id').value = Fuel_display = Fuel_display - 10;
            document.getElementById('Ingredient-Brewing').src = 'img/Darkgray_Placeholder.png';
            document.getElementById('BrewingBar_id').value = 0; 

            Bottle = false;

            document.getElementById('Potion1').src = 'img/Items/Potions/Poison.gif';
            document.getElementById('Potion2').src = 'img/Items/Potions/Poison.gif';
            document.getElementById('Potion3').src = 'img/Items/Potions/Poison.gif';

            document.getElementById('Potion_Name_ID').innerHTML = 'Poison';
        }
        function ValueSpider() {
            SpiderValue = SpiderValue + 2;
            document.getElementById('BrewingBar_id').value = SpiderValue; 
            Spidereye();
        }
    } else if (Bottle == false || Fuel == false) {
        if (Bottle == false && Fuel == true) {
            alert('To create a Potion, you will need a valid Fuel ressource (Blaze Dust) and a host that will hold the Effects of your Potions (Water Bottle). Then you only need to click on an Ingredient (Hotbar) and let it brew!');
        } else if (Bottle == true && Fuel == false) {
            alert('Good, you know that you will need something to pour your potions into, now you need to burn the Effects for your Potion out of your Ingredient of choice, for that, clicki on the Blaze Dust (Fuel) and then on the Ingredient in the Hotbar!');
        } else {
            alert('If you do not know where to start, I will help, first you need a host that you can put your Effects onto, then you will need some kind of fuel to burn the Effects out of your Ingredient, that means, clock on the Water Bottle in the Hotbar, and then on the Blazedust in the upper sector (queue is not relevant), now you choose an Ingredient (Hotbar) and there you go!')
        }
    }
}


function Sugar() {
    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Potion_Name_ID').innerHTML = '';

    document.getElementById('Ingredient-Brewing').src = 'img/Items/Sugar_MC.png';
    document.getElementById('Potion1').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion2').src = 'img/Items/Water_Bottle_MC.png';
    document.getElementById('Potion3').src = 'img/Items/Water_Bottle_MC.png';

    var SugarValue = document.getElementById('BrewingBar_id').value;

    if (Bottle == true && 0 < Fuel_display && Fuel == true) {
        if (SugarValue < 100) {
            setTimeout(ValueSugar, 100);  
        } if (SugarValue >= 100) {
            document.getElementById('Fuel_Bar_id').value = Fuel_display = Fuel_display - 10;
            document.getElementById('Ingredient-Brewing').src = 'img/Darkgray_Placeholder.png';
            document.getElementById('BrewingBar_id').value = 0; 

            Bottle = false;

            document.getElementById('Potion1').src = 'img/Items/Potions/Speed.gif';
            document.getElementById('Potion2').src = 'img/Items/Potions/Speed.gif';
            document.getElementById('Potion3').src = 'img/Items/Potions/Speed.gif';

            document.getElementById('Potion_Name_ID').innerHTML = 'Speed';
        }
        function ValueSugar() {
            SugarValue = SugarValue + 1.5;
            document.getElementById('BrewingBar_id').value = SugarValue; 
            Sugar();
        }
    } else if (Bottle == false || Fuel == false) {
        if (Bottle == false && Fuel == true) {
            alert('To create a Potion, you will need a valid Fuel ressource (Blaze Dust) and a host that will hold the Effects of your Potions (Water Bottle). Then you only need to click on an Ingredient (Hotbar) and let it brew!');
        } else if (Bottle == true && Fuel == false) {
            alert('Good, you know that you will need something to pour your potions into, now you need to burn the Effects for your Potion out of your Ingredient of choice, for that, clicki on the Blaze Dust (Fuel) and then on the Ingredient in the Hotbar!');
        } else {
            alert('If you do not know where to start, I will help, first you need a host that you can put your Effects onto, then you will need some kind of fuel to burn the Effects out of your Ingredient, that means, clock on the Water Bottle in the Hotbar, and then on the Blazedust in the upper sector (queue is not relevant), now you choose an Ingredient (Hotbar) and there you go!')
        }
    }
}