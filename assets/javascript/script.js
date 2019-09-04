let images = ["./assets/images/cid.png","./assets/images/cloud.png","./assets/images/tifa.png","./assets/images/aerith.png"];



let tools = document.getElementById("tools");

window.onload{
    for(i=0;i<topics.length;i++){

        let imageSkill = document.createElement(`img`);
        imageSkill.id = `button${count}${topics[i]}`;
        imageSkill.className = `topic-button`;
        imageSkill.setAttribute(`value`,`${topics[i]}`);
        imageSkill.setAttribute(`onclick`,`func(this)`);
        imageSkill.setAttribute(`rating`,"G");
        document.getElementById("buttonContainer").appendChild(imageSkill);
        document.getElementById(`button${count}${topics[i]}`).innerHTML = `${topics[i]}`;   
        count++ 
    }
}