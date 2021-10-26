# QM-Internship-Challenge

To run the testing file follow the instructions below.

<ol> 
  <li>Run the command to install TestCafe <code>npm i -g testcafe</code>. You can confirm installation by typing <code>testcafe -v</code>.</li>
  <li>Clone this repo and navigate to the directory where qm_internship_challenge.js is located.</li>
  <li>To run the tests run the command <code>testcafe chrome qm_internship_challenge.js</code></li>
    <ul>
      <li>If you run into errors you may have to add <code> --skip-js-errors</code> to the end to skip JS errors.</li>
      <li>If you want to test with another browser like Safari then replace <code>chrome</code> with <code>safari</code>. If you want to test with multiple browsers, you can add a comma to separate them.</li>
      <li>You can also run the command tests headless by adding the postfix <code>:headless</code> to the browser, so it looks like <code>chrome:headless</code>.</li>
    </ul>
</ol>

TestCafe documentation URL - https://testcafe.io/documentation/402635/getting-started