# QM-Internship-Challenge

To run the testing file follow the instructions below.

<ol> 
<li>Run the command to install TestCafe <code>npm i -g testcafe</code>. You can confirm installation by typing <code>testcafe -v</code>.</li>
<li>Clone this repo and navigate to the directory where qm_internship_challenge.js is located.</li>
<li>To run the tests run the command <code>testcafe chrome qm_internship_challenge.js</code><li>
  a) If you run into errors you may have to add <code> --skip-js-errors</code> to the end to skip JS errors.
  b) If you're want to test with another browser like Safari then replace <code>chrome</code> with <code>safari</code>
  c) You can also run the command tests headless by adding the postfix <code>:headless</code> to the browser, so it looks like <code>chrome:headless</code>.

TestCafe documentation URL - https://testcafe.io/documentation/402635/getting-started