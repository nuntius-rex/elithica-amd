# Elithica Front-End Framework (AMD)
A minimalistic front-end framework designed to allow for quick modular development in common languages.

## Explanation

The Elithica framework is designed with quick, simple modularity in mind. It is useful in such cases where a larger library/framework is not needed and would probably be more trouble than desired. Elithica can also be helpful for students. Likewise designers, who may have ample experience in HTML, CSS, Bootstrap and jQuery, but not have excessive programming experience, who want to use a SPA (Single Page Application) structure will find more in common with their current skill set. With Elithica, you can do as much or as little as you want!

![Preview](/img/preview.png?raw=true "Preview")

## Install

Clone this repo into a server directory:

```
git clone https://github.com/nuntius-rex/elithica-amd
```

Note: The application will fail if opened directly due to modern browser CORS (Cross Origin Resource Sharing) restrictions.

### Running

Open the location on your server. For example:

```
http://localhost/elithica
```
<p>You will find that the framework uses common conventions which can be helpful when learning.</p>

<p>Elithica uses the following core libraries:
  <ul>
    <li>Knockout JS</li>
    <li>jQuery</li>
    <li>Bootstrap</li>
  </ul>
</p>

### Modules

<p>The Elithica mode of building web structures involves a simple modular approach.</p>

<p>The SPA application is built in components made of two files. First, an html template file, and second, a JavaScript view model.
  The Header you see above in read is built as follows.</p>

<p>Here are example names:
  <ul>
    <li>headerCT.html</li>
    <li>headerVM.js</li>
  </ul>
</p>

<p>
  The headerCT.html looks as follows:
</p>

```
<header>
  <h1>Elithica (AMD version)</h1>
</header>
```

<p>
  The headerVM.js looks as follows. The module pattern here is AMD (Asynchronous Module Definition):
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
  In our example, the component is identified to the system in initBaseCompModel.js.
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

<p>This is a framework that is simply devoted to modularity. So it is best paired with NodeJS and Express (example forthcoming). This enables the routing to be handled through the Express middle-ware rather than trying to reinvent the wheel.</p>

<p>However, I have used it with a standard server configuration on Apache and a PHP back-end. The methodology required is beyond this example. Yet the scenario mandates that you configure Apache with an .htaccess file (see code below) to direct all traffic to the index.html by default. Then, you intercept the url request, parse it and then manage component loading and data request accordingly. Again, much more complex that handling with NodeJS.  
</p>

```
DirectoryIndex index.html
FallbackResource index.html

```
