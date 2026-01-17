document.getElementById("bmiForm").addEventListener('submit', function(e){   
/*In short, it means: "Wait for the user to try and submit the form, and when they do, run this function."*/

    e.preventDefault();             // Prevents the form from submitting and refreshing the page

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightFeet = parseInt(document.getElementById('height-feet').value);
    const heightInches = parseInt(document.getElementById('height-inches').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const resultElement = document.getElementById('result');
    let resultMessage = "";

    if(gender && age && heightFeet >= 0 && heightInches >= 0 && weight){
        const heightInMeters = ((heightFeet * 12) + heightInches) * 0.0254;  //in meters
        const bmi = weight / (heightInMeters * heightInMeters); //weight in kg / (height in meters)^2
        let category = "";
        if(bmi < 18.5){
            category = "Underweight";
        } else if(bmi >= 18.5 && bmi < 24.9){
            category = "Normal weight";
        }else if(bmi >= 25 && bmi < 29.9){
            category = "Overweight";
        }else{
            category = "Obese";
        }
        resultMessage = "Your BMI : " + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;
    } else {
        resultMessage = "Please fill in all fields correctly.";
    }
    resultElement.innerHTML = resultMessage;
});