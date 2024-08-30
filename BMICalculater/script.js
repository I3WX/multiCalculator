const WeightInput = document.getElementById("weightInput");
const HeightInput = document.getElementById("heightInput");
const Summit = document.getElementById("submitBtn");
const resultBox = document.getElementById("box");

Summit.addEventListener("click", function(){
    var Weight = parseFloat(WeightInput.value);
    var Height = parseFloat(HeightInput.value);
    
    if (!isNaN(Weight) && !isNaN(Height) && Height > 0 && Weight > 0){
        let bmi = getBmi(Weight,Height);
        resultBox.innerHTML = `<b>Your BMI is ${bmi}</b> <button id="ReturnBtn" type="button">Go Back</button>`;
        
        document.getElementById("ReturnBtn").addEventListener("click", function(){
            resultBox.innerHTML = '<div class="input"><label class="inputLabel" for="Weight">Weight</label><input class="textInput" type="text" name="Weight" id="weightInput" placeholder="Weight in kg"></div><div class="input"><label class="inputLabel" for="Height">Height</label><input class="textInput" type="text" name="Height" id="heightInput" placeholder="Height in Meter"></div><div id="btn"><button id="submitBtn" type="submit">Submit</button></div>';
        });
    }
    else {
        resultBox.innerHTML = '<b>HEIGHT AND WEIGHT SHOULD BE GREATER THAN 0</b> <button id="ReturnBtn" type="button">Go Back</button>';
        
        document.getElementById("ReturnBtn").addEventListener("click", function(){
            location.reload();
        });
    }
});

function getBmi(Weight, Height){
    Bmi = Weight / (Height * Height);
    return Bmi;
}
