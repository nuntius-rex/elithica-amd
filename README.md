# Elithica (AMD)
A minimalistic front-end framework designed to allow for quick modular development in common languages.

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

<h2>Modules</h2>

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

<p>
  <code>
    <pre>

      &lt;header&gt;
        &lt;h1>Elithica Example&lt;/h1&gt;
      &lt;/header&gt;
    </pre>
</code>
</p>

<p>
  The headerVM.js looks as follows. The module pattern here is AMD (Asynchronous Module Definition):
</p>


<p>
  <code>
    <pre>

      define(['knockout'], function(ko) {
          return function headerViewModal() {
              console.log("Header VM loaded!");
              //Your custom code here.

        } //End VM function
      }); //End Module

    </pre>
</code>
</p>


<p>
  In our example, the component is identified to the system in initBaseCompModel.js.
  Here, we just provide an object to the system as follows:
</p>

<p>
  <code>
    <pre>

      {
          name: "header",
          model: "headerVM",
          template: "headerCT.html",
          path: "app/comps/headers/",
          active: "true"
      }
    </pre>
</code>
</p>

<p>
  Once the module is defined, it is now ready to use.
  The headerCT.html is for your HTML code. The templating features use KnockoutJS conventions. So to include your code,
  in the page, you use the data-bind methodology.
</p>

<p>
  <code>
    <pre>

        &lt;div data-bind="component: { name: 'headerWidget' }"&gt;&lt;/div&gt;
    </pre>
</code>
</p>
