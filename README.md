# Elithica Front-End Module System
A minimalistic front-end module system designed to allow for quick modular development in common languages.

<p style="color:red">NOTE: THIS REPO IS RETAINED FOR HISTORCAL REASONS AS PRE-WORK HISTORY OF THE OFFICIAL ELITHICA.<br>
TO DOWNLOAD CURRENT VERSIONS GET OUR <a href="https://www.npmjs.com/package/@elithica/cli" target="_blank">ELITHICA CLI</a>.</p>

## Explanation

<p>The Elithica module system is designed with quick, simple modularity in mind. It is useful in such cases where modularity is the main desire. Elithica can o be helpful for students and designers. Many may have ample experience in HTML, CSS, Bootstrap and jQuery, but may not have excessive programming experience, and yet want to use a SPA (Single Page Application) structure. These will find more in common with their current skill set. With Elithica, you can do as much or as little as you want! Use the module setup for modular jQuery components or use the more advanced KnockoutJS structure to make reactive components. Two modules have been included to demonstrate both concepts.</p>

## Technology

<p>Elithica was originally inspired by the documentation on knockoutjs.com regarding AMD loading with RequireJS, located <a href="https://knockoutjs.com/documentation/amd-loading.html" target="_blank">here</a>. One popular framework that utilizes the same sort of approach described in the Knockout documentation is the much larger and more robust, enterprise-ready <a href="https://www.oracle.com/webfolder/technetwork/jet/index-alta.html" target="_blank">Oracle Jet</a>. While Elithica shares the same sort of modular approach, the comparison has to end there, as Elithica is not robust, and it is not feature rich. It is not really even a framework. It is just designed to do a simple job ("be modular"), with the philosophy of "add only what is needed, not everything that you might need." Perhaps it will serve your needs well!    
</p>

![Preview](/img/preview.png?raw=true "Preview")

## Install

To install this version, clone this repo into a server directory:

```
git clone https://github.com/nuntius-rex/elithica-amd
```

<p>There is also a <a href="https://github.com/nuntius-rex/Elithica-Node">NodeJS version</a> available, that is a full-stack example.</p>

<p>Note: This front-end application will fail if opened directly due to modern browser CORS (Cross Origin Resource Sharing) restrictions. Open on a server such as localhost.</p>

### Running

Open the location on your server. For example:

```
http://localhost/elithica
```
<p>You will find that the system uses common conventions which can be helpful when learning.</p>

<p>Elithica uses the following core libraries:
  <ul>
    <li>Knockout JS</li>
    <li>jQuery</li>
    <li>Bootstrap</li>
  </ul>
</p>

### Modules

<p>The Elithica mode of building web structures involves a simple modular approach.</p>

<p>The SPA application is built in components made of two files. First, an html template file, and second, a JavaScript view model.</p>


<p>The Header you see in the preview above in red is built as follows.</p>

<p>Here are example names:
  <ul>
    <li>headerCT.html</li>
    <li>headerVM.js</li>
  </ul>
</p>

<p>
  The headerCT.html code looks as follows:
</p>

```
<header>
  <h1>Elithica (AMD version)</h1>
</header>
```

<p>
  The headerVM.js code looks as follows. The module pattern here is AMD (Asynchronous Module Definition):
</p>


```
  define(['knockout'], function(ko) {
      return function headerViewModal() {
          console.log("Header VM loaded!");

          //Your custom goes code here.

    } //End VM function
  }); //End Module

```

<p>
  In our example, the component is identified to the system in initBaseCompModel.js located in js/app/sys/config.
  Here, we just provide an object to the system as follows:
</p>

```
  {
      name: "header",
      model: "headerVM",
      template: "headerCT.html",
      path: "app/comps/headers/",
      active: "true"
  }

  ```

<p>
  Once the module is defined, it is now ready to use.
  The headerCT.html is for your HTML code. The templating features use KnockoutJS conventions. So to include your code,
  in the page, you use the data-bind methodology.
</p>

```
    <div data-bind="component: { name: 'header' }"></div>
```

### SPA (Single Page Application) Routing Pages

<p>This is a module system that is simply devoted to modularity. So it is best paired with NodeJS and Express (<a href="https://github.com/nuntius-rex/Elithica-Node">see my example here</a>). This allows the routing to be handled through the Express middle-ware rather than trying to reinvent the wheel.</p>

<p>However, I have used it with a standard server configuration on Apache and a PHP back-end. The methodology required is beyond this example. Yet the scenario mandates that you configure Apache with an .htaccess file (see code below) to direct all traffic to the index.html by default. Then, you intercept the url request, parse it and then manage component loading and data request accordingly. Again, much more complex that handling with NodeJS.  
</p>

```
DirectoryIndex index.html
FallbackResource index.html

```
