const calculateBMI = () => {
    const yourHeight = document.querySelector("#height");
    const yourWeight = document.querySelector("#weight");
    const msg = document.querySelector(".msg");
    let height = yourHeight.value;
    let weight = yourWeight.value;
    if(height===""||height < 1){
        msg.innerText = "Provide a valid Height!"
    }
    else if(weight==="" || weight < 1){
        msg.innerText = "Provide a valid Weight!"
    }
    else{
        let BMI = (weight/((height*height)/10000)).toFixed(2);
        if(BMI < 18.6){
            msg.innerText = `Under Weight: ${BMI}`;
        }
        else if (BMI >= 18.6 && BMI < 24.9){
            msg.innerText = `Normal: ${BMI}`;
        }
        else {
            msg.innerText = `Over Weight: ${BMI}`;
        }
    }
}

const btn = document.querySelector("form button");
btn.addEventListener("click", (evt) =>{
    evt.preventDefault();
    calculateBMI()
});

