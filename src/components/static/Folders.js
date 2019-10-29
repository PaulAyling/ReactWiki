import React from 'react'

const Folders = () => {
  return (
    <div class="container">
    <main>
      <aside>
        <h1>Key Parts of React.js</h1>
        <ul>
          <li class="root">
            readme.md
          </li>
          <li class="root">package.json</li>
          <li class="root">.gitignore</li>
          <li class="folder">node_modules</li>
          <li class="folder">public</li>
          <ul>
            <li>index.html</li>
            <li>Manifest</li>
            <li>favicon.ico</li>
            <li>robots.txt</li>
          </ul>
          <li class="folder">src</li>
          <ul>
            <li>index.js</li>
            <li>index.css</li>
            <li>App.js</li>
            <li>App.css</li>
            <li class="folder">components</li>
            <ul>
              <li class="optional">Auth</li>
              <li class="optional">pages</li>
              <li class="optional">layout</li>
              <li class="optional">routing</li>
            </ul>
            <li class="folder optional">context</li>
            <li class="folder optional">css</li>
            <li class="folder optional">utls</li>
          </ul>
          <li class="folder">Build</li>
        </ul>
      </aside>
      <article>
        <h2>Root</h2>
        <p>
          <strong>readme.md </strong> Application Instruction<br />
          <strong>package.json: </strong> all packages installed for node<br />

          <strong>.gitignore: </strong>files and folders fro GIT to ignore
        </p>
      </article>
    </main>
  </div>
  )
}

export default Folders
