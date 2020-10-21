define(['knockout'], function(ko) {
    return function bodyViewModal() {
        console.log("Body VM loaded!");

        /*
          Body Specific CSS can be applied here or in css/global.css
          This gets applied to the scoped <style> in body.
        */
        this.bodyCSS=ko.observable(`

          main{
            display:none;
            margin-left:auto;
            margin-right:auto;
            width: 97%;
            min-height:1000px;
            border:solid 1px;
            padding:10px;
          }

        `);



  } //End VM function
}); //End Module
