<h1>Some Useable Reactjs Components</h1>

<p>I've come to the intermediate conclusion that it is best for myself to practice building and modifying small React components rather than focus on larger, complete apps.<p>
<p>As such, I'm working through a set of lessons from <a href="https://flowbite.com/docs/components/alerts/">Zoltan Szogyenyi</a> (apologies that I'm not good at typing diacritical marked letters) on using <a href="">Tailwindcss</a> to build small components.</p>
<p>My component code will be somewhat different than Zoltan's as I'm practicing Javascript ES6 and I see some reasonable mods for the components to make them useful</p>
<p>I'm publishing this repo quickly as a blunder caused me to lose all of the first two components before they were saved.</p>
<p>I'm also making use of an npm package to allow conditional code in CSS classNames.<p>

```
    Use:
    npm install classnames
```
<p>I'm also making use of a symbolic link in my /public folder to access icon images.  I'm not using the svg icons from Zoltan's lessons.  You can do that on Linux.  I have Gnome with Adwaita as my theme, so the following works.  If your distribution is different, change it to point where icon images are kept.</p>

```
ln -s /usr/share/icons/Adwaita/32x32/status icons
```
<p>You'll want to keep checking here as I go through the lessons to see all the output and changes.</p>
<p>11/28/2021: Added React V6 Router and pages to turn this into a complete App.  I discovered after just a few of FlowBites tutorials that this would take more than one signle page (SPA).  However, now it is easier to browse the components to discover what you want.<p>
<p>Feel free to use what I've posted, but do so at your own risk.</p>