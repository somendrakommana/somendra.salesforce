({
    doInit : function(component, event, helper) {
        console.log("Came from INit");
    },
    SayHello : function (cmp, event, helper) {
        console.log('Came into Sayhello');
        const name=cmp.find("nameInput").get("v.value");
        cmp.set("v.peson", name);
    }
})
