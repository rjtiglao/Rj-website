let skills = ["./assets/media/icons/tools/ami.png","./assets/media/icons/tools/ansible.png","./assets/media/icons/tools/apache.png","./assets/media/icons/tools/api.png","./assets/media/icons/tools/automox.png","./assets/media/icons/tools/bootstrap.png","./assets/media/icons/tools/crontab.png","./assets/media/icons/tools/devtools.png","./assets/media/icons/tools/docker.png","./assets/media/icons/tools/ec2.png","./assets/media/icons/tools/express.png","./assets/media/icons/tools/firebase.png",
"./assets/media/icons/tools/github.png",
"./assets/media/icons/tools/googleFonts.png",
"./assets/media/icons/tools/iam-aws.png",
"./assets/media/icons/tools/jenkins.png",
"./assets/media/icons/tools/mysql.png",
"./assets/media/icons/tools/nagios.png",
"./assets/media/icons/tools/newrelic.png",
"./assets/media/icons/tools/nginx.png",
"./assets/media/icons/tools/postman.png",
"./assets/media/icons/tools/puppet.png",
"./assets/media/icons/tools/route53.png",
"./assets/media/icons/tools/s3.png",
"./assets/media/icons/tools/saltstack.png",
"./assets/media/icons/tools/selenium.png",
"./assets/media/icons/tools/slackBot.png",
"./assets/media/icons/tools/splunk.png",
"./assets/media/icons/tools/stackoverflow.png",
"./assets/media/icons/tools/wpengine.png"
];
let lang = ["./assets/media/icons/languages/c++.png",
"./assets/media/icons/languages/html5.png",
"./assets/media/icons/languages/css.png",
"./assets/media/icons/languages/javascript.png",
"./assets/media/icons/languages/jquery.png",
"./assets/media/icons/languages/python.png",
"./assets/media/icons/languages/c++.png",
"./assets/media/icons/languages/swift.png",
"./assets/media/icons/languages/regex.png",
"./assets/media/icons/languages/ruby.png",
"./assets/media/icons/languages/bash.png"];






window.onload = function(){
    for(i=0;i<skills.length;i++){
    let image = document.createElement("IMG");
    image.className = "class skill-image";
    image.src = `${skills[i]}`
    // image.append(skills[i]);
    document.getElementById("skillContainer").appendChild(image);
    };

    for(i=0;i<lang.length;i++){
    let image = document.createElement("IMG");
    image.className = "class skill-image";
    image.src = `${lang[i]}`
    // image.append(skills[i]);
    document.getElementById("langContainer").appendChild(image);
    };


    let image = document.createElement("IMG");
    image.className = "class const-image";
    image.src = `./assets/media/icons/maintenence.png`;
    document.getElementById("const-image").appendChild(image);
}