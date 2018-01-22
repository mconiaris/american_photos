Bower is dead, long live npm. And Yarn. And webpack.
Assaf Hefetz
05 Dec, 2017

Link: https://snyk.io/blog/bower-is-dead/

Bower is no longer the dependency manager of choice for front-end projects. While the open source project is still maintained, its creators decided to deprecate it, and advise how to migrate to other solutions—namely Yarn and webpack.

In this post, we explain why Bower used to be great, list six reasons why it isn’t necessary anymore, and explain how to move on to newer and better technologies.

What was Bower good for?
Bower is a package manager, like npm, which manages frameworks, libraries, assets, and utilities, installs them, and makes sure they are up to date.

Traditionally, many web development projects combined npm and Bower. npm was used to manage back-end dependencies, while Bower was used for front-end dependencies. In fact, you needed to use npm in order to install Bower in the first place.

Bower’s main advantage over npm was that it had a flat dependency graph. npm tracks down dependencies for packages and might install thousands of dependencies and sub-dependencies automatically, including many duplicate copies of the same package. As you might imagine, this is not great for front-end projects as it can result in very heavy payloads.

Bower, on the other hand, left it to the user to manage dependencies. For example, if a project had many libraries dependent on jQuery, the user could decide which version of jQuery to install and specify that version as a dependency for the other libraries.

Although Bower’s advantages were compelling, they are now provided by other tools, namely npm, Yarn and webpack. Bower also has some marked disadvantages you should be aware of.

Six reasons to stop using Bower and switch to a new workflow
Below are the main reasons to move away from Bower for front-end dependencies.

1. Bower has been deprecated by its creators
After a long and heated debate on Github, the creators of Bower decided it does not add value to the current web development stack and should be discontinued. The open source project continues to be maintained for the benefit of existing users, but this is a prime reason not to continue using the platform.

2. Bower offered a flat dependency graph, which you can now get with NPM and Yarn
npm 3 offers a flat dependency graph, but with the ability to support multiple versions of the same package if necessary (something Bower cannot do). Also, for those using Yarn, the command yarn install --flat provides a similar effect to Bower (see Yarn CLI documentation).

3. Bower adds complexity and is redundant because it requires NPM
Bower required npm to run. So a frequently asked question was, “why should I add another package manager if I already have npm”?

For many, Bower offered a useful separation between back-end and front-end packages. But there are ways to create the same separation within npm, for example, by creating two repositories. Indeed, Bower appears to be a redundant component for those already running npm.

4. Bower has a separate package ecosystem
Module developers like the fact that npm is ubiquitous. Since everyone uses npm, you can publish your latest package there and be sure your users will have easy access to it. However, until recently, front-end package developers had to publish their package both on npm and on Bower, which was less convenient.

5. Bower put the burden of dependency management on the user
One of the best features of npm is that it automatically installs all the dependencies that are required by the packages referenced in your code. While this is very convenient, it also creates complexity and might lead to a terrible fate known as Dependency Hell.

Bower simply did not provide this functionality, leaving it for users to painstakingly define which package required which dependencies. This avoided dependency issues but created a lot of manual work for users.

With recent advances in npm and supporting technologies like webpack and Yarn, chained dependencies are much easier to work with.

6. Bower doesn’t support different versions of the same package on the same page
This is a corner case, but a fairly common one. In Bower you couldn’t reference the same library from two different packages, but with two different versions. npm 3 provides this capability out of the box, together with a flat dependency graph.

How are packages managed today?
We mentioned that Bower’s advantages had been superseded by newer tools. The modern dependency stack, consisting of npm/Yarn for Node package management and webpack for management of static assets, has made Bower redundant:

npm is the package manager of choice, for both back-end and front-end packages.
Yarn is a front-end for npm which offers several important advantages: higher performance for installation of dependencies, a more robust ability to lock or “pin” packages to a specific version, improved security and an offline mode. Since the release of npm 3, some of these advantages are less pronounced so it’s worth taking a close look to see if Yarn adds value to your workflow.
webpack is a module bundler, or in other words, a build tool. It provides loaders and plugins that allow you to prepare static file dependencies for your web projects. For example, webpack can take a bunch of CSS files, minify them, and build them as part of your project. webpack fills in an important missing piece for npm users, because many of the assets used to build a web app are not Node.js components. webpack can pull in, prepare and install all those other elements, while npm installs the Node libraries used by the web app.
There are already a few great resources for how to migrate from Bower to a more modern and versatile stack, including Anrejs Abrickis’s excellent write-up and the official post by Bower creator Adam Stankiewicz.

Conclusion
The labyrinth of front-end libraries and frameworks available today makes using a package manager to handle your front-end dependencies critical.

Bower played an important role in improving the way front-end developers manage their dependencies—the advantages it provided set the stage for later features in npm and Yarn. But Bower is no longer the best option in town. The arrival of Yarn and changes in npm 3 allow you to get all the benefits of Bower without the hassle.

Migrating to npm or Yarn will greatly simplify your development process. Today’s tooling makes navigating the vast array of front-end components more manageable than ever.
