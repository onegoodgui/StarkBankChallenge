# StarkBankChallenge
 
 <p><b>StarBankChallenge</b> is an API created as the coding assessment part of the Stark Bank selection process for the Back End Developer role. </p>

<h1> About </h1>

<p> This API sends periodic invoice payments to random people during 24h. The invoice credits are received through webhook callbacks by the API, which forwards the received amounts through transfers to a bank account. </p>

<h1>Technologies</h1>
<p>The following tools and frameworks were used in the construction of the project:</p>
<div style="display: flex">
  <!-- NodeJS --><img src=https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=Node.JS&logoColor=white>
  <!-- Javascript --><img src=https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black>
  <!-- TypeScript --><img src=https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white>
  <!-- Express --><img src=https://img.shields.io/badge/Express-E81485?style=for-the-badge&logo=Express&logoColor=white>
  <!-- Redis --><img src=https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=Redis&logoColor=white>
  <!-- Jest --><img src=https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=Jest&logoColor=white>
  <!-- Ngrok --><img src=https://img.shields.io/badge/Ngrok-0E1D8D?style=for-the-badge&logo=Ngrok&logoColor=white>
</div>
<h1> How to run </h1>

<ol>
  <li>Clone this repository</li>
  <li>Open Terminal in your code editor of preference</li>
  <li>Change the current working directory to the location where you want the cloned directory</li>
  <li>Type git clone, and then paste the URL you copied earlier.</li>
</ol>
<p>
  
``` 
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY 
```
</p>
<ol start='5'>
  <li>Press enter to create your local clone</li>
  <li> Open the directory where you put your cloned repository with your code editor</li>
  <li> In the terminal of your code editor, run the command below to install the necessary dependencies:</li>
</ol>

<p>
  
``` 
npm i
```
</p>

<ol start='8'>
  <li>Now, to run the server, just type the command below:</li>
</ol>

<p>
  
``` 
npm run start
```
</p>

<ol start='9'>
  <li>Enjoy!</li>
</ol>

<h1>Endpoints</h1>

<ul>
  <li>
    <b> POST </b> "/invoice/send" --> sends invoices for random people in 3h intervals during 24h.
  </li>
   <li>
    <b> POST </b> "/" --> endpoint that receives the invoice payments webhook callbacks. It is automatically used when running the server.
  </li>
</ul>
