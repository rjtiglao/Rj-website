let skills = ["./assets/media/icons/tools/tools/ami.ico","./assets/media/icons/tools/tools/ansible.ico","./assets/media/icons/tools/tools/apache.ico","./assets/media/icons/tools/tools/api.ico","./assets/media/icons/tools/tools/automox.ico","./assets/media/icons/tools/tools/bootstrap.ico","./assets/media/icons/tools/tools/crontab.ico","./assets/media/icons/tools/tools/devtools.ico","./assets/media/icons/tools/tools/docker.ico","./assets/media/icons/tools/tools/ec2.ico","./assets/media/icons/tools/tools/express.ico","./assets/media/icons/tools/tools/firebase.ico","./assets/media/icons/tools/tools/github.ico","./assets/media/icons/tools/tools/googleFonts.ico","./assets/media/icons/tools/tools/iam_aws.ico","./assets/media/icons/tools/tools/jenkins.ico","./assets/media/icons/tools/tools/mysql.ico","./assets/media/icons/tools/tools/nagios.ico","./assets/media/icons/tools/tools/newrelic.ico","./assets/media/icons/tools/tools/nginx.ico","./assets/media/icons/tools/tools/postman.ico","./assets/media/icons/tools/tools/puppet.ico","./assets/media/icons/tools/tools/route53.ico","./assets/media/icons/tools/tools/s3.ico","./assets/media/icons/tools/tools/saltstack.ico","./assets/media/icons/tools/tools/selenium.ico","./assets/media/icons/tools/tools/slackBot.ico","./assets/media/icons/tools/tools/splunk.ico","./assets/media/icons/tools/tools/stackoverflow.ico","./assets/media/icons/tools/tools/wpengine.ico"];
let lang = ["./assets/media/icons/languages/c++.png","./assets/media/icons/languages/html5.png","./assets/media/icons/languages/css.png","./assets/media/icons/languages/javascript.png","./assets/media/icons/languages/jquery.png","./assets/media/icons/languages/python.png","./assets/media/icons/languages/c++.png","./assets/media/icons/languages/swift.png","./assets/media/icons/languages/regex.png","./assets/media/icons/languages/ruby.png","./assets/media/icons/languages/bash.png"];
let framework = ["./assets/media/icons/framework/nodejs.png","./assets/media/icons/framework/RoR.png"];
let tools = ["./assets/media/icons/solutions/solutions/1password.ico",
"./assets/media/icons/solutions/solutions/aws.ico",
"./assets/media/icons/solutions/solutions/duo.ico",
"./assets/media/icons/solutions/solutions/gitlab.ico",
"./assets/media/icons/solutions/solutions/googleApps.ico",
"./assets/media/icons/solutions/solutions/gsuite.ico",
"./assets/media/icons/solutions/solutions/jamf.ico",
"./assets/media/icons/solutions/solutions/jira.ico",
"./assets/media/icons/solutions/solutions/jumpcloud.ico",
"./assets/media/icons/solutions/solutions/lucidcharts.ico",
"./assets/media/icons/solutions/solutions/okta.ico",
"./assets/media/icons/solutions/solutions/pivotal_tracker.ico",
"./assets/media/icons/solutions/solutions/slack.ico",
"./assets/media/icons/solutions/solutions/snow.ico",
"./assets/media/icons/solutions/solutions/upwork_sol.ico",
"./assets/media/icons/solutions/solutions/wordpress.ico",
"./assets/media/icons/solutions/solutions/zoom.ico"];




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

    for(i=0;i<framework.length;i++){
        let image = document.createElement("IMG");
        image.className = "class skill-image";
        image.src = `${framework[i]}`
        // image.append(skills[i]);
        document.getElementById("frameContainer").appendChild(image);
    };

    for(i=0;i<tools.length;i++){
        let image = document.createElement("IMG");
        image.className = `class skill-image t${i}`;
        image.src = `${tools[i]}`
        // image.append(skills[i]);
        document.getElementById("toolContainer").appendChild(image);
    };

    let image = document.createElement("IMG");
    image.className = "class const-image";
    image.src = ``;
    document.getElementById("const-image").appendChild(image);
}