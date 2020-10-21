# Elithica Front-End Framework (AMD)
A minimalistic front-end framework designed to allow for quick modular development in common languages.

![Preview](/img/preview.png?raw=true "Preview")


# Explanation

The methodology is useful in such cases where a larger library/framework is not required. It is also helpful for students or designers who may have ample experience in HTML, CSS and jQuery and wish to learn a SPA (Single Page Application) structure.

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

## Modules>

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
    <pre>

      ```

      &lt;header&gt;
        &lt;h1>Elithica Example&lt;/h1&gt;
      &lt;/header&gt;

      ```

    </pre>
</p>

<p>
  The headerVM.js looks as follows. The module pattern here is AMD (Asynchronous Module Definition):
</p>


<p>
    <pre>

    ```

      define(['knockout'], function(ko) {
          return function headerViewModal() {
              console.log("Header VM loaded!");
              //Your custom code here.

        } //End VM function
      }); //End Module

    ```

    </pre>
</p>


<p>
  In our example, the component is identified to the system in initBaseCompModel.js.
  Here, we just provide an object to the system as follows:
</p>

<p>
    <pre>

    ```

      {
          name: "header",
          model: "headerVM",
          template: "headerCT.html",
          path: "app/comps/headers/",
          active: "true"
      }

      ```

    </pre>
</p>

<p>
  Once the module is defined, it is now ready to use.
  The headerCT.html is for your HTML code. The templating features use KnockoutJS conventions. So to include your code,
  in the page, you use the data-bind methodology.
</p>

<p>
    <pre>
    ```
        &lt;div data-bind="component: { name: 'headerWidget' }"&gt;&lt;/div&gt;
    ```
    </pre>
</p>

# SPA (Single Page Application) Routing

<p>Apache Scenario: This is a framework that is simply devoted to modularity. You will note that I have included an .htaccess file for Apache. In such cases where it is desired to use this framework for a PHP front-end, this works by directing all traffic to index.html. When I have been asked to do this, I have implemented a front-end routing mechanism or a service-based router in PHP, so there are many possibilities depending on your needs. </p>

<p>NodeJS/Express Scenario: If paired with NodeJS and Express, routing can be controlled by the server, which is generally easier to manage and a more concise scenario.</p>

# Multiple Pages on Standard Servers

<p>If used for multiple pages, instead of SPA, or a hybrid thereof, I have often changed init.js to be an auto-init-configuration loader instead of the init itself. I may provide different examples of this at a later time. </p>
